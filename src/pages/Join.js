import "./Join.css";
import dollar from './img/dollar.png';
import euro from './img/euro.png';
import Footer from '../footer';
export default function Join(){
    return (
        <section id="Join">
                <h1 id="first"><img className="animate__animated animate__bounce animate__infinite infinite animate__slower" src={dollar} alt='dollar' width={'50px'} height={'50px'}/> JOIN TO OUR <img className="animate__animated animate__bounce animate__infinite infinite animate__slower" src={euro} alt='euro' width={'50px'} height={'50px'}/></h1>
                <h1 id="discord">DISCORD SERVER</h1>
                <p>Invite your friends too</p>
                <button>Join via Discord</button>
                <Footer />
        </section>
    
    
    )
}