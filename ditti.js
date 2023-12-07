var val
let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.onload = function () {
    val = JSON.parse(xhr.responseText)
    console.log(val.filter(country => {
        for (var i in country.currencies) {
            if (i === "USD") {
                return true
            }
        }
    }).map(country => country.name.common))


}

xhr.send()