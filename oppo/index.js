//login page (username)

function validate1() {
    var uname = document.getElementById("username").value
    var number = document.getElementById("password").value
    var reg = /^[A-Z]+$/
    var reg2 = /^[0-9]{10}$/g
    var result = reg.test(uname)
    var result2 = reg2.test(number)
    console.log(result);
    console.log(result2);

    if (result2 && result) {
        alert("ACCEPTED")
        return true
    } else {
        alert("username should be upper case or Password should be 10 digit")
    }

}