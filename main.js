// function validateForm() {
//     var x = document.getElementById('search-form').value;

//     if (x == "") {
//       window.alert("Name must be filled out");
//       return false;
//     }
//   }
var required = document.getElementById('must-write')
required.style.display = "none";

function validateForm() {
    var userInput = document.getElementById("search-form");
    textvalue = userInput.value
    //document.write(textvalue.length)
    if (textvalue == "") {
        // document.write("dfghj"+textvalue);
        required.style.display = "block";
    }
    
    else {
        //document.write("juli"+textvalue);
        required.style.display = "none";
        // document.write("juli"+textvalue);

    }
}