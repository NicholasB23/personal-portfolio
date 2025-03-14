// Fixed Layout.tsx to ensure scroll events work properly
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

// Removed grid background: bg-grid-pattern dark:bg-grid-pattern-dark bg-grid

function Layout() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
            <Navbar />
            <main className="flex-grow">
                <div className="min-h-full ">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Layout;
