import './login.css'

const Login = () => {
	return (
		<>
			{/* <img src="../../assets/images/icons/logo.png" alt="Fast Delivery"/> */}
			<div className="authorization-box">
				<h2 className="authorization-heading">Kirish</h2>
				<form className="authorization-form">
					<input className="authorization-login-input" placeholder="Login" type="text"/>
					<input className="authorization-password-input" placeholder="Parol" type ="password"/>
					<button className="authorization-button" type ="submit">Kirish</button>
				</form>
			</div>
		</>
	)
}

export default Login