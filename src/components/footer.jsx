import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Creado por <Link to="https://alucinamkt.com/" target="_blank" className="text-reset">AlucinaMKT</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}