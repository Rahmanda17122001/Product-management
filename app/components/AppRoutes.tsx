import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Addproductpage from '../pages/Addproductpage';
import NewProduct from '../pages/NewProduct';

const AppRoutes: React.FC = () => {
    return(
        <div>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/product" element={<Addproductpage/>} />
              <Route path="/NewProduct" element={<NewProduct/>} />
              <Route path="/*" element={<Dashboard/>} />
            </Routes>
        </div>
    )
}

export default AppRoutes;