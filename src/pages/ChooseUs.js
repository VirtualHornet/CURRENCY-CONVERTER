import "./ChooseUs.css";
import { useState } from "react";
import {GrRotateLeft} from 'react-icons/gr';
export default function ChooseUs(){
    const [from, setFrom] = useState('EUR');
    const [to, setTo] = useState('USD');
    const [numBase, setNumBase] = useState(1);
    const [numRes, setNumRes] = useState(0);


    function rotate(){
        let i = to;
        let j = from;
        let k = numBase;
        let h = numRes;
        setNumBase(h);
        setNumRes(k);
        setFrom(i);
        setTo(j);
        document.getElementById("select-from").value=from;
        document.getElementById("select-to").value=to;
        document.getElementById('input-value').value = numRes;
        document.getElementById('result').innerHTML = numBase;

    }

    function getData(){
        let myHeaders = new Headers();
            myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw"); 
        
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
    };
    fetch("https://api.apilayer.com/exchangerates_data/convert?to="+to+"&from="+from+"&amount="+numBase, requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById("result").innerHTML = result.result;
            setNumRes(result.result);
            console.log(result.result)
        })
        
        }

    
    const handleSelectFrom = (event) => {
        setFrom(event.target.value);
      }
    const handleSelectTo = (event) => {
        setTo(event.target.value);
    } 
    const handleInput = (event) =>{
        document.getElementById("result").innerHTML= 0;
        setNumBase(event.target.value)
    }

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

    return (
        <section id="ChooseUs">
             <h1>Change Money</h1>
        <div id="head">
            <div className="card">
                 <select id="select-from" value={from} onChange={handleSelectFrom}>
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                <p className="p-selected">You selected: {from}</p>
                <input id="input-value" onChange={handleInput} name="myInput" type="number" placeholder="1" min="1"/>
            </div>
            <button id="rotate" onClick={rotate}><GrRotateLeft /></button>
            <div className="card">
                 <select id="select-to" value={to} onChange={handleSelectTo}>
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                    </select>
                <p className="p-selected">You selected: {to}</p>
                <p id="result"> </p>
                
            </div>
        </div>   
        <button id="change" onClick={getData}>CHANGE</button>
    </section>
       
     
    )
}