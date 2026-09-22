import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Industry Pages
import Banking from './pages/industries/Banking';
import CapitalMarkets from './pages/industries/CapitalMarkets';
import EnterpriseTechnology from './pages/industries/EnterpriseTechnology';
import Healthcare from './pages/industries/Healthcare';
import Logistics from './pages/industries/Logistics';
import Manufacturing from './pages/industries/Manufacturing';

// Service Pages
import ManagedIT from './pages/services/ManagedIT';
import ITSupport from './pages/services/ITSupport';
import ITConsultancy from './pages/services/ITConsultancy';
import CloudComputing from './pages/services/CloudComputing';
import CyberSecurity from './pages/services/CyberSecurity';
import CustomSoftware from './pages/services/CustomSoftware';
import MobileApplication from './pages/services/MobileApplication';
import WebApplication from './pages/services/WebApplication';
import AIDevOps from './pages/services/AIDevOps';

// Technology Page
import Technology from './pages/technology/Technology';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    {/* Homepage & standard pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Industry Routes */}
                    <Route path="/industries/banking" element={<Banking />} />
                    <Route path="/industries/capital-markets" element={<CapitalMarkets />} />
                    <Route path="/industries/enterprise-technology" element={<EnterpriseTechnology />} />
                    <Route path="/industries/healthcare" element={<Healthcare />} />
                    <Route path="/industries/logistics" element={<Logistics />} />
                    <Route path="/industries/manufacturing" element={<Manufacturing />} />

                    {/* Service Routes */}
                    <Route path="/services/managed-it" element={<ManagedIT />} />
                    <Route path="/services/it-support" element={<ITSupport />} />
                    <Route path="/services/it-consultancy" element={<ITConsultancy />} />
                    <Route path="/services/cloud-computing" element={<CloudComputing />} />
                    <Route path="/services/cyber-security" element={<CyberSecurity />} />
                    <Route path="/services/custom-software" element={<CustomSoftware />} />
                    <Route path="/services/mobile-application" element={<MobileApplication />} />
                    <Route path="/services/web-application" element={<WebApplication />} />
                    <Route path="/services/ai-devops" element={<AIDevOps />} />

                    {/* Technology Used Route */}
                    <Route path="/technology" element={<Technology />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
