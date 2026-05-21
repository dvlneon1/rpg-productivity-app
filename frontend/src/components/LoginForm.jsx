import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import '../components/Login.css';


export default function Login(){

    const navigate = useNavigate()

    const [ email , setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleLogin(e){
        e.preventDefault()

        try {

            const response = await api.post("/auth/login", { email, password })
            
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
            
            console.log(response.data)

        } catch (error) {

            console.error(error)

            alert("Erro ao fazer login")
        }
    }
    return(
        
        <div className="form-login">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="form-content">
                <input 
                    type="text" 
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>Esqueceu sua senha ?</p>
            </form>
            <div className="redirect-register">
                <p>Não possui cadastro ?</p>
                <button>Register</button>
            </div>
        </div>
    )
}