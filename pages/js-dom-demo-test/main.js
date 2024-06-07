document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("btnCalculate")
        .addEventListener("click",function(){
            calculate();
    })
})

function calculate(){
    var Num1 = parseFloat(document.getElementById("txtNum1").value);
    var Num2 = parseFloat(document.getElementById("txtNum2").value);

    sum = Num1 + Num2;
    diff = Num1 - Num2;
    prod = Num1*Num2;
    qout = Num1/Num2;

    console.log("Sum is equal to : " + sum);
    console.log("Diffrence is equal to : " + diff );
    console.log(`Product is equal to ${prod}`);
    console.log(`Quotient is equal to ${qout}`);

    document.getElementById("txtSum").innerHTML = "Sum is equal to " + sum;
    document.getElementById("txtDiff").textContent  = "Difference is equal to " + diff
    document.querySelector("#txtProd").textContent = `Product is equal to ${prod}`
    document.querySelector("#txtQout").innerHTML = "Qoutient is equal to " + qout;
}