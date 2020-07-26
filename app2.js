var list = document.getElementById("list")

function addTodo (){
    var ii = document.getElementsByClassName('input')[0].childNodes[3].value
    if(ii == ''){
        alert('Empty can not added')
    } else{
    var todo_item = document.getElementById("todo-item")
    
    //Create li tag with code
    var li = document.createElement('li');
    li.setAttribute("id","li");
    var liText = document.createTextNode(todo_item.value)
    //var input = document.createElement("input");
    //input.setAttribute("type","text");
    //input.setAttribute("id","edit")
    //li.appendChild(input)
    li.appendChild(liText);

    //Create Delete button
    var delbtn = document.createElement("button");
    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteItem(this)");

    //Create Edit button 
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class","btn1");
    editBtn.setAttribute("onclick","editItem(this)");



    li.appendChild(delbtn)
    li.appendChild(editBtn)

    list.appendChild(li);
    todo_item.value = "";
    // console.log(li);
    }

}

function deleteItem(e){
    e.parentNode.remove()
}

function editItem(e){
    
     var val = e.parentNode.firstChild.nodeValue;
   var editValue = prompt("Enter?",val)
   e.parentNode.firstChild.nodeValue = editValue
}
function refresh1(){
    window.location.reload(false); 
}