import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom';

const SideMenu = ({open, handleClose}) => {
    if ( !open )return null

    return ReactDom.createPortal(
        <>
            <div
                className=" fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
                onClick={handleClose}>
                <div className="fixed left-0 opacity-100">
                    <div className="relative bg-white shadow-lg h-screen w-52 text-gray-900 z-20 pl-5 rounded-r-md">
                        <div className="flex flex-col">
                            <h3><Link className="font-bold text-md hover:text-blue-300 border-b-4 hover:border-blue-300 mb-2" to="/favourites">Favourites</Link></h3>
                            <h3><Link className="font-bold text-md hover:text-blue-300 border-b-4 hover:border-blue-300" to="/">Home</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ,
    document.getElementById('portal-sidemenu'))
}

export default SideMenu