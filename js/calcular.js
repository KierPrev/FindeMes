function cambiarTasa() {
  var e = document.getElementById("cual-billetera");
  var value = e.value;
  inflacion = document.getElementById("tasainflacion").value;

  if (value=="mercadopago") {
    tasa=96.7;
    console.log("MP");
  }
  else if (value=="prex") {
    tasa=123.01;
    console.log("Prex");
  }
  else if (value=="naranjax") {
    tasa=110;
    console.log("naranjax");
  }
  else if (value=="billetera") {
    tasa=0;
    console.log("billetera");
  }

document.getElementById("tasaActual").innerHTML = "Tasa: " + tasa + " %"
}

function gastoMes() {
  gastoHoy = Number(document.getElementById("gastos").value);
  gastoTotal = 0;
  plataTotal = Number(document.getElementById("billetera").value);
  

// Días hasta fin de mes
    function daysUntilEndOfMonth() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentMonthLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
      const daysLeftInMonth = currentMonthLastDate - currentDate.getDate();
      return daysLeftInMonth;
    }  
    const diasRestantes = daysUntilEndOfMonth();

  function round(v) {
      return Math.sign(v) * Math.round(Math.abs(v));
  }

    perdida = 0;

    for (let i = 0; i < diasRestantes; i++) {
      gastoAjustado = gastoHoy*(1+inflacion/100)**i;
      perdida = perdida + gastoHoy*(1+inflacion/100)**i - gastoHoy;
      gastoTotal = gastoTotal + gastoAjustado;
      if ((plataTotal - gastoAjustado)>0) {
        plataTotal = (plataTotal - gastoAjustado) + (plataTotal - gastoAjustado)*tasa/100/365;
      }
      else {
        plataTotal = plataTotal - gastoAjustado;
      }
    }

    

    document.getElementById("gastoTotal").innerHTML = "&emsp; $ " + String(round(gastoTotal).toLocaleString('en-US'));

    document.getElementById("plataTotal").innerHTML = "&emsp; $ " + String(round(plataTotal).toLocaleString('en-US'));
    
  

    
  
  if (plataTotal <= 0) {
    document.getElementById('llegas').style.display = 'block';
  }
  else {
    document.getElementById('llegas').style.display = 'none';
  }

 

  document.getElementById('perdida').innerHTML = "&emsp; $ " + String(round(perdida).toLocaleString('en-US'));
  
  }
