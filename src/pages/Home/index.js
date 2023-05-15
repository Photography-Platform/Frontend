//import Edit from "./components/Edit"
//import List from "./components/List"
import "./index.css"
import Container from "./components/navbar"
import { BrowserRouter as Router } from "react-router-dom";
import PostList from "./PostList";

const Home = () => {    
    return(
    <Router>
        <div className="backgroundcolor"> 
        <Container/>
        <PostList/>
        </div>
    </Router>
    )
}
export default Home