const numbers = [
    {
      name: 1,
      value: 'one'
    },
    {
      name: 2,
      value: 'two'
    },
    {
      name: 3,
      value: 'three'
    },
    {
      name: 4,
      value: 'four'
    },
    {
      name: 5,
      value: 'five'
    },
    {
      name: 6,
      value: 'six'
    },
    {
      name: 7,
      value: 'seven'
    },
    {
      name: 8,
      value: 'eight'
    },
    {
      name: 9,
      value: 'nine'
    },
  ]  


module.exports = function toReadable (number) {
    let result = ``
    let str = number + ``

    if(number === 0) return 'zero'
  
    if(str.length > 2) {
        for(let i = 0; i < numbers.length; i++) {
            if(+str[0] === numbers[i].name) {
                result +=`${numbers[i].value} hundred`
                break
            }
        }

        if(+str[1] === 0 && +str[2] === 0) {
            return result
        } else if(+str[1] === 0) {
            str = str.slice(2, 4)
            result += " "
        } else {
            result += " "
            str = str.slice(1, 3)
        }
    }
  

    if(+str < 10){
        for(let i = 0; i < numbers.length; i++) {
            if(+str === numbers[i].name) {
                result += numbers[i].value
                break
            }
        }
    } else if ( +str === 10) {
        result += 'ten'
        return result
    } else if (+str === 11) {
        result += 'eleven'
        return result
    } else if (+str === 12) {
        result += 'twelve'
        return result
    } else if (+str === 13) {
        result += 'thirteen'
        return result
    } else if (+str > 13 && +str < 20) {
        for(let i = 0; i < numbers.length; i++){
            if(+str[1] === numbers[i].name){
                if(+str[1] === 8){
                    result +=`eighteen`
                    break          
                }
                if(+str[1] === 5){
                    result +=`fifteen`
                    break          
                }
                result +=`${numbers[i].value}teen`
                break
            }
        }
    } else if (+str > 19 && +str < 30) {
        result += "twenty"
        for(let i = 0; i < numbers.length; i++) {
            if(+str[1] === numbers[i].name) {
                result += ` ${numbers[i].value}`
                break
            }
        }
    } else if (+str > 29 && +str < 40) {
        result += "thirty"
        for(let i = 0; i < numbers.length; i++) {
            if(+str[1] === numbers[i].name) {
                result += ` ${numbers[i].value}` 
                break
            }
        }
    } else if (+str > 39 && +str < 50) {
        result += "forty"
        for(let i = 0; i < numbers.length; i++) {
            if(+str[1] === numbers[i].name) {
                result += ` ${numbers[i].value}`  
                break
            }
        }
    } else if (+str > 49 && +str < 60) {
        result += "fifty"
        for(let i = 0; i < numbers.length; i++) {
            if(+str[1] === numbers[i].name) {
                result += ` ${numbers[i].value}`
                break
            }
        }
    } else if (+str > 59 && +str < 100) {
        if(number === 80) {
            return 'eighty'
        } 
        for(let i = 0; i < numbers.length; i++) {
            if(+str[0] === numbers[i].name) {
                if(+str[0] === 8){
                result += `${numbers[i].value}y`
                break
                }  
                result += `${numbers[i].value}ty`
                break
            }
        }
        for(let i = 0; i < numbers.length; i++) {
            if(+str[1] === numbers[i].name) {
                result += ` ${numbers[i].value}`
                break
            }
        }
    }
  
    return result
}
