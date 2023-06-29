import React, { useState, useCallback } from "react";

const ImageFader = () => {
    const [opacity, setOpacity] = useState(false);
    const [imgUrl, setImgUrl] = useState("");

    const onImageChange = (newImg) => {     
        console.log(newImg);   
        setOpacity(false);        
        setTimeout(() => {
          setOpacity(true);
          setImgUrl(newImg);
        }, 500);
    };

    console.log("Here " + imgUrl);

    return (
        <div>
            <img src={imgUrl}/>
            <button onClick={() => onImageChange('https://img.pokemondb.net/sprites/sword-shield/icon/charizard.png')}>Test me</button>
        </div>
    )
}

export default ImageFader;