// like as a to do list
document.getElementById('upadated-input').addEventListener('click', function add(e){
    const inputFild = document.getElementById('input-fild');
    const inputValue = inputFild.value;
    const inputUl = document.getElementById('input-ul');
    const newList = document.createElement('li');
    const newListAtr = document.createAttribute('class');
    newListAtr.value = 'list text-start p-2 border-bottom border-2';
    newList.setAttributeNode(newListAtr)
    const len = inputUl.children.length+")"+" ";
    const finalLen = len;
    const list =  inputUl.children.length;
    
    if(inputValue === "" ||inputValue === " " || inputValue === undefined || inputValue === null || inputValue === NaN){
        document.getElementsByClassName('secound-alert')[0].style.display = 'flex';
        document.getElementById('upadated-input').style.display = "none";
    }
    else{
        const inputUlP = document.getElementById('inputUlP');
        inputUlP.style.display = 'none';
        newList.innerText = finalLen + inputValue;
        inputUl.appendChild(newList)
        if(list%2 == 1 ){
          newList.style.background = "#19191980"
          newList.style.color = "white"
        }else{
        }
        
    }
    inputFild.value = '';

})
document.getElementById("again-off").addEventListener("click", function() {
    document.getElementById("sAlart").style.display = "none";
    document.getElementById('upadated-input').style.display = "inline-block";
  });