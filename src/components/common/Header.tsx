import { useLocation, Link } from "react-router-dom"

export default function Header () {
  const location = useLocation();
  const routes = [
    { label: 'Inicio', path: '/' },
    { label: 'Nosotros', path: '/about-us' },
    { label: 'Videos', path: '/videos' },
  ];

  return (
    <header className="top-0 z-20 bg-white sticky w-full p-5 flex justify-around gap-3 items-center border-b border-gray-300">
      <Link to="/" className="flex-grow-0">
        <h2 className="font-semibold text-custom-orange text-xl sm:text-2xl">KUKS FRESH</h2>
      </Link>
      <nav className="">
        <ul className="flex gap-x-5 items-center">
          {
            routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>
                  {route.label}
                  { location.pathname == route.path && (<div className="w-full h-1 rounded-xl bg-custom-orange"></div>) }                
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}