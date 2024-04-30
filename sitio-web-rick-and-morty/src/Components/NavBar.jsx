import imgTitle from '../assets/title.png'

const NavBar = ({ toggleInfoDataApi }) => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-3 w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <img
            className="w-36 cursor-pointer"
            src={imgTitle}
            alt="Imágen del título Rick and Morty"
          />
          <div className="mr-10">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="hover:text-green-300 flex items-center"
                  onClick={toggleInfoDataApi}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                    />
                  </svg>
                  <span className="font-bold">Datos API</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
