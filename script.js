document.getElementById("calculate").addEventListener("click", function () {
    const value = parseFloat(document.getElementById("value").value);
    const fee = 1 + parseFloat(document.getElementById("fee").value) / 100;
    const time = parseFloat(document.getElementById("time").value);
  
    const total = value * fee ** time;
  
    // Substituindo o ponto por vírgula no resultado
    const formattedTotal = "R$" + total.toFixed(2).replace(".", ",");
  
    document.getElementById("total").innerHTML = formattedTotal;
  });