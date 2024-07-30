import './css/Login.css'

export const Login = () => {
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