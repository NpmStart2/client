import { useNavigate } from 'react-router'
import './css/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './api/User'

export function Login() {
    const nav = useNavigate()

    const send = async (event) => {
        event.preventDefult()
        const u = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        let user = await getUser(u.email, u.password)
        if (user)
            nav('/Home')
    }

    return <>
        <div class="login">
            <input type="text" placeholder="Username" id="username"></input>
            <input type="password" placeholder="password" id="password"></input>
            {/* <a href="#" class="forgot">forgot password?</a> */}
            <input type="submit" value="Sign In"></input>
        </div>
        <div class="shadow"></div>
    </>
}