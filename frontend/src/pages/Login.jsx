import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
            </form>
        </div>
    )
}