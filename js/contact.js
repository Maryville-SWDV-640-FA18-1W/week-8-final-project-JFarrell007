// Get the modal
var successModal = document.getElementById('successModal');
var warnModal = document.getElementById('warnModal');

// Get the button that opens the modal
var btn = document.getElementById("submitBtn");
console.log(btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log(checkform());
    if (checkform()){
        console.log("Passed tests");
        successModal.style.display = "block";
    }
    else {
        console.log("Failed tests");
        warnModal.style.display = "block";
    }
}

function checkform(){
    var fcheck = document.forms[0].elements;
    var submitOk = true;

    for (var i = 0; i < fcheck.length; i++){
        if(fcheck[i].value.length==0) submitOk = false;
    }
    return submitOk;
}
// When the user clicks on <span> (x), close the modal
successModal.onclick = function(){
    console.log("successModal clicked");
    successModal.style.display = "none";
}

warnModal.onclick = function() {
    console.log("warnModal clicked");
    warnModal.style.display = "none";
}
