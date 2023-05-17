//import Edit from "./components/Edit"
//import List from "./components/List"
import "./index.css"
import Container from "./components/navbar"
import PostList from "./PostList";
import Frame from "../login/Frame"
import Register from "../Register/Register";
import {Routes, Route} from "react-router-dom";


const Home = () => {    
    return(
        <div className="backgroundcolor"> 
        <Container/>
        <Routes>
            <Route path='' element={<PostList/>} />
            <Route path='/login' element={<Frame/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
    )
}
export default Home