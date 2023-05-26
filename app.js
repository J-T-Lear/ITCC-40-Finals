'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('Current class name: ' + className);
});

const calculator = document.querySelector('.calcbtn');

calculator.addEventListener('click',function() {
    let sth = parseInt(document.forms["gpCalculator"]["sthours"].value); 
    let str = parseInt(document.forms["gpCalculator"]["strate"].value); 
    
    let oth = parseInt(document.forms["gpCalculator"]["othours"].value); 
    let otr = parseInt(document.forms["gpCalculator"]["otrate"].value); 
    
    let dth = parseInt(document.forms["gpCalculator"]["dthours"].value); 
    let dtr = parseInt(document.forms["gpCalculator"]["dtrate"].value); 

    let stt = sth * str; 
    let ott = oth * otr; 
    let dtt = dth * dtr; 
    let gpt = (stt + ott) + dtt;
 

    console.log('Standard Time Total :' + stt);
    console.log('Over Time Total :' + ott);
    console.log('Double Time Total :' + dtt);
    console.log('----------------------------');
    console.log('Gross Pay Total :' + gpt); 
    
    document.getElementById("sttotal").innerHTML = stt;
    document.getElementById("ottotal").innerHTML = ott;
    document.getElementById("dttotal").innerHTML = dtt;
    document.getElementById("gpttotal").innerHTML = gpt;
 
  })