import './auth.css'

function AuthBox () {

	

    return (
        <div className="authorization-box">
				<h2 className="authorization-heading">Kirish</h2>
				<form  className="authorization-form" method="POST" action="https://fastdelevery.herokuapp.com/login">
					<div className="login-input-wrap">
						<input className="authorization-login-input" placeholder="Login" type="text" name='name'/>
					</div>
					<div className="password-input-wrap">
						<input className="authorization-password-input" placeholder="Parol" type ="password" name='password'/>
					</div>
					<button className="authorization-button" type ="submit">Kirish</button>
				</form>
				<script type="text/javascript">
					console.log(document.cookie)
				</script>
		</div>
    )
}

export default AuthBox