'use strict'

document.querySelector('#push').addEventListener( 'click',function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Please Enter A Task')
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <p>Delete</p>
            </button>
        </div>            
        `
        let current = document.querySelectorAll('.delete')
        for(let i=0; i<current.length; i++){
            current[i].onclick = function(){
                this.parentNode.remove()
            }
        }
    }
}

)