const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

submitBtn.addEventListener('click', function() {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    // run nameDisplayCheck() to sort out displaying the
  // personalized greetings and updating the form display
  nameDisplayCheck();

});


forgetBtn.addEventListener('click', function() {
    // Remove the stored name from web storage
  localStorage.removeItem('name');
  // Remove the stored name from web storage
  nameDisplayCheck();
});

function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if(localStorage.getItem('name'))  {
        // check whether the 'name' data item is stored in web Storage
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome, ' + name;
        personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
        // hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';
    } else {
        // if not, display generic greeting
    h1.textContent = 'Welcome to our website ';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    // hide the 'forget' part of the form and show the 'remember' part
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
    }
}

/*we need to run the nameDisplayCheck() function every time the page is loaded. If we don't do this, 
then the personalized greeting will not persist across page reloads. Add the following to the bottom
 of your code: */

 document.body.onload = nameDisplayCheck;

 /*  the defer attribute specifies that the contents of the <script> element will not execute until
  the page has finished loading. */