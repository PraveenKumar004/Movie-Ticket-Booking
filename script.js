function addTags() {
    var a = document.getElementById("option");
    var n = document.getElementById("no").value;
    var z = document.getElementById("z");
    if(n > 100){
        n = 100;
    }
    for(var i = 0; i < n; i++){

        var container = document.getElementById("Name");
    
        var newElement = document.createElement("div");
    
        newElement.setAttribute("class", "myClass");
        newElement.innerHTML = '<fieldset class="yt"><h>Please Enter Name:</h><input class="in" type="text" placeholder="Enter Name" required><br><h>Please Enter Age:</h><input class="in" type="number" placeholder="Enter Age" required></fieldset>';
        
        container.appendChild(newElement);
    }
    for(i=0;i<n;i++){
    var newId = document.getElementById("newid");
    var rando = Math.floor(Math.floor(Math.random() * 100 ));

    var newElement = document.createElement("div");
    newElement.setAttribute("class","newClass");
    newElement.innerHTML = rando;

    var x=newId.appendChild(newElement);
    }
    switch(a.value){
        case "Sardar":
            z.innerHTML="<b>Total Amount :</b> "+n*150;
            break;
        case "Vaathi":
            z.innerHTML="<b>Total Amount :</b>"+n*160;
            break;
        case "Vikram":
            z.innerHTML="<b>Total Amount :</b> "+n*220;
            break;
        case "Varisu":
            z.innerHTML="<b>Total Amount :</b> "+n*180;
            break;
        default:
            z.innerHTML="<b>No Cost-Please Select Movie</b>";
    }
}