import AuthBox from '../../components/AuthorizationBox/auth.jsx'
import axios from 'axios'

import logo from '../../assets/images/icons/logos.png'
import './login.css'


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