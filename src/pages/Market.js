import { useState } from "react";
import './Market.css'
export default function Market(){

    const [tables, setTables] = useState(false);
    const [className1, setClassName1] = useState('btn-1 btn-active');
    const [className2, setClassName2] = useState('btn-2');
    const [base, setBase] = useState('EUR');

    const options =[
        {value: "USD", label: "American dollar"},
        {value: "CHF", label: "Swiss franc"},
        {value: "GBP", label: "British pound"},
        {value: "HRK", label: "Croatian kuna"},
        {value: "EUR", label: "Euro"},
        {value: "HUF", label: "Hungarian forint"},
        {value: "CZK", label: "Czech crown"},
        {value: "JPY", label: "Japanese yen"},
        {value: "SEK", label: "Swedish crown"},
        {value: "DKK", label: "Danish krone"},
        {value: "AUD", label: "Australian dollar "},
        {value: "NOK", label: "Norwegian krone"},
        {value: "CAD", label: "Canadian dollar"},
        {value: "PLN", label: "Polish zloty"},
        {value: "RON", label: "Romanian lei"},
        {value: "RSD", label: "Serbian dinar"},
        {value: "RUB", label: "Russian ruble"},
    ]
 

    /*useEffect(()=>{
        getData();
    },[])*/


    const handleSelectBase = (event) => {
        setBase(event.target.value);
    } 
    

    function table1Change(){
        setTables(false);
        setClassName1('btn-1 btn-active');
        setClassName2('btn-2');
    }
    function table2Change(){
        setTables(true);
        setClassName1('btn-1');
        setClassName2('btn-2 btn-active');
    }
    
    function getData(){
        let myHeaders = new Headers();
            myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw"); 
        
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
    };
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CRUB%2CHUF%2CUSD%2CCHF%2CGBP%2CHRK%2CCZK%2CJPY%2CSEK%2CDKK%2CAUD%2CNOK%2CCAD%2CPLN%2CRON%2CRSD&base="+base, requestOptions)
        .then(response => response.json())
        .then(result => {
        
           /* html += "<li>USD "+result.rates.USD+"</li>"
            html += "<li>CHF "+result.rates.CHF+"</li>"
            html += "<li>GBP "+result.rates.GBP+"</li>"
            html += "<li>HRK "+result.rates.HRK+"</li>"
            html += "<li>HUF "+result.rates.HUF+"</li>"
            html += "<li>CZK "+result.rates.CZK+"</li>"
            html += "<li>JPY "+result.rates.JPY+"</li>"
            html += "<li>SEK "+result.rates.SEK+"</li>"
            html += "<li>DKK "+result.rates.DKK+"</li>"
            html += "<li>AUD "+result.rates.AUD+"</li>"
            html += "<li>NOK "+result.rates.NOK+"</li>"
            html += "<li>CAD "+result.rates.CAD+"</li>"
            html += "<li>PLN "+result.rates.PLN+"</li>"
            html += "<li>RON "+result.rates.RON+"</li>"
            html += "<li>RSD "+result.rates.RSD+"</li>"
            html += "<li>RUB "+result.rates.RUB+"</li>"
            document.getElementsByClassName("list")[0].innerHTML+=html;
          */  
         console.log(result.rates)
            document.getElementById("eur").innerHTML = result.rates.EUR+"</>";
            document.getElementById("usd").innerHTML = result.rates.USD+"</>";
            document.getElementById("chf").innerHTML = result.rates.CHF+"</>";
            document.getElementById("gbp").innerHTML = result.rates.GBP+"</>";
            document.getElementById("hrk").innerHTML = result.rates.HRK+"</>";
            document.getElementById("huf").innerHTML = result.rates.HUF+"</>";
            document.getElementById("czk").innerHTML = result.rates.CZK+"</>";
            document.getElementById("jpy").innerHTML = result.rates.JPY+"</>";
            document.getElementById("sek").innerHTML = result.rates.SEK+"</>";
            document.getElementById("dkk").innerHTML = result.rates.DKK+"</>";
            document.getElementById("aud").innerHTML = result.rates.AUD+"</>";
            document.getElementById("nok").innerHTML = result.rates.NOK+"</>";
            document.getElementById("cad").innerHTML = result.rates.CAD+"</>";
            document.getElementById("pln").innerHTML = result.rates.PLN+"</>";
            document.getElementById("ron").innerHTML = result.rates.RON+"</>";
            document.getElementById("rsd").innerHTML = result.rates.RSD+"</>";
            document.getElementById("rub").innerHTML = result.rates.RUB+"</>";
    
    
          
        })
            
        .catch(error => console.log('error', error));
    }
    
    return(
       
        <section className="page" id="Market"> 
        <div className="header">
            <h1>Exchange</h1>
            <select id="select-base" value={base} onChange={handleSelectBase}>
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
            </select>  
            <button onClick={getData}>Go</button>
        </div>
        
        <p id="p-base">You selected: {base}</p>
      
        <table className={tables? 'disappear' :""}>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>24h Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EUR</td>
                    <td>Euro</td>
                    <td id="eur"></td>
                </tr>
                <tr>
                    <td>USD</td>
                    <td>American dollar</td>
                    <td id="usd"></td>
                </tr>
                <tr>
                    <td>CHF</td>
                    <td>Swiss franc</td>
                    <td id="chf"></td>
                </tr>
                <tr>
                    <td>GBP</td>
                    <td>British pound</td>
                    <td id="gbp"></td>
                </tr>
                <tr>
                    <td>HRK</td>
                    <td>Croatian kuna</td>
                    <td id="hrk"></td>
                </tr>
                <tr>
                    <td>HUF</td>
                    <td>Hungarian forint</td>
                    <td id="huf"></td>
                </tr>
                <tr>
                    <td>CZK</td>
                    <td>Czech crown</td>
                    <td id="czk"></td>
                </tr>
                <tr>
                    <td>JPY</td>
                    <td>Japanese yen</td>
                    <td id="jpy"></td>
                </tr>
                <tr>
                    <td>SEK</td>
                    <td>Swedish crown</td>
                    <td id="sek"></td>
                    </tr>
                
                </tbody>
            </table>
        
        
        <table className={tables? '' :"disappear"}>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th>Price</th>
                    <th>24h Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DKK</td>
                    <td>Danish krone</td>
                    <td id="dkk"></td>
                </tr>
                <tr>
                    <td>AUD</td>
                    <td>Australian dollar</td>
                    <td id="aud"></td>
                </tr>
                <tr>
                    <td>NOK</td>
                    <td>Norwegian krone</td>
                    <td id="nok"></td>
                </tr>
                <tr>
                    <td>CAD</td>
                    <td>Canadian dollar</td>
                    <td id="cad"></td>
                </tr>
                <tr>
                    <td>PLN</td>
                    <td>Polish zloty</td>
                    <td id="pln"></td>
                </tr>
                <tr>
                    <td>RON</td>
                    <td>Romanian lei</td>
                    <td id="ron"></td>
                </tr>
                <tr>
                    <td>RSD</td>
                    <td>Serbian dinar</td>
                    <td id="rsd"></td>
                </tr>
                <tr>
                    <td>RUB</td>
                    <td>Russian ruble</td>
                    <td id="rub"></td>
                </tr>
                
            </tbody>
        </table>
        <div id="btns">
            <button className={className1} onClick={table1Change}>1</button>
            <button className={className2} onClick={table2Change}>2</button>        
        </div>
       
    </section>
    )
    }
    
