let listContainer = document.getElementById('list-item')
let h = document.querySelector('h')
let inInput = document.getElementById('inInput')


function addYourTask(){
    if(inInput.value == ''){
        alert('Please Enter the Task')
    }
    else{
        const task = document.createElement('li')
        task.textContent = inInput.value;
        listContainer.appendChild(task)
        // inInput.value = ''
        let span = document.createElement('span')
        span.className = 'material-icons';
        span.textContent = "\ue872"
        task.appendChild(span)
        span.style.right = '0px';
    }
    inInput.value = '';
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
})
