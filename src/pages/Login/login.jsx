import AuthBox from '../../components/AuthorizationBox/auth.jsx'
// import fetch from 'node-fetch'

import logo from '../../assets/images/icons/logos.png'
import './login.css'
// console.log(fetch(`https://rocketman-app.herokuapp.com`));
const Login = () => {
	return (
		<>
			<div className="logo-wrap">
				<img src={logo} className="login-logo" alt="Fast Delivery"/>
			</div>
			<AuthBox/>
			

		</>
	)
}

export default Login