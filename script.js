const pwEl  = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const genPwdEl = document.getElementById('genPwd');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '`~!@#$%^&*()-_+=<>;:{}|,.'


function printLen(){
    document.getElementById('pL').innerText = lenEl.value
}

function getUppercase(){
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}


function getLowercase(){
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}


function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];    
}


async function generatePassword(){
    const len = lenEl.value
    let password = ''
    for(var i=0;i<len;i++){
        const x = generateX()
        password += x
    }
    pwEl.innerText = password;
}

function generateX() {
    const xs = []
    if(upperEl.checked){
        xs.push(getUppercase()) 
    }
    if(lowerEl.checked){
        xs.push(getLowercase()) 
    }
    if(symbolsEl.checked){
        xs.push(getSymbol()) 
    }
    if(numbersEl.checked){
        xs.push(getNumber()) 
    }
    if(xs.length === 0) return " "
    return xs[Math.floor(Math.random() * xs.length)]
}

function copyPass(){
    const txtarea = document.createElement('textarea')
    const pwd = pwEl.innerText
    if(!pwd){
        return;
    }
    txtarea.value = pwd
    document.body.appendChild(txtarea)
    txtarea.select()
    document.execCommand('copy')
    txtarea.remove()
    alert('Copied')
}
