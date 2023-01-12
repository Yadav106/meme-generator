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

    function handleOnClick(event) {
        let memesDataArray = allMemeImages.data.memes
        let x = Math.floor(Math.random()*memesDataArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesDataArray[x].url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className="main">
            <div className="meme">
                <div className="meme--inputs">
                    <input type="text" className="input--text" placeholder="Top Text" name="topText" onChange={handleChange}/>
                    <input type="text" className="input--text" placeholder="Bottom Text" name="bottomText" onChange={handleChange}/>
                </div>
                <button className="meme--button" onClick={handleOnClick}>GET A NEW MEME IMAGE 🖼️</button>
            </div>
            <div className="meme--image">
                {meme.randomImage && <img src={meme.randomImage} className="memeContainer"/>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}