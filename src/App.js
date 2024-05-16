import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import React from 'react';
import {Menu,MenuItem} from 'semantic-ui-react'

import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import RechercheParRegion from './composants/RechercheParRegion'
import RechercheForum from './composants/RechercheForm';




function App() {
    return (
           <Router>
            <header>
                <h2>TP2 APP WEB 2 </h2>
                <Menu>
    
                    <MenuItem>
                    
                        <NavLink to='/' className={({isActive}) => [isActive ? "lien-active": ""]} 
                            style={({isActive,isPending}) => {return {color: isActive ? "red" : "black", fontWeight: isActive ? "bold": "" ,textDecoration: isPending ?"none":"none"}}} end> 
                             Accueil 
                        </NavLink>
                    </MenuItem>
              
                    <MenuItem>
                        <NavLink to='/recherche'className={({isActive}) => [isActive ? "lien-active": ""]} 
                            style={({isActive,isPending}) => {return {color: isActive ? "red" : "black", fontWeight: isActive ? "bold": "" ,textDecoration: isPending ?"none":"none"}}} >  
                            Barre de Recherche 
                        </NavLink>
                    </MenuItem>
               
                    <MenuItem>
                        <NavLink to='/pays' className={({isActive}) => [isActive ? "lien-active": ""]} 
                            style={({isActive,isPending}) => {return {color: isActive ? "red" : "black", fontWeight: isActive ? "bold": "" ,textDecoration: isPending ?"none":"none"}}}>  
                            PAYS 
                        </NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to='/region'className={({isActive}) => [isActive ? "lien-active": ""]} 
                            style={({isActive,isPending}) => {return {color: isActive ? "red" : "black", fontWeight: isActive ? "bold": "" ,textDecoration: isPending ?"none":"none"}}}>
                                Recherche par régions
                            </NavLink>
                    </MenuItem>

                    <MenuItem>
                        <NavLink to='/form'className={({isActive}) => [isActive ? "lien-active": ""]} 
                            style={({isActive,isPending}) => {return {color: isActive ? "red" : "black", fontWeight: isActive ? "bold": "" ,textDecoration: isPending ?"none":"none"}}}>
                                Form
                            </NavLink>
                    </MenuItem>
               
                </Menu>
            </header>

                <Routes>

                    <Route path="/" element={<Accueil />} />
                    <Route path="/recherche" element={<Recherche />} />
                    <Route path="/pays/:codePays" element={<Pays />} />
                    <Route path='/region' element={<RechercheParRegion />}/>
                    <Route path='/form' element={<RechercheForum />} />
                    <Route path="*" element={<Page404 />} />

                </Routes>
            </Router>

    );
}
export default App;
