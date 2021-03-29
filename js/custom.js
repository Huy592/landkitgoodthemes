//pop up header
const menuButton = document.querySelector('.navbar-toggler');
const closeButton = document.querySelector('.close-btn');
const dropdownMenu = document.querySelector('.navbar-dropmenu');
const htmlAll = document.querySelector('html');


menuButton.addEventListener('click',function() {
    dropdownMenu.classList.add('show');
    htmlAll.style.overflow = "hidden";
})

closeButton.addEventListener('click',function() {
    dropdownMenu.classList.remove('show');
    htmlAll.style = '';
})

//show accountant
const accItems = document.querySelectorAll('.drop-acc-item');
const containerItems = document.getElementsByClassName('layer2-container');

Array.from(accItems).forEach((item,i) => {
    item.addEventListener('click',() => {
        containerItems[i].classList.toggle('show');
        });
        }
)


//Validate
function checkEmail() {
    var email_x = document.getElementById("email").value;
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email_x) || email_x == '') {
        document.getElementById('email-error').style.display = "none";
        console.log(email_x);
        return true;
    } else {
        document.getElementById('email-error').style.display = "block";
        return false;
    }
}

function checkName() {
    var name_x = document.getElementById("name-input").value;
    if(name_x == '') {
        document.getElementById('name-error').style.display = "block";
        return false;
    } else {
        document.getElementById('name-error').style.display = "none";
        console.log(name_x);
        return true
    }
}

function checkPass () {
    var password_x = document.getElementById('password').value;
    if(password_x.length < 8) {
        document.getElementById('pass-error').style.display = "block";
        return false
    }  else {
        document.getElementById('pass-error').style.display = "none";
        console.log(password_x);
        return true;
    }
}

function checkSubmit () {
    checkEmail();
    checkName();
    checkPass();
    if(checkEmail() === false || checkName() === false || checkPass() === false ) {
        return false
    } else {
        return true;
    }
}

/*slider*/

