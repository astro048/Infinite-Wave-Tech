import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col relative">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;
