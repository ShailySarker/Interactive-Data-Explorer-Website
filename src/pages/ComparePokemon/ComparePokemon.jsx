import React, { useState } from 'react';
import usePokemonComparisonData from '../../hooks/usePokemonComparisonData';

const ComparePokemon = () => {
    const [pokemon1Name, setPokemon1Name] = useState('');
    const [pokemon2Name, setPokemon2Name] = useState('');
    const { pokemonData: data1, fetchPokemonData: fetchData1, loading: loading1, error: error1 } = usePokemonComparisonData();
    const { pokemonData: data2, fetchPokemonData: fetchData2, loading: loading2, error: error2 } = usePokemonComparisonData();

    const handleCompare = () => {
        if (pokemon1Name) fetchData1(pokemon1Name);
        if (pokemon2Name) fetchData2(pokemon2Name);
    };

    const renderStats = (stats) => (
        <ul>
            {stats.map((stat) => (
                <li key={stat.stat.name}>
                    <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Compare Pokémon</h2>
            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    placeholder="First Pokémon"
                    value={pokemon1Name}
                    onChange={(e) => setPokemon1Name(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="text"
                    placeholder="Second Pokémon"
                    value={pokemon2Name}
                    onChange={(e) => setPokemon2Name(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <button onClick={handleCompare} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Compare
                </button>
            </div>

            <div className="flex space-x-8">
                <div className="w-1/2">
                    {loading1 && <p>Loading...</p>}
                    {error1 && <p className="text-red-500">{error1}</p>}
                    {data1 && (
                        <div>
                            <h3 className="text-xl font-semibold capitalize">{data1.name}</h3>
                            <img src={data1.sprites.front_default} alt={data1.name} />
                            {renderStats(data1.stats)}
                        </div>
                    )}
                </div>
                <div className="w-1/2">
                    {loading2 && <p>Loading...</p>}
                    {error2 && <p className="text-red-500">{error2}</p>}
                    {data2 && (
                        <div>
                            <h3 className="text-xl font-semibold capitalize">{data2.name}</h3>
                            <img src={data2.sprites.front_default} alt={data2.name} />
                            {renderStats(data2.stats)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ComparePokemon;