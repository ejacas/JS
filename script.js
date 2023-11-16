// Visą logiką aprašykite viename faile ir atspausdinkite per console.log. Tuomet, įkelkite į Github, paviešinkite ir pridėkite nuorodą prie užduoties :)

// 1. Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne. 

// 2. Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length). 

// 3. Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult". 

// // 4. Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce. 


// 1 Užduotis

var legalAge = 20
var clientAge = 19

if(clientAge >= 20) {
    alert("Klientas pasiekęs legalų amžių")
} else {
    alert("Klientas nepasiekęs legalaus amžiaus")
}

if(clientAge >= 20) {
    aconsole.log("Klientas pasiekęs legalų amžių")
} else {
    console.log("Klientas nepasiekęs legalaus amžiaus")
}
console.log("===============")



// 2 Užduotis 

var name = "Evaldas"

if(name.length >= 6){
    console.log("Ilgas vardas")
}
console.log("===============")


// 3 Užduotis

var age = 100

if(age >= 100 || age <= 0){
    console.log("Invalid age")
} else if(age >= 1 && age <= 18) {
    console.log("Child")
} else{
    (age <= 19 && age >= 99) 
        console.log("Adult")
}
console.log("===============")



// 4 Užduotis

var car = "BMW"

if(car == "BMW" || car == "Mini" || car == "Rolls-Royce") {
    console.log("BMW Group")
} else if(car == "VW" || car == "Audi" || car == "Bentley" || car == "Bugatti" || car == "Lamborghini"  || car == "Porsche") {
    console.log("VW Group")
} else {
    console.log("None")
}
