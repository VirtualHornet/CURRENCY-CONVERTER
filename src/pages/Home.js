import 'animate.css';
import { useEffect } from 'react';
import './Home.css';
import dollar from './img/dollar.png';
import euro from './img/euro.png';
import franc from './img/franc.png';
import font from './img/font.png';
import {MdEuro} from 'react-icons/md';

export default function Home(){

    let Dollar = 0;
    let Frank = 0;
    let Font = 0;


    useEffect(()=>{
        getData();
    })

    function getData(){
        let myHeaders = new Headers();
            myHeaders.append("apikey", "3VCpttMUifOMkv7b4pvXqQ55B258qoPt"); 
        
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
    };
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=RUB%2CHUF%2CUSD%2CCHF%2CGBP%2CHRK%2CCZK%2CJPY%2CSEK%2CDKK%2CAUD%2CNOK%2CCAD%2CPLN%2CRON%2CRSD&base=EUR", requestOptions)
        .then(response => response.json())
        .then(result => {
            Dollar = result.rates.USD;
            Frank = result.rates.GBP;
            Font = result.rates.CHF;

            document.getElementById('dollar').innerHTML += Dollar.toString();
            document.getElementById('font').innerHTML += Font.toString();
            document.getElementById('franc').innerHTML += Frank.toString();

            console.log(Frank)
        })
            
        .catch(error => console.log('error', error));
    }


    return (
            <section id='Home' className='container'>  
                <h1 id="upper"><img className="animate__animated animate__bounce animate__infinite infinite animate__slower" src={dollar} alt='dollar' width={'50px'} height={'50px'}/>  TRACK AND TRADE  <img className="animate__animated animate__bounce animate__infinite infinite animate__slower" src={euro} alt='euro' width={'50px'} height={'50px'}/></h1>
                <h1 id="below">CURRENCY CONVERTER</h1>
                <div className='actual'>
                    <div id="dollar">
                        <img src={dollar} alt="dollar" width={'50px'} height={'50px'}/>
                        <p>American Dollar</p>
                        <MdEuro className='red'/>
                    </div>
                   <div id='franc'>
                        <img src={franc} alt="font" width={'50px'} height={'50px'}/>
                        <p>Swiss Franc</p>
                        <MdEuro  className='red'/>
                    </div>
                    
                    <div id='font'>
                        <img src={font} alt="frank" width={'50px'} height={'50px'}/>
                        <p>British Pound</p>
                        <MdEuro className='red'/>
                    </div>

                </div>
            </section>
       
    )
}