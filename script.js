function validate() {
    console.log('////////');
    var email_val = document.getElementById('email').value;
    var password_val = document.getElementById('password').value;


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email_val.match(validRegex)) {
        // var success = document.getElementById("validated").style.display = 'block';
        var msg = document.getElementById("emailHelp").style.display = "none";


    }
    if (password_val.length >= 8) {
        document.getElementById('passwordHelp').style.display = 'none';
        var success = document.getElementById("validated").style.display = 'block';



    }

}
function onSubmit() {
    if (confirm("Confirm Login")) {
        alert("Login Successful!");
    } else {
        window.location.reload();
    }

}




// if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 <= email_val.length && password_val.length < 8) {
//     var success = document.getElementById("validated").style.display = 'block';


// }
// else {
//     var msg = document.getElementById("emailHelp").style.display = "none";
//     document.getElementById('passwordHelp').style.display = 'block';

// }


