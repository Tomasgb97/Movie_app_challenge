import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function FavHeart({isfav}) {
    return (
        
         <FaHeart className={isfav ? 'favheart--filled' : 'favheart--unfilled'}></FaHeart>
        
    )
}


