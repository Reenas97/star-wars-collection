import {Routes, Route} from 'react-router-dom';
import Personagens from "./pages/Personagens";
import Home from "./pages/Home";
import Planetas from "./pages/Planetas";
import Naves from "./pages/Naves";
import Filmes from "./pages/Filmes";
import React from 'react';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/personagens" element={<Personagens />}/>
            <Route path="/planetas" element={<Planetas />}/>
            <Route path="/naves" element={<Naves />}/>
            <Route path="/filmes" element={<Filmes />}/>
        </Routes>
    )
}

export default AppRoutes