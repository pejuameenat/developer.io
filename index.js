const user1 = {
    pin: 1011,
    owner: 'James Coker',
    display: './images/testimony3.jpg'
}

const user2 = {
    pin: 2022,
    owner: 'Elizabeth Fish',
    display: './images/image-emily.jpg'
};
     
const users = [user1, user2];
    
const submitBtn  = document.querySelector(".submit-btn");
const SubmitFormLink = document.querySelector(".submit-form-a");
const username = document.querySelector(".username");
const password = document.querySelector(".pword");
const errorMsg = document.getElementById("error-msg");
const passwordVisible = document.querySelector(".visible");
const image = document.querySelector('.display-image');


const createUsername = function(accs){
     accs.forEach(acc =>acc.username = acc.owner.toLowerCase().split(' ').map(word => word[0].toUpperCase()).join('')
)}
createUsername(users);

const redirectToHomePage = function(){
    currrentAcc = users.find(acc => acc.username === username.value)
    if(currrentAcc?.pin === Number(password.value)){
        SubmitFormLink.setAttribute('href', "./index.html");
        // image.setAttribute('src', currrentAcc.display);
    }else{
        SubmitFormLink.setAttribute('href', "#")
        errorMsg.textContent = "Please input valid Username and password";
    }
}
submitBtn.addEventListener('click', redirectToHomePage)
submitBtn.addEventListener('keyup', function(e){
    if(e.key === 'Enter')redirectToHomePage()
})

passwordVisible.addEventListener('click', function(){
    if(password.type === 'password'){
        password.setAttribute('type', "text")
        passwordVisible.setAttribute('src', "./images/hide.png");
    }else{
        password.setAttribute('type', 'password')
        passwordVisible.setAttribute('src', "./images/visible.png");
    }
})

 
