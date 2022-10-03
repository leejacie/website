var counter = 0
function check_in(){
    counter++;
    console.log(counter)
    let n = document.getElementById("guest").value;
    let person = document.createElement("li");
    let name = document.createTextNode(n);
    person.appendChild(name);
    
    let list = document.getElementById("guestlist");
    var inside = list.getElementsByTagName("li");
    document.getElementById("guest").value = ""; 
    
        if ((inside.length) < 4){
            list.appendChild(person);
            console.log(list);
    }
        else{
            window.alert("ROOM A IS FULL");
            counter--;
    }
}

function clear(){
    let rm1 = document.getElementById("guestlist");
    let rem = rm1.getElementsByTagName("li")[0];
    let move = rem.parentNode;
    move.removeChild(rem); 
}
