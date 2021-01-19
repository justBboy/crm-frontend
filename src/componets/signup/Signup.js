import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import './signup.css'
import {Link} from 'react-router-dom'
import { login, register } from '../../slices/authSlice';




function Signup(){
    // const [login,setLogin] = useState(document.getElementById("form-login"));
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("")

useEffect(()=> {
    let mounted = true;
    if (mounted){
        window.addEventListener("resize", handleMoveToLogin)
        window.addEventListener("resize", handleMoveToRegister)
    }else{
        return
    }
    return () => {
        mounted=false
    }

}, [])
    const handleMoveToLogin = ()=> {
        var login = document.getElementById("form-login");
        var register = document.getElementById("form-register");
        var underline = document.getElementById("underline");
        let size = window.innerWidth;
        if (login && register){
            if(size <= 500 ){
                register.style.transform = "translateX(300px)";
                login.style.transform = "translateX(350px)"
                underline.style.transform = "translateX(-10px)"
         }else{
            register.style.transform = "translateX(370px)";
            login.style.transform = "translateX(380px)"
            underline.style.transform = "translateX(0px)" 
         }
        }
    }
    const handleMoveToRegister = ()=>{
        var login = document.getElementById("form-login");
        var register = document.getElementById("form-register");
        var underline = document.getElementById("underline");
        let size = window.innerWidth;
      
        if(login && register){
            if(size <= 500 ){
                register.style.transform = "translateX(0px)"
                login.style.transform = "translateX(0px)"
                underline.style.transform = "translateX(90px)" 
            }else{
              register.style.transform = "translateX(0px)"
             login.style.transform = "translateX(0px)"
             underline.style.transform = "translateX(150px)" 
            }
        }

    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({username, password}))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register({username, password, email}))
        handleMoveToLogin()
    }
   
    return(
        <>
            <div className="main-signup">
                    <div className="signup">
                        <div className="form-container">
                            <div className="form-btn">
                                <span onClick={handleMoveToLogin}>Login</span>
                                <span onClick={handleMoveToRegister}>Register</span>
                                <hr id="underline"  />
                            </div>
                            <form id="form-login" >
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                <button type="submit" onClick={handleLogin} className="log-btn">Login</button>
                                <Link to="">Forgot password</Link>
                            </form>
                            <form id="form-register" >
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                                <button type="submit" onClick={handleRegister} className="log-btn">Register</button>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}


export default Signup