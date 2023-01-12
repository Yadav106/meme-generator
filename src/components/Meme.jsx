import React from "react";
import "./components.css"
import memesData from "../memesData";

export default function Meme() {
    const [url, setUrl] = React.useState('')
    function handleOnClick() {
        let memesDataArray = memesData.data.memes
        let x = Math.floor(Math.random()*memesDataArray.length)
        setUrl(memesDataArray[x].url);
        console.log(memesDataArray[x].url);
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
            {url && <img src={url} className="meme--image"/>}
        </div>
    )
}