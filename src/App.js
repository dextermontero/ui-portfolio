import Header from "./components/Header"
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"
import NotFound from "./components/404.jsx"

// Pages
import Kanban from "./pages/Kanban.jsx"
import JobSearch from "./pages/JobSearch.jsx"
import Management from "./pages/Managements.jsx"
import Attendance from "./pages/Attendance.jsx"
import Vet from "./pages/Vet.jsx"
import BlindNavigation from "./pages/BlindNavigation.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto px-4">
                <Switch>
                    <Route exact path="/">
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
            <Footer />
        </Router>
    )
}
export default App;