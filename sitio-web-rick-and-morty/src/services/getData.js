export async function getData() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    if (!response.ok) {
      throw new Error('No responde el API')
    }
    const oData = await response.json()
    return oData
  } catch (error) {
    console.log(`Error data api ${error}`)
  }
}
