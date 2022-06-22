const btn = document.querySelector('#equals');
btn.addEventListener('click', solve);

function solve(){
    let select = document.querySelector('#operators').value; 
    const x = parseInt(document.querySelector('#calc').value); //calls user input & turns into integar
    const y = parseInt(document.querySelector('#calc2').value); //calls user input & turns into integar
    let answer = document.querySelector('#answer')

    if(select == 'add'){
        return add(x, y)
    }
    else if(select == 'sub'){
        return sub(x, y)
    }
    else if(select == 'mult'){
        return mult(x, y)
    }
    else{
        return div(x, y)
    }
}
function add(x,y){
    return x + y
}
function sub(x,y){
    return x - y
}
function mult(x, y){
    return x * y
}
function div(x, y){
    return x/y
}


function clear(){
    document.getElementById('#reset').value = " ";
}