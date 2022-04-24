const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//username이 계속 사용되야 할 경우 오타가 일어날 수 있기 때문에 미리 저장하자. 
//string(text)라는걸 기억시키기 위함.
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // const usernameThatTheUserWrote = loginInput.value;
    const username = loginInput.value;
    // localStorage.setItem("USERNAME_KEY", loginInput.value);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
 
loginForm.addEventListener("submit",onLoginSubmit);

function paintGreetings(username){
    // const username = localStorage.getItem(USERNAME_KEY);

    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//제일 먼저 확인한다.

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUsername);
}