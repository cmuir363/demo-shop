import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

interface AboutProps {}

const AboutPage = (props: AboutProps) => {

    const [message, setMessage] = useState("")
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage(`The number is ${number}`)
        } else {
            setMessage(`There is no number set`)
        }
    })
    
    return <div>{message}</div>
}

export default AboutPage