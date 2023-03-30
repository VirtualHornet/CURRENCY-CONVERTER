import {BsTwitter} from "react-icons/bs";
import {AiFillYoutube} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
import {BsDiscord} from "react-icons/bs";
import money from "./pages/img/money.png"
import coin from "./pages/img/coin.png"

import "./Footer.css"

export default function Footer(){
    return(
        <div id="footer">
            <img src={coin} alt="money"/>
            <div id="icons">
                <ul>
                    <li className="icon-links"><BsTwitter  /></li>
                    <li className="icon-links"><AiFillYoutube /></li>
                    <li className="icon-links"><BsFacebook /></li>
                    <li className="icon-links"><BsDiscord /></li>
                </ul>
            </div>
            <img src={money} alt="money"/>
        </div>
    )
}