import React, {useEffect, useState} from "react"
import './gamerating.css'

function GameRating({rating}) {
    const [stars, setStars] = useState([])

    const generateStarts = ()=>{
        let stars = []
        if(rating > 5 || rating < 1){
            return
        }
        for(let i=0; i<rating; i++){
            stars.push(i)
        }

        return stars;
    }

    useEffect(()=>{
        setStars(generateStarts())
    }, [])

  return (
    stars.map((star, index)=> {
        return (
            <i key={index} className="bi bi-star-fill"></i>
        )
    })
  )
}

export default GameRating
