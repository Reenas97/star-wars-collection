import {Routes, Route} from 'react-router-dom';
import Personagens from "./pages/Personagens";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/personagens" element={<Personagens />}/>
        </Routes>
    )
}

export default AppRoutes