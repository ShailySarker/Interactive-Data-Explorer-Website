import React, { useState } from 'react';
import usePokemonComparisonData from '../../hooks/usePokemonComparisonData';
import usePokemonList from '../../hooks/usePokemonList';

const ComparePokemon = () => {
    const { pokemonList, loading: listLoading, error: listError } = usePokemonList();
    const [selectedPokemon1, setSelectedPokemon1] = useState('');
    const [selectedPokemon2, setSelectedPokemon2] = useState('');

    const {
        comparePokemonData: data1,
        fetchPokemonDataForComparing: fetchData1,
        loading: loading1,
        error: error1,
    } = usePokemonComparisonData();

    const {
        comparePokemonData: data2,
        fetchPokemonDataForComparing: fetchData2,
        loading: loading2,
        error: error2,
    } = usePokemonComparisonData();

    const handleCompare = () => {
        if (selectedPokemon1) fetchData1(selectedPokemon1);
        if (selectedPokemon2) fetchData2(selectedPokemon2);
    };

    const renderStats = (stats) => (
        <ul className='flex flex-col md:gap-2 gap-[6px]'>
            {stats?.map((stat) => (
                <li key={stat?.stat?.name}>
                    <strong>{stat?.stat?.name}:</strong> {stat?.base_stat}
                </li>
            ))}
        </ul>
    );

    if (listLoading) return <p>Loading Pokémon list...</p>;
    if (listError) return <p className="text-red-500">{listError}</p>;

    return (
        <div className="bg-[#A21D3C]/20 xl:px-20 lg:px-14 md:px-7 px-5 xl:pt-5 pt-4 xl:pb-24 lg:pb-20 md:pb-16 pb-10">
            <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold mb-6">Compare Pokémon Stats</h2>
            <div className='flex flex-col items-center gap-5'>
                <div className="flex md:flex-row flex-col justify-center md:gap-5 gap-3">
                    <div>
                        <label htmlFor="pokemon1" className="block mb-1 font-medium">
                            Pokémon 1:
                        </label>
                        <select
                            id="pokemon1"
                            value={selectedPokemon1}
                            onChange={(e) => setSelectedPokemon1(e.target.value)}
                            className="border-2 border-[#A21D3C] bg-white px-2 py-2 rounded-xl"
                        >
                            <option value="">Select Pokémon</option>
                            {pokemonList?.map((name) => (
                                <option key={name} value={name}>
                                    {name?.charAt(0).toUpperCase() + name?.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pokemon2" className="block mb-1 font-medium">
                            Pokémon 2:
                        </label>
                        <select
                            id="pokemon2"
                            value={selectedPokemon2}
                            onChange={(e) => setSelectedPokemon2(e.target.value)}
                            className="border-2 border-[#A21D3C] bg-white px-2 py-2 rounded-xl"
                        >
                            <option value="">Select Pokémon</option>
                            {pokemonList?.map((name) => (
                                <option key={name} value={name}>
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex items-end">
                    <button
                        onClick={handleCompare}
                        className="bg-[#A21D3C] text-white px-8 py-2 rounded-xl font-medium"
                    >
                        Compare
                    </button>
                </div>
            </div>

            <div className="flex justify-center xl:gap-20 lg:gap-14 md:gap-8 gap-2 mt-12">
                <div>
                    <div className="xl:p-12 lg:p-8 md:p-6 p-4 border-2 border-[#A21D3C] rounded-xl bg-white">
                        {loading1 && <p className='xl:py-56 lg:py-48 md:py-52 text-center font-medium xl:text-lg text-base italic'>Loading Pokémon 1...</p>}
                        {error1 && <p className="xl:py-56 lg:py-48 md:py-5 text-red-500 font-medium italic">{error1}</p>}
                        {data1 && (
                            <div className=''>
                                <img className='mx-auto xl:w-52 xl:h-52 lg:w-48 lg:h-48 md:w-44 md:h-44 w-28 h-28' src={data1?.sprites?.front_default} alt={data1?.name} />
                                <h3 className="mb-4 xl:text-2xl md:text-xl text-lg font-semibold capitalize text-center">{data1?.name}</h3>
                                <p className='xl:text-xl md:text-lg text-base'><span className='font-semibold'>Stats: </span> </p>
                                <p className='md:pl-3 pl-2 pt-2 xl:text-base md:text-[15px] text-[13.5px]'>
                                    {renderStats(data1?.stats)}
                                </p>
                            </div>
                        )}
                    </div>
                    <p className='text-center xl:text-lg text-base italic font-bold mt-3'>Pokémon 1</p>
                </div>
                <div>
                    <div className="xl:p-12 lg:p-8 md:p-6 p-4 border-2 border-[#A21D3C] rounded-xl bg-white">
                    {loading2 && <p className='xl:py-56 lg:py-48 md:py-52 text-center font-medium xl:text-lg text-base italic'>Loading Pokémon 2...</p>}
                    {error2 && <p className="text-red-500 xl:py-56 lg:py-48 md:py-5 font-medium italic">{error2}</p>}
                        {data2 && (
                            <div className=''>
                                <img className='mx-auto xl:w-52 xl:h-52 lg:w-48 lg:h-48 md:w-44 md:h-44 w-28 h-28' src={data2?.sprites?.front_default} alt={data2?.name} />
                                <h3 className="mb-4 xl:text-2xl md:text-xl text-lg font-semibold capitalize text-center">{data2?.name}</h3>
                                <p className='xl:text-xl md:text-lg text-base'><span className='font-semibold'>Stats: </span> </p>
                                <p className='md:pl-3 pl-2 pt-2 xl:text-base md:text-[15px] text-[13.5px]'>
                                    {renderStats(data2?.stats)}
                                </p>
                            </div>
                        )}
                    </div>
                    <p className='text-center xl:text-lg text-base italic font-bold mt-3'>Pokémon 2</p>
                </div>
            </div>
        </div>
    );
};

export default ComparePokemon;
