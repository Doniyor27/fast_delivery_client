// import axios from 'axios'
import { useEffect, useState } from 'react'
import React, { Component } from 'react'
import jwt from 'jsonwebtoken'
// console.log(jwt)
// var app = express()

// console.log(cookieParser);
// import './auth.css'


function AuthBox() {

	const [errMess, setErr] = useState('')

	
	
	
	
	// async function handleLogin() {
	// 	console.log('asasd');
	// 	const values = {
	// 		username: username.value,
	// 		password: password.value
	// 	}
	// 	const res = await fetch('http://localhost:5001/login', {
	// 		method: 'POST',
    // 		headers: {
    // 		  'Accept': 'application/json',
    // 		  'Content-Type': 'application/json'
    // 		},
	// 		body: JSON.stringify(values)
	// 	})
	// 	console.log(res);
	// }

	// useEffect(async () => {
	
	// }, [])


	return (
		<div className="authorization-box">
		{/* <a href="javascript:void(0);"></a> */}
			<h2 className="authorization-heading">Kirish</h2>
			<form className="authorization-form" onSubmit={async e => {
					e.preventDefault()
					const username = document.querySelector('.authorization-login-input')
					const password = document.querySelector('.authorization-password-input')
					// console.log(username.value)
					if(username.value || password.value){
						const values = {
						username: username.value,
						password: password.value
					}
					// console.log(values)
					const res = await fetch('http://localhost:5003/login', {
						method: 'POST',
						headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
						},
						body: JSON.stringify(values)
					})
					const data = await res.json()
					console.log(data)
					if (data.status === 200) {
						const id = jwt.sign({ userId: data.data[0].id }, 'olma')
						const token = jwt.sign({ user: data.data[0].status }, 'olma')
						document.cookie = "user="+token;
						document.cookie = "userId="+id;
						const re = new RegExp(`(?<=user=)[^;]*`);
						const auth = document.cookie.match(re)[0]
						window.location = '/orders'
						} else {
							setErr('wrong password or username')
						}
					}else {
						setErr('wrong password or username')
					}
				}}>
				<p>{errMess}</p>
				<div className="login-input-wrap">
					<input className="authorization-login-input" placeholder="Login" type="text" />
				</div>
				<div className="password-input-wrap">
					<input className="authorization-password-input" placeholder="Parol" type="password" />
				</div>
				<button className="authorization-button" onSubmit={e => {
					e.preventDefault()
					console.log('a')
				}}>Kirish</button>
			</form>
		</div>
		
	)
}

export default AuthBox