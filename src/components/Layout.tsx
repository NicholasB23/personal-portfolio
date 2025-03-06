import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import Navbar from './Navbar';


function Layout() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col ${darkMode ? 'dark' : ''}`}>
            <Navbar />
            <main className="flex-grow">
                <div className="relative min-h-[calc(100vh-4rem)]">
                    <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-grid" />
                    <div className="relative z-10">
                        <Outlet />
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Layout;
