// let text = `Apple, Banana, Kiwi`
// ttext=text.replace("Apple","Mango");
// console.log(ttext)

const cars =["saab","volvo","BMW"]



let carlen = cars.length

// data = cars[cars.length-1]
// text = "<ul>"
// for(i=0; i<carlen; i++){
//     // console.log(cars[i])
//     text+="<li>"+cars[i]+"</li>"
// }
// text+="<ul>"
cars.push("daka")
function myfunction(data){
    text+="<li>"+data+"</li>"
}

console.log(cars)
// text = "<ul>"
// cars.forEach(myfunction);
// text+="<ul>"
// console.log(typeof cars)
// text=cars.join(" ")

//
// let a = cars.shift()
// text=cars

// dynamic add to array
// cars[cars.length] = "bamama"
// text = cars
// cars.sort()
// text = cars.reverse()

// const point = [40,100,1,5,25,10]
// point.sort(function (a,b){return b-a})
// text=point

function ludo_roll(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}
text = ludo_roll(1,6)

document.getElementById("demo").innerHTML= text