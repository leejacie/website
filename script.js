// declares and initializes counter variables for all 8 rooms
var counter = 0 ,counter_b = 0, counter_c = 0, counter_d = 0;
var counter_e = 0, counter_f = 0, counter_g = 0, counter_h = 0;
var check_in_time;
var check_out_time;
var saveBook;

// Add functions for Room A-H : Creating a function to add item from list
function addItem() {
    if (counter < 4){
        var a = document.getElementById("list");
        var candidate = document.getElementById("guest").value.toLowerCase();
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate));
        a.appendChild(li); 
        saveBook
        counter++;
        console.log(counter);
       
        document.getElementById("guest").value = ""; 
    } else if (counter >= 4){
        window.alert("Room A is full. Please book with another room.");
        document.getElementById("guest").value = ""; 
    } else if (counter < 0){
        counter = 0;
    }
   

}
function addItem_b(){
    if (counter_b < 4){
        var a = document.getElementById("list1");
        var candidate = document.getElementById("guest1").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li); 
        counter_b++;
        console.log('room_b count ' + counter_b);
        document.getElementById("guest1").value = ""; 
    } else if (counter_b >= 4){
        window.alert("Room B is full. Please book with another room.");
        document.getElementById("guest1").value = ""; 
    } else if (counter_b < 0){
        counter_b = 0;
    }
}
function addItem_c(){
    if (counter_c < 4){
        var a = document.getElementById("list2");
        var candidate = document.getElementById("guest2").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_c++;
        console.log('room_c count ' + counter_c);
        document.getElementById("guest2").value = "";
    } else if (counter_c >= 4){
        window.alert("Room C is full. Please book with another room.");
        document.getElementById("guest2").value = ""; 
    } else if (counter_c < 0){
        counter_c = 0;
    }
}
function addItem_d(){
    if (counter_d < 4){
        var a = document.getElementById("list3");
        var candidate = document.getElementById("guest3").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_d++;
        console.log('room_d count ' + counter_d);
        document.getElementById("guest3").value = ""; 
    } else if (counter_d >= 4){
        window.alert("Room D is full. Please book with another room.");
        document.getElementById("guest3").value = ""; 
    } else if (counter_d < 0){
        counter_d = 0;
    }
}
function addItem_e(){
    if (counter_e < 4){
        var a = document.getElementById("list4");
        var candidate = document.getElementById("guest4").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_e++;
        console.log('room_e count ' + counter_e);
        document.getElementById("guest4").value = ""; 
    } else if (counter_e >= 4){
        window.alert("Room E is full. Please book with another room.");
        document.getElementById("guest4").value = ""; 
    } else if (counter_e < 0){
        counter_e = 0;
    }
}
function addItem_f(){
    if (counter_f < 4){
        var a = document.getElementById("list5");
        var candidate = document.getElementById("guest5").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_f++;
        console.log('room_f count ' + counter_f);
        document.getElementById("guest5").value = ""; 
        } else if (counter_f >= 4){
        window.alert("Room F is full. Please book with another room.");
        document.getElementById("guest5").value = ""; 
    } else if (counter_f < 0){
        counter_f = 0;
    }
}
function addItem_g(){
    if (counter_g < 4){
        var a = document.getElementById("list6");
        var candidate = document.getElementById("guest6").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_g++;
        console.log('room_g count ' + counter_g);
        document.getElementById("guest6").value = ""; 
    } else if (counter_g >= 4){
        window.alert("Room G is full. Please book with another room.");
        document.getElementById("guest6").value = ""; 
    } else if (counter_g < 0){
        counter_g = 0;
    }
}
function addItem_h(){
    if (counter_h < 4){
        var a = document.getElementById("list7");
        var candidate = document.getElementById("guest7").value;
        var li = document.createElement("li");
        check_in_time = Math.floor(Date.now() / 1000);
        console.log(check_in_time);
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
        counter_h++;
        console.log('room_h count ' + counter_h);
        document.getElementById("guest7").value = ""; 
    } else if (counter_h >= 4){
        window.alert("Room H is full. Please book with another room.");
        document.getElementById("guest7").value = ""; 
    } else if (counter_h < 0){
        counter_h = 0;
    }
}

// Remove Functions for Room A-H : Creating a function to remove item from list
function removeItem(){
    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var candidate = document.getElementById("guest");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter--;
    document.getElementById("guest").value = ""; 
    console.log(counter);
}


function removeItem_b(){
    // Declaring a variable to get select element
    var a = document.getElementById("list1");
    var candidate = document.getElementById("guest1");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_b--;
    document.getElementById("guest1").value = ""; 
    console.log(counter_b);
}

function removeItem_c(){
    // Declaring a variable to get select element
    var a = document.getElementById("list2");
    var candidate = document.getElementById("guest2");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_c--;
    document.getElementById("guest2").value = ""; 
    console.log(counter_c);
}

function removeItem_d(){
    // Declaring a variable to get select element
    var a = document.getElementById("list3");
    var candidate = document.getElementById("guest3");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_d--;
    document.getElementById("guest3").value = ""; 
    console.log(counter_d);
}

function removeItem_e(){
    // Declaring a variable to get select element
    var a = document.getElementById("list4");
    var candidate = document.getElementById("guest4");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_e--;
    document.getElementById("guest4").value = ""; 
    console.log(counter_e);
}

function removeItem_f(){
    // Declaring a variable to get select element
    var a = document.getElementById("list5");
    var candidate = document.getElementById("guest5");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_f--;
    document.getElementById("guest5").value = ""; 
    console.log(counter_f);
}

function removeItem_g(){
    // Declaring a variable to get select element
    var a = document.getElementById("list6");
    var candidate = document.getElementById("guest6");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time =Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_g--;
    document.getElementById("guest6").value = ""; 
    console.log(counter_g);
}

function removeItem_h(){
    // Declaring a variable to get select element
    var a = document.getElementById("list7");
    var candidate = document.getElementById("guest7");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
    check_out_time = Math.floor(Date.now() / 1000);
    console.log(check_out_time);
    counter_h--;
    document.getElementById("guest7").value = ""; 
    console.log(counter_h);

}

function clear_rooms() {
    var e = document.querySelector("ol");
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
    var list = document.getElementById("list").onclick = function(){
    deleteChild();}
}
