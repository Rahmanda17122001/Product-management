"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Addproductpage from './pages/Addproductpage';
import AppRoutes from './components/AppRoutes';

export default function Home() {
  return (
    <Router>
      <div className="flex flex-row min-h-screen min-w-full bg-slate-300 text-slate-950">
        <div className="flex-basis-1/6">
          <Sidebar/>
        </div>
        <div className="grow p-4">
          <AppRoutes/>
        </div> 
      </div>
    </Router>

  );
}
