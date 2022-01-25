import React, { useState } from 'react';
import Navbar from "./Navbar";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "../styles/PortfolioContainer.css";


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        if (currentPage === "About Me"){
            return <About />;
        }
        if (currentPage === "Portfolio"){
            return <Portfolio />;
        }
        if (currentPage === "Services"){
            return <Services />;
        }
        if (currentPage === "Contact"){
            return <Contact />;
        }
        return <About />; 
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}