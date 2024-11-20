import React, {useState} from 'react';

function ClickablePicture() {

    const [isClicked, setIsClicked] = useState(false);

    const picture1 = "./assets/images/maxence.png";
    const picture2 = "./assets/images/maxence-glasses.png";

    const mouseClick = () => { setIsClicked(!isClicked); };

    return (

        <div>
            <img src = {isClicked ? picture2 : picture1} alt="Pictures of a young man" onClick={mouseClick} />
        </div>

    );

}

export default ClickablePicture; 
    



