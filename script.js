const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnAt = document.getElementById('buttonAt');
btnAt.addEventListener('click', function () {
    if(inputBox.value === ''){
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''; //Pour netoyer l'input box
    saveData();
});

listContainer.addEventListener('click', function(ckc){
    if(ckc.target.tagName === 'LI'){
        ckc.target.classList.toggle('checked');
        saveData();
    } else if (ckc.target.tagName === 'SPAN'){
        ckc.target.parentElement.remove();
    }   saveData();
}, false);

function saveData (){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();