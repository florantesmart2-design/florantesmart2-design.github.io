function clearValue() {
   document.getElementById('display').value ='';
}
function addValue(value){
    document.getElementById('display').value += value;
}
function evalValue() {
    try{
        document.getElementById('display').value =eval
        (document.getElementById('display').value);
    }catch{
        document.getElementById("display").value ='syntax error';
    }
}
function powerValue() {
    try{
        document.getElementById('display').value =eval
        (document.getElementById('display').value*(display.value))
    }catch{
        document.getElementById("display").value ='syntax error';
    }
}
function perValue() {
    try{
        document.getElementById('display').value = eval 
        (document.getElementById('display').value/100)
    }catch{
        document.getElementById("display").value ='syntax error';
    }
}
function removeValue() {
    try{
        document.getElementById('display').value;
        (document.getElementById('display').value = display.value.toString().slice(0,-1))
    }catch{
        document.getElementById("display").value ='syntax error';
    }
}