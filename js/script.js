function validate() {
    let text = '';
    if (document.myForm.name.value == "") {
        text = 'Name Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.email.value == "") {
        text = 'Email Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }

    var emailId = document.myForm.email.value;
    let atposn = emailId.indexOf("@");   
    let dotposn = emailId.lastIndexOf(".");  


    if (atposn < 1 || dotposn - atposn < 2) {
        text = 'Enter Valid Email';
        document.getElementById("demo").innerHTML = text;
        document.myForm.email.focus();
        return false;
    }

    if(document.myForm.phone.value == "" || isNaN(document.myForm.phone.value) || document.myForm.phone.value.length != 11) {
        text = 'Please Enter a Valid Phone Number';
        document.getElementById("demo").innerHTML = text;
        document.myForm.phone.focus();
        return false;
    }

    if(document.myForm.subject.value == "0") {
        text = 'Subject Cannot Be Empty';
        document.getElementById("demo").innerHTML = text;
        document.myForm.subject.focus();
        return false;
    }

    return (true);
}