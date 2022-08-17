// like as a to do list
document.getElementById('upadated-input').addEventListener('click', function add(){
    const inputFild = document.getElementById('input-fild');
    const inputValue = inputFild.value;
    const inputUl = document.getElementById('input-ul');
    const newList = document.createElement('li');
    const newListAtr = document.createAttribute('class');
    newListAtr.value = 'list text-start m-1 p-2 border-bottom border-3 customli';
    newList.setAttributeNode(newListAtr)
    const len = inputUl.childNodes.length+")"+" ";
    const finalLen = len;
    if(inputValue === "" || inputValue === undefined || inputValue === null || inputValue === NaN){
        document.getElementsByClassName('secound-alert')[0].style.display = 'flex'
    }
    else{
        newList.innerText =finalLen + inputValue;
        inputUl.appendChild(newList)
    }
    inputFild.value = '';
})