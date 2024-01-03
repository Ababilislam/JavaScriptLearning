// let text = `Apple, Banana, Kiwi`
// ttext=text.replace("Apple","Mango");
// console.log(ttext)

// const cars =["saab","volvo","BMW"]


// let carlen = cars.length

// data = cars[cars.length-1]
// text = "<ul>"
// for(i=0; i<carlen; i++){
//     // console.log(cars[i])
//     text+="<li>"+cars[i]+"</li>"
// }
// text+="<ul>"
// cars.push("daka")
// function myfunction(data){
//     text+="<li>"+data+"</li>"
// }
//
// console.log(cars)
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

// function ludo_roll(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min
// }
// text = ludo_roll(1,6)

// const students = ["ab", "sa", "pa","ak"]
// text = students.sort()
// const roll_numbers = [3,5,2,6,1]
// text = roll_numbers.sort(function (a,b){return a-b})

// leap year------------------
// function  isLeapYear(year){
//     if((year%400===0)||((year%4===0)&&(year%100!==0)))
//         return `${year} is a leap year`
//     else {
//         return `${year} is not a leap year`
//     }
// }
// text = isLeapYear(2028)

// vowel finding==============
const vowel= [ "a","e","i","o","u","A","E","O","I","U"]

function countVowel(sentence){
    let count =0
    const letters = Array.from(sentence)
    letters.forEach(function (value){
        if(vowel.includes(value)){
            count+=1;
        }
    })
    return count
}
text = countVowel("I love Bangladesh")

document.getElementById("demo").innerHTML= text