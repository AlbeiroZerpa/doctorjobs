import clientImg from "../assets/images/client/16.jpg"

import {FiAirplay, FiClock, FiFileText, FiHeart, FiLogOut} from '../assets/icons/vander'

export default function AccountingTab({ activeTab, setactiveTab }) {

    let loadFile =(e)=>{
        var image = document.getElementById(e.target.name);
        image.src = URL.createObjectURL(e.target.files[0]);
    }

    return (
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
            <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="profile-pic text-center mb-5">
                        <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e) => loadFile(e)} />
                        <div>
                            <div className="relative h-28 w-28 mx-auto">
                                <img src={clientImg} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">Jesus Zamora</h5>
                                <p className="text-slate-400">jesus@hotmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-700">
                        <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                            <li
                                className={`navbar-item account-menu ${activeTab === 'perfil' ? 'active text-red-500' : 'text-slate-400'}`}
                                onClick={() => setactiveTab('perfil')}
                            >
                                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                                    <span className="me-2 mb-0"><FiAirplay className="size-4" /></span>
                                    <h6 className="mb-0 font-medium">Perfil</h6>
                                </div>
                            </li>

                            <li
                                className={`navbar-item account-menu ${activeTab === 'verificacion' ? 'active text-red-500' : 'text-slate-400'}`}
                                onClick={() => setactiveTab('verificacion')}
                            >
                                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                                    <span className="me-2 mb-0"><FiFileText className="size-4" /></span>
                                    <h6 className="mb-0 font-medium">Verificación</h6>
                                </div>
                            </li>

                            <li
                                className={`navbar-item account-menu ${activeTab === 'favoritos' ? 'active text-red-500' : 'text-slate-400'}`}
                                onClick={() => setactiveTab('favoritos')}
                            >
                                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                                    <span className="me-2 mb-0"><FiHeart className="size-4" /></span>
                                    <h6 className="mb-0 font-medium">Favoritos</h6>
                                </div>
                            </li>

                            
                            <li
                                className={`navbar-item account-menu ${activeTab === 'mihistorial' ? 'active text-red-500' : 'text-slate-400'}`}
                                onClick={() => setactiveTab('mihistorial')}
                            >
                                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                                    <span className="me-2 mb-0"><FiClock className="size-4" /></span>
                                    <h6 className="mb-0 font-medium">Mi Historial</h6>
                                </div>
                            </li>

                            <li
                                className={`navbar-item account-menu ${activeTab === 'salir' ? 'active text-red-500' : 'text-slate-400'}`}
                                onClick={() => setactiveTab('salir')}
                            >
                                <div className="navbar-link flex items-center py-2 rounded cursor-pointer">
                                    <span className="me-2 mb-0"><FiLogOut className="size-4" /></span>
                                    <h6 className="mb-0 font-medium">Salir</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
