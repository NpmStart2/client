import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Nav } from "./Nav"

export function Main() {
    return (
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
    )
}