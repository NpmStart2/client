import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Nav } from "./Nav"
import { Provider } from "react-redux"

export const Main = () => {
    return <>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
    </>
}