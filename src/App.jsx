import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"
import NotFound from "./components/404"

// Pages
import Kanban from "./pages/Kanban"
import JobSearch from "./pages/JobSearch"
import Management from "./pages/Managements"
import Attendance from "./pages/Attendance"
import Vet from "./pages/Vet"
import BlindNavigation from "./pages/BlindNavigation"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MoveToTop from "./components/MoveToTop"
import About from "./components/About"

function App() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto px-4">
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <Technologies />
                        <Projects />
                    </Route>
                    <Route path="/kanban" component={Kanban} />
                    <Route path="/qcu-management" component={Management} />
                    <Route path="/qcu-attendance" component={Attendance} />
                    <Route path="/jobSearch" component={JobSearch} />
                    <Route path="/blind-stick-navigation" component={BlindNavigation} />
                    <Route path="/veterinarian" component={Vet} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>
            <MoveToTop />
            <Footer />
        </Router>
    )
}

document.body.classList.add('bg-gray-100');

export default App;