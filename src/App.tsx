import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Datenschutz';
import LegalNotice from './pages/LegalNotice';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/impressum" element={<LegalNotice />} />
                    <Route path="/datenschutz" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;