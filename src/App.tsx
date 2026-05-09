import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OwnerPage from './pages/OwnerPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="bg-stone-950 text-stone-50 min-h-screen selection:bg-gold-500/30 selection:text-gold-100 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/owner" element={<OwnerPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
