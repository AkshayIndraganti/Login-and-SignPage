const loginText = document.querySelector('.title-text .login');
const loginForm = document.querySelector('form.login');
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('form .signup-link a');

const togglePassword1 = document.querySelector('#togglePassword1');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');

const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const password3 = document.querySelector('#password3');

const togglePassword = [togglePassword1, togglePassword2, togglePassword3];
const password = [password1, password2, password3];

togglePassword.forEach(myFunction);
function myFunction(item, index) {
  togglePassword[index].addEventListener('click', function () {
    const type =
      password[index].getAttribute('type') === 'password' ? 'text' : 'password';
    password[index].setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
  });
}
signupBtn.onclick = () => {
  loginForm.style.marginLeft = '-50%';
  loginText.style.marginLeft = '-50%';
  togglePassword2.style.opacity = 1;
  togglePassword3.style.opacity = 1;
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = '0%';
  loginText.style.marginLeft = '0%';
  togglePassword2.style.opacity = 0;
  togglePassword3.style.opacity = 0;
};

signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// prevent form submit
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
