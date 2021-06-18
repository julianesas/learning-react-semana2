import React, {useState, useEffect} from 'react'

const Filter =()=>{
    const [pokemons, setPokemons] = useState([])
    const [busca,setBusca] = useState('')
    const [filterPokemons, setFilterPokemons]= useState([])

    useEffect(()=>{
        const getPokemons = async()=>{
            const response = await fetch("https://borgesdn.github.io/pokedex-source/pokedex.json")
            const data = await response.json()
            setPokemons(data)
        }
        getPokemons()

    },[])
    useEffect(()=>{
        setFilterPokemons(
            pokemons.filter(pokemon =>{
                return pokemon.name.includes(busca)
            })
        )
    }, [busca, pokemons])



    return(
        <>
            <input placeholder='Digite aqui o nome do pokemon' onChange={e=>{setBusca(e.target.value)}}/>
            {filterPokemons.map(pokemon=>{
                return(
                    <div key={pokemon.id} >
                        <p>{pokemon.name}</p>
                    </div>  
                )
            })}
        </>
    )
}

export default Filter