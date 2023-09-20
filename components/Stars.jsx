import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Stars = (props) => {
    return (
        <div>
            {[...new Array(4)].map((star, i) => {
                return i < props.score ? (
                    <AiFillStar style={{ fontSize: "20px", color: "#FFD748" }} />
                ) : (
                    <AiOutlineStar style={{ fontSize: "20px", color: "#FFD748" }} />
                );
            })}
        </div>
    );
};

export default Stars;
