/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import  { FaBars, FaTimes,} from "react-icons/fa"
import "./nav.css"




function navbar() {
    const [klik, setklik] = useState(false)
    
    
    
    const nastaviklik  =()=> setklik(!klik)
    const zapriMobileMeni =()=> setklik(false)
  
    
 

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
                         <li className="nav-list nav-dropdown">
                        <Link to="/parts" className="nav-dropdown-linki dropbtn " onClick={nastaviklik}>
                             PARTS                               
                         </Link>
                    </li>
                    <li className="nav-list">
                        
                    </li>
                    <li className="nav-list">
                        <Link to="/support" className="nav-linki" onClick={zapriMobileMeni}>
                            SUPPORT
                        </Link>

                    </li>

                    
                    </ul>
                    
                </div>


            </div>
            
        
       

       

    )
}

export default navbar
