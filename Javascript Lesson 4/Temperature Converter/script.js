// როგორ ითვლება, ანუ კონვერტირდება ცელსიუსი ფარენგეიტში :   F = ((9/5)*C ) + 32 
//ეს ფუნქცია არის ცელსიუსის საკონვერტაციოდ ფარენგეიტში

function celsiusToFahrenheit() {
    // celsius to fahrenheit 
    var celsiusInput = document.getElementById("celsius").value
    var fahrenheitOutput = (celsiusInput * 9/5)+ 32;
    document.getElementById("fahrenheit").value = fahrenheitOutput.toFixed(2)
    console.log("Hello Children")
}






// როგორ კონვერტირდება ფარენგეიტი ცელსიუსში :                C = 5/9 * (F - 32)
//დაწერეთ ფუნქცია, ფარენგეიტის საკონვერტაციოდ, ცელსიუსში, ზედა ფორმულის გამოყენებით.


function fahrenheitToCelsius() {

// დაწერეთ კოდი
  
var fahrenheitInput = document.getElementById("fahrenheit").value
var celsiusOutput= (fahrenheitInput -32) * 5/9;
document.getElementById("celsius").value = celsiusOutput.toFixed(2)
console.log("Hello world 2")


}