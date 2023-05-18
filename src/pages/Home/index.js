//import Edit from "./components/Edit"
//import List from "./components/List"
import "./index.css"

import { Route, Routes } from "react-router-dom";

import Container from "./components/navbar"
import Login from "../Login/Login";
import PostList from "./PostList";
import Register from "../Register/Register";

const Home = () => {
    return (
        <div className="backgroundcolor">
            <Container />
            <Routes>
                <Route path='' element={<PostList />} />
                <Route path='Login' element={<Login />} />
                <Route path='Register' element={<Register />} />
            </Routes>
        </div>
    )
}
export default Home