import { useMemo, useState } from "react";
import usePokemonData from "../../hooks/usePokemonData";
import usePagination from "../../hooks/usePagination";
import Pagination from "./Components/Pagination";
import SearchBar from "./Components/SearchBar";
import SortFilter from "./Components/SortFilter";
import TypeFilter from "./Components/TypeFilter";
import PokemonCard from "./Components/PokemonCard";
import RandomPokemon from "./Components/RandomPokemon";

const Home = () => {
    const { pokemonList, types, loading, error } = usePokemonData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(20);

    const filteredPokemon = useMemo(() => {
        let filtered = pokemonList;

        if (searchTerm) {
            filtered = filtered.filter((p) =>
                p?.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedTypes.length > 0) {
            filtered = filtered?.filter((p) =>
                selectedTypes.every((type) =>
                    p?.types?.map((t) => t?.type?.name).includes(type)
                )
            );
        }

        if (sortOption) {
            const [key, order] = sortOption.split('-');
            filtered = filtered.sort((a, b) => {
                if (key === 'name') {
                    return order === 'asc'
                        ? a?.name?.localeCompare(b.name)
                        : b?.name?.localeCompare(a.name);
                } else if (key === 'id') {
                    return order === 'asc' ? a.id - b.id : b.id - a.id;
                }
                return 0;
            });
        }

        return filtered;
    }, [pokemonList, searchTerm, selectedTypes, sortOption]);

    const {
        currentData,
        currentPage,
        maxPage,
        jump,
    } = usePagination(filteredPokemon, itemsPerPage);

    if (loading)
        return <p className="italic text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">Loading Pokémon data...</p>;
    if (error)
        return (
            <p className="italic text-center text-red-500 xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">
                Error fetching Pokémon data.
            </p>
        );

    return (
        <div className="xl:px-20 lg:px-14 md:px-7 px-5 bg-[#A21D3C]/20 xl:pt-5 pt-4 xl:pb-24 lg:pb-20 md:pb-16 pb-10">
            <div className="flex md:flex-row flex-col xl:gap-5 lg:gap-3 md:gap-3">
                <div className="md:w-1/4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <SortFilter sortOption={sortOption} setSortOption={setSortOption} />
                        <TypeFilter
                            types={types}
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                        />
                        <div className="flex flex-col lg:gap-2 gap-[6px]">
                            <label className="w-full font-semibold lg:text-base text-sm">Items per page:</label>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="xl:px-4 px-3 xl:py-2 py-[6px] xl:text-base text-[13.4px] shadow-md border-2 font-medium border-[#A21D3C] rounded-xl bg-white w-full"
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center md:gap-0 gap-3 pt-4 xl:pb-6 md:pb-5 pb-0">
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center md:gap-0 gap-3 pt-4 xl:pb-6 md:pb-5 pb-0">
                        <div className="xl:w-[75%] lg:w-1/3 md:w-[40%] w-[90%]">

                        </div>
                        <div className="xl:w-[23.5%] lg:w-1/3 md:w-[40%] w-[90%] flex flex-row items-center">

                        </div>
                    </div>
                </div>
                <div className="md:w-3/4 w-full">
                    {filteredPokemon?.length === 0 ? (
                        <p className="col-span-full text-center xl:h-[550px] lg:h-[400px] md:h-[500px] h-[300px] flex justify-center items-center font-semibold xl:text-2xl md:text-xl text-lg">
                            No Pokémon match your search !!
                        </p>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-4 md:gap-3 gap-2">
                                {currentData()?.map((pokemon) => (
                                    <PokemonCard key={pokemon?.id} pokemon={pokemon} />
                                ))}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                maxPage={maxPage}
                                onPageChange={jump}
                            />
                        </>
                    )}
                </div>
            </div>
            <RandomPokemon />
        </div>
    );
};

export default Home;