//import Edit from "./components/Edit"
//import List from "./components/List"
import "./index.css"

import Container from "./components/navbar"

import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {    
    return(
    <Router>
        <div>
            <Container/>
        </div>
    </Router>
    )
}
export default Home