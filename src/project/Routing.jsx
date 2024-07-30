import { Route, Routes } from "react-router"
import { Login } from "./login"
export const Routing = () => {
    return <>
        <Routes>
            <Route path="Login" element={<Login></Login>}></Route>
        </Routes>
    </>
}