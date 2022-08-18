// like as a to do list
document.getElementById('upadated-input').addEventListener('click', function add(){
    const inputFild = document.getElementById('input-fild');
    const inputValue = inputFild.value;
    const inputUl = document.getElementById('input-ul');
    const newList = document.createElement('li');
    const newListAtr = document.createAttribute('class');
    newListAtr.value = 'list text-start m-1 p-2 customli';
    newList.setAttributeNode(newListAtr)
    const len = inputUl.children.length+")"+" ";
    const finalLen = len;
    if(inputValue === "" ||inputValue === " " || inputValue === undefined || inputValue === null || inputValue === NaN){
        document.getElementsByClassName('secound-alert')[0].style.display = 'flex'
    }
    else{
        const inputUlP = document.getElementById('inputUlP');
        inputUlP.style.display = 'none';
        newList.innerText =finalLen + inputValue;
        inputUl.appendChild(newList)
    }
    inputFild.value = '';

})
document
  .getElementById("again-off")
  .addEventListener("click", function() {
    document.getElementById("sAlart").style.display = "none";
  });