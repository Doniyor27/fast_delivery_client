import './login.css'
import logo from '../../assets/images/icons/logos.png'

const Login = () => {
	return (
		<>
			<div className="logo-wrap">
				<img src={logo} className="login-logo" alt="Fast Delivery"/>
			</div>
			<div className="authorization-box">
				<h2 className="authorization-heading">Kirish</h2>
				<form className="authorization-form">
					<div className="login-input-wrap">
						<input className="authorization-login-input" placeholder="Login" type="text"/>
					</div>
					<div className="password-input-wrap">
						<input className="authorization-password-input" placeholder="Parol" type ="password"/>
					</div>
					<button className="authorization-button" type ="submit">Kirish</button>
				</form>
			</div>
		</>
	)
}

export default Login