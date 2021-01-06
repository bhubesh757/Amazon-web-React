import React , {useState} from 'react'

import './Login.css'
import {Link , useHistory} from 'react-router-dom'
import { auth } from '../firebase'

function Login() {

    const history = useHistory()

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const SignIn = (e) => {
        e.preventDefault();

        // firebase
        auth.signInWithEmailAndPassword(email , password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
       
    }

    const Register = (e) => {
        e.preventDefault();
        // firebase
        auth.createUserWithEmailAndPassword(email , password)
        .then((auth) => {
            console.log(auth);

            if (auth) {
                history.push('/')
            }
        })

        .catch(error => alert(error.message))
    }
    

    return (
        <div className = 'login'>
            <Link to ='/Home'>
            <img className = 'login__logo' src = 'https://justcreative.com/wp-content/uploads/2020/05/amazon.jpg'>
            </img>
            </Link>

            <div className="login__container">
                <h1> Login </h1>
                <form>
                    {/* email */}
                    <h5 className = 'login__containerEmail'>
                        E-mail
                    </h5>
                    <input type = 'text' value = {email} onChange = {e => setemail(e.target.value)}>
                    </input>
                    {/* password */}
                    <h5 className = 'login__containerPassword'>
                        Password
                    </h5>
                    <input type = 'password' value = {password} onChange = {e => setpassword(e.target.value)} >
                    </input>
                    <button type = 'submit' className  = ' login__loginButton' onClick = {SignIn} >Sign In </button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <h4>
                    New to Amazon?
                </h4>
                

                <button onClick = {Register} className = 'login__createbutton'> Create your Amazon Account</button>
               
            </div>
        </div>
    )
}

export default Login
