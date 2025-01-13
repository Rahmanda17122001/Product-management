import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
    return(
        <div>
            <Routes>
                <Route path="/"   />
                <Route path="/about"  />
                <Route path="/contact"  />
            </Routes>
        </div>
    )
}
export default AppRoutes;