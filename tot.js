var val
var a = []
let b = []
var num = 0
let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload = function () {
    val = JSON.parse(xhr.responseText)
    val.forEach((n) => {
        a.push(n.population)
    })
    let total = (previousValue, currentValue) => {
        return previousValue + currentValue
    }
    console.log(a.reduce(total))
}


xhr.send()

