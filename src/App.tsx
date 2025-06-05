import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("@/pages/HomePage"));
const About = React.lazy(() => import("@/pages/About"));
const TopMenuBar = React.lazy(() => import("@/components/TopMenuBar/TopMenuBar"));
const NotFound = React.lazy(() => import("@/hooks/404"));
const MoveToTop = React.lazy(() => import("@/hooks/MoveToTop"));
const Footer = React.lazy(() => import("@/hooks/Footer"));

const App: React.FC = () => {
    return (
        <Router>
            <TopMenuBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <MoveToTop />
            <Footer />
        </Router>
    )
}

export default App
