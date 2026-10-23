

function register() {
    const password = document.getElementById("registerPassword").value
    const confirempsswd = document.getElementById("confirmPassword").value
    const user = document.getElementById("fullName").value
    if (!user) {
        console.log("No user")
    }
    if (!password) {
        console.log("No password")
    }
    if (!confirempsswd) {
        console.log("no confirm password")
    }
    if (password !== confirempsswd) {
        console.log("Confirm password is not correct")
    }
    fetch('/api/auth/register', {
        method: "post",
        body: JSON.stringify({
            user: user,
            password: password,
            confirmpassword: confirempsswd
        })
    }).then(res => res.json()).then(data => {
        if (data.status === 200) {
            console.log("Register succes fully")
            window.location = "/"
        }
        else {
            console.log(data)
        }
    })
}