import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'; 
import Dashboard from './pages/Dashboard'; 
import CreateCompany from './pages/CreateCompany';
import ProductionReport from './pages/ProductionReportPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-company" element={<CreateCompany />} />
            <Route path="/production-report" element={<ProductionReport />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
