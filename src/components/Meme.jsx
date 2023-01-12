import React from "react";
import "./components.css"
import memesData from "../memesData";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setALlMemeImages] = React.useState(memesData)

    // const [url, setUrl] = React.useState('')

    function handleOnClick() {
        let memesDataArray = allMemeImages.data.memes
        let x = Math.floor(Math.random()*memesDataArray.length)
        // setUrl(memesDataArray[x].url);
        // console.log(memesDataArray[x].url);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesDataArray[x].url
        }))
    }
    return(
        <div className="main">
            <div className="meme">
                <div className="meme--inputs">
                    <input type="text" className="input--text" placeholder="Top Text"/>
                    <input type="text" className="input--text" placeholder="Bottom Text"/>
                </div>
                <button className="meme--button" onClick={handleOnClick}>GET A NEW MEME IMAGE 🖼️</button>
            </div>
            {meme.randomImage && <img src={meme.randomImage} className="meme--image"/>}
        </div>
    )
}