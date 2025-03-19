import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './components/Layout';

//Theme
import { ThemeProvider } from './components/ThemeProvider';

// Pages
import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
import NotFound from './pages/NotFoundPage';


function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
