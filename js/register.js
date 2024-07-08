const container= document.getElementById('container');
const registerBtn= document.getElementById('register');
const loginBtn= document.getElementById('login');
const fpassbtn= document.getElementById('fpass');
registerBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    container.classList.add("active");
});

loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    container.classList.remove("active");
});

fpassbtn.addEventListener('click', (event)=>{
    event.preventDefault();
    window.location.href="forget.html";
})
