import { Route, Routes } from "react-router"
import { Login } from "./Login.jsx"
import { Home } from "./Home.jsx"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
        </Routes>
    </>
}