import React, {useState} from 'react';

function LikeButton() {

    const [count, setCount] = useState(0);

    return (

        <button onClick={() => setCount(count + 1)}>
            {count} {count === 1 ? "Like" : "Likes"}
        </button>

    ); 

}

export default LikeButton;