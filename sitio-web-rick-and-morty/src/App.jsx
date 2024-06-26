import React, { useState, useEffect } from 'react'
import CardCharacter from './components/CardCharacter'
import NavBar from './components/NavBar'
import InfoDataApi from './components/InfoDataApi'
import { getData } from './services/getData'

function App() {
  const [characters, setCharacters] = useState([])
  const [showInfoDataApi, setShowInfoDataApi] = useState(false)

  const toggleInfoDataApi = () => {
    setShowInfoDataApi(!showInfoDataApi)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData()
        if (data && data.results && data.results.length > 0) {
          const charactersData = data.results.map((character) => ({
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
    fetchData()
  }, [])

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-green-700 w-full relative mt-16">
        <div className="z-50 absolute top-0 right-0 text-sm text-white h-full mt-3">
          {showInfoDataApi && <InfoDataApi data={characters} />}
        </div>
        <NavBar toggleInfoDataApi={toggleInfoDataApi} />
        <div className="flex flex-wrap justify-center z-0">
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
