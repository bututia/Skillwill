import { Link } from "react-router-dom"
import yasu from "../assets/Yasu.png"
import {useState } from "react";

const MainPage = () => {
    const [inputValue, setInputValue] = useState("");
    const taskValue = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <div>
            <img src={yasu} alt="yasu" />
    </div>
        <h1>Yasushi Takagi</h1>
        <p style={{width: "80%"}}>
           Yasushi Takagi (高木 泰士たかぎ やすし Takagi Yasushi), 
           commonly known by his nickname Yasu (ヤス), was the drummer of the punk band, Black Stones.
           He handled most of the band's business related matters. 
           Yasu previously studied to become a paralegal, but gave it up to move to Tokyo. 
           He was a long-time friend of Ren Honjo, with whom he was in two bands, Brute and Blast.
        </p>
        <Link to={"/about"}>More about Yasu</Link>
        <div>
        <p>type number to find random fact about Yasu :</p>
        <input type="text" placeholder="type here ..." onChange={taskValue}/>
        <Link to={`/facts/${inputValue}`}>go</Link>
        </div>
    </div>
    )
}


export default MainPage