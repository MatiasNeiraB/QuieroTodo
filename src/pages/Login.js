import NavBarLogin from "../components/login/navBarLogin";
import LoginForm from "../components/login/LoginForm";
import '../components/login/LoginForm.css'


const LoginForms = () => {
    return(
        <div>
        <NavBarLogin/>
        <div class="login">
        <LoginForm/>
        </div>
        </div>
    )

}

export default LoginForms;