import React from 'react'
import { ReactComponent as Spy } from '../../_Assets/spy.svg'

const NavUI = ({ dark, toggleMode, primaryColor }) => (
    <nav className={`flex items-center justify-between flex-wrap bg-${primaryColor}-${dark ? 800 : 500} p-6`}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Spy style={{ height: '40', width: '40' }} />
            <span className="font-semibold text-xl tracking-tight px-3">Hacker News Clone</span>
        </div>
        <div className="block lg:hidden">
            <button className={`flex items-center px-3 py-2 border rounded text-${primaryColor}-200 border-${primaryColor}-400 hover:text-white hover:border-white`}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="uppercase text-sm font-medium lg:flex-grow">
                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 text-${primaryColor}-200 hover:text-white mx-4`}>
                    Popular
                </a>
                <a href="#responsive-header" className={`block mt-4 lg:inline-block lg:mt-0 text-${primaryColor}-200 hover:text-white mx-4`}>
                    Recent
                </a>
            </div>
            <div>
                <form>
                    <div className={`flex items-center cursor-default uppercase text-sm font-medium text-${primaryColor}-100 hover:text-white`}>
                        <div className="px-3">Dark Mode</div>
                        <input className="toggle" type="checkbox" checked={dark} onChange={toggleMode()} />
                    </div>
                </form>
            </div>
        </div>
    </nav>
)

export default NavUI