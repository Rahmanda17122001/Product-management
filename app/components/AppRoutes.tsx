import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Addproductpage from '../pages/Addproductpage';

const AppRoutes: React.FC = () => {
    return(
        <div>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/product" element={<Addproductpage/>} />
            </Routes>
        </div>
    )
}

export default AppRoutes;