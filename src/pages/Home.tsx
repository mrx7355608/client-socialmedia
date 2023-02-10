import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    useEffect(() => {
        return useNavigate()("/")
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}