import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Heating from './pages/Heating'; 
import Cooling from './pages/Cooling';
import Maintenance from './pages/Maintenance'

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
    if (currentPage === 'Services') {
      return <Services handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Heating') { 
      return <Heating />;
    }
    if (currentPage === 'Cooling') {
      return <Cooling />;  
    }
    if (currentPage === 'Maintenance') {
      return <Maintenance />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}