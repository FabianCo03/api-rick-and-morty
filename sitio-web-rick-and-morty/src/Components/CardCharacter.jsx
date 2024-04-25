import React from 'react'

const CardCharacter = ({
  imgCharacter,
  nameCharacter,
  originCharacter,
  status,
  species,
  location,
}) => {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-2 m-2 mt-16 relative">
        <img
          className="w-full rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer object-cover"
          src={imgCharacter}
          alt="Imagen del personaje"
        />
        <div className="p-2 font-bold">
          <p className="text-white text-center">{nameCharacter}</p>
          <p className="text-white text-center">Origen: {originCharacter}</p>
          <p className="text-white text-center">
            {status} - {species}
          </p>
        </div>
      </div>
    </>
  )
}

export default CardCharacter
