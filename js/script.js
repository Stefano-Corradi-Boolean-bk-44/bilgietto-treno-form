const btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener('click',function(){
  
  const nameUser = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const age = document.getElementById('age').value;
  const ticket = document.getElementById('ticket-table');
  const errore = document.getElementById('errore');

  const priceKm = 0.21;

  let formValido = true;
  let errorMsg = '';

  if(nameUser.length < 3){
    formValido = false;
    errorMsg = "Inserire un nome corretto"
  }
  if(isNaN(km) || km < 1){
    formValido = false;
    errorMsg = "Inserire un km valido e con minimo 1 km";
  }

  if(formValido){
    let price = km * priceKm;
    let offerta = 'Offerta standard';

    if(age === 'minorenne'){
      price -= price * 0.2;
      offerta = 'Sconto Young'
    }
    if(age === 'over65'){
      price -= price * 0.4;
      offerta = 'Sconto Silver'
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codiceCp = Math.floor(Math.random() * 10000) + 90000;

    console.log(codiceCp);

    document.getElementById('username').innerHTML = nameUser;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('cp').innerHTML = codiceCp;
    document.getElementById('price').innerHTML = price.toFixed(2);

    ticket.classList.add('show');
    ticket.classList.remove('hide');
    errore.classList.add('hide');
    errore.classList.remove('show');

  }else{
    document.getElementById('error-msg').innerHTML = errorMsg;
    errore.classList.add('show');
    errore.classList.remove('hide');
    ticket.classList.add('hide');
    ticket.classList.remove('show');
  }
  

  
  
});