const InfoDataApi = ({ data }) => {
  return (
    <div
      className="absolute top-0 right-0 overflow-auto p-4 text-sm text-white h-full"
      style={{ backdropFilter: 'blur(10px)', background: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="flex justify-center p-8">
        <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-900 to-green-900 px-4 py-2 rounded">
          Datos encontrados: {data.length}
        </h2>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default InfoDataApi
