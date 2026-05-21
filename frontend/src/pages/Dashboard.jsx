import { useEffect, useState } from "react"
import api from "../services/api"

export default function Dashboard(){

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        async function loadProfile(){
            try {
                const token = localStorage.getItem("token")
                const response = await api.get(
                    "/users/profile", 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                
                console.log(response.data)
                
                setProfile(response.data)


            } catch (error) {
                
                console.error(error)
                alert("Erro ao carregar perfil")
            }
        }

        loadProfile()
    }, [])

    if (!profile){
        return <h1>Carregando...</h1>
    }

    return (

        <div>
            <h1>Dashboard</h1>

            <h2>Welcome {profile.username}</h2>

            <p>Level: {profile.level}</p>
            <p>XP: {profile.xp}</p>
        </div>
    )
}