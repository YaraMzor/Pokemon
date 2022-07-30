
import React, { useState } from 'react'
import style from './Header.css'



export default function Header(){
    const img ='image.png'
    const [pokemonImg, setPokemonImg]= useState();
    const [inputValue, setInputValue]= useState();

    const onSearchInputChange = (event) =>{
        setInputValue(event.target.value);
    };

    const Search = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then((Response)=> Response.json())
        .then((data)=>{
            setPokemonImg(data.sprites.front_default);
        });
    };
        return (
        <div className='Header'>
            <img src={img} height={140} width={387} />
            <div>
               <input type="text" onChange={onSearchInputChange}></input>
            </div> 
            
            <button className='search' onClick={Search}> Search</button>
            {pokemonImg &&(
                <div>
                    <img className='img1' src={pokemonImg} alt="pokemon" />
                </div>
            )}
        </div>
    );
} 



