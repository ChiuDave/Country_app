import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';


import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import RechercheParRegion from './composants/RechercheParRegion'
import RechercheForum from './composants/RechercheForm';

import { ThemeProvider } from './context/ThemeContexte';
import Layout from './composants/Layout';





function App() {
    return (
           <Router>
                <ThemeProvider>
                    <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Accueil />} />
                        <Route path="/recherche" element={<Recherche />} />
                        <Route path="/pays/:codePays" element={<Pays />} />
                        <Route path='/region' element={<RechercheParRegion />}/>
                        <Route path='/form' element={<RechercheForum />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                    </Routes>
                </ThemeProvider>
            </Router>

    );
}
export default App;
