/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import  { FaBars, FaTimes,} from "react-icons/fa"
import "./nav.css"
import logo from "./logo-web.png"

import { Gumb } from "./gumb"

function navbar() {
    const [klik, setklik] = useState(false)
    const [gumb, setGumb]= useState(false)
    
    
    const nastaviklik  =()=> setklik(!klik)
    const zapriMobileMeni =()=> setklik(false)
    const showGumb =()=>{
        if(window.innerWidth>=960){
            setGumb(false)

        }
        else{
            setGumb(true)
        }
    }
    
    
    window.addEventListener("resize", showGumb);

    return (
       <div className="navbar">
           <div className="navbar-container container" >
               
                 
                 <Link to="/" className="navbar-logo"  >
                   <div className="slika"/>
                 </Link>
                                          
                <div className="meni-ikona"  onClick={nastaviklik} >
                 {klik ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={klik ? "nav-meni active":"nav-meni"}>
                    <li className="nav-list">
                        <Link to="/" className="nav-linki" onClick={zapriMobileMeni}>
                            HOME
                        </Link>
                    </li>
                    
                    <li className="nav-list">
                        <Link to="/3d-viewer" className="nav-linki" onClick={zapriMobileMeni}>
                            <p>3D CONFIGURATOR</p>
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link to="/how-it-works" className="nav-linki" onClick={zapriMobileMeni}>
                        PARTS
                        </Link>
                    </li>
                    <li className="nav-list">
                        <Link to="/parts" className="nav-linki" onClick={zapriMobileMeni}>
                            
                        </Link>

                    </li>

                    
                    </ul>
                    {gumb && <Gumb buttonStyle="gumb-default"></Gumb>}
                </div>


            </div>
            
        
       

       

    )
}

export default navbar
