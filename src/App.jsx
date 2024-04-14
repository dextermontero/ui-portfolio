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
                    <Route path="/kanban">
                        <Kanban />
                    </Route>
                    <Route path="/qcu-management">
                        <Management />
                    </Route>
                    <Route path="/qcu-attendance">
                        <Attendance />
                    </Route>
                    <Route path="/jobSearch">
                        <JobSearch />
                    </Route>
                    <Route path="/blind-stick-navigation">
                        <BlindNavigation />
                    </Route>
                    <Route path="/veterinarian">
                        <Vet />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </main>
            <MoveToTop />
            <Footer />
        </Router>
    )
}

document.body.classList.add('bg-gray-100');

export default App;