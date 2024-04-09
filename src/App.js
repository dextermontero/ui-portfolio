import Header from "./components/Header"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Technologies from "./components/Technologies"
import NotFound from "./components/404.jsx"
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