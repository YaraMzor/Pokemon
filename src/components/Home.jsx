import React, { useEffect, useRef, useState } from 'react'
import style from './Home.css'
import AboutPokemon from "./AboutPokemon";

//const [pokiId,setPokiId] =useState('');

export default function Home(){
    const [pokemons, setpokemons]= useState([]);
    const shouldFetch= useRef(true);
    useEffect(()=>{
        try{
            if(shouldFetch.current){
                const fetchData =async () => {
                    const Data = await fetch('https://pokeapi.co/api/v2/pokemon/').then(data => data.json());
                    const pokemon_Namer_Url= Data.results;
                    pokemon_Namer_Url.forEach(async pokemonURL =>{
                        var pokemon = {
                            "name": ''
                           ,"img_url": ''
                    };
                        const pokemonData = await fetch(pokemonURL.url).then(pokemon_data => pokemon_data.json());
                        pokemon.name = pokemonData.name;
                        pokemon.img_url = pokemonData.sprites.front_default;
                      //  console.log(pokemon.name);
                       // console.log(pokemon.img_url);
                        console.log(pokemon.id);
                        setpokemons(pokemons => [...pokemons,pokemon]);
                    });
                }
                fetchData();
            }
            return () => {
                shouldFetch.current = false;
            }
        }catch(error){
            console.log(error);
        }
    },[]);
    
    return(
        <div className='row' >
            {pokemons.map(data =>(
                <div className='column'> 
                    <h2> {data.id}</h2>
                    <div> 
                      <h2> {data.name} </h2>
                    
                      <a target="AboutPokemon.jsx" href="AboutPokemon.jsx">
                          <img className='img' src={data.img_url} alt="" ></img>
                      </a>
 
                    </div>
                </div>
            ))}
        </div> 
    )
}


