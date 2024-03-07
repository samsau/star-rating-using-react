import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './style.css'
export function StarRating({noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }
    function resetStarCount() {
        setRating(0);
        setHover(0);
    }
    return (
        <div>
            {
                [...Array(noOfStars)].map((_, index)=>{
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }
            <div>Star</div>
            <div>rating</div>
            <div>
                <button type='submit' onClick={() => resetStarCount()}>SUBMIT</button>
            </div>
        </div>
    )
}