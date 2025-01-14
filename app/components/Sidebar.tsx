"use client";
import { Link  } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return(
        <div>
            <nav className="flex flex-col w-64 bg-slate-300 p-4">
                <Link to="/" className="py-2 px-4 text-gray-700 hover:bg-slate-200 rounded"> Dashboard</Link>
                <Link to="/product" className="py-2 px-4 text-gray-700 hover:bg-slate-200 rounded"> Dashboard</Link>
                <Link to="/NewProduct" className="py-2 px-4 text-gray-700 hover:bg-slate-200 rounded"> Dashboard</Link>
            </nav>
        </div>
    )
}

export default Sidebar;