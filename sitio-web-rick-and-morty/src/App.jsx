import React, { useState, useEffect } from 'react'
import CardCharacter from './Components/CardCharacter'
import NavBar from './Components/NavBar'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getDataApi = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character',
        )
        if (!response.ok) {
          throw new Error('No responde el API')
        }

        const oData = await response.json()

        if (oData.results && oData.results.length > 0) {
          const charactersData = oData.results.map((character) => ({
            imgCharacter: character.image,
            nameCharacter: character.name,
            originCharacter: character.origin.name,
            status: character.status,
            species: character.species,
            location: character.location.name,
          }))
          setCharacters(charactersData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getDataApi()
  }, [])

  return (
    <>
      <div className="bg-gradient-to-br from-blue-900 to-green-700 w-full relative mt-16">
        <NavBar />
        <div className="flex flex-wrap justify-center">
          {characters.map((character, index) => (
            <CardCharacter
              key={index}
              imgCharacter={character.imgCharacter}
              nameCharacter={character.nameCharacter}
              originCharacter={character.originCharacter}
              status={character.status}
              species={character.species}
              location={character.location}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
