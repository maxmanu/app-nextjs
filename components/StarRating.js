import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="rating-stars my-2">
            {[...Array(4)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <>
                        <label>
                            <input className="hidden-radio" type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                            <FaStar
                                color={ratingValue <= (hover || rating) ? "#FFD748" : "#B6B5B5"}
                                size={20}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    </>
                );
            })}
            {console.log(rating)}
            <span className="ps-2">Valora el servicio</span>
        </div>
    );
};

export default StarRating;
