// implementing a  user in the login page that redirects to home page

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


const createUsername = function (accs) {
    //look thru the array of users and enable user login password to be the uppercased version of the first letters in the owner string.
     accs.forEach(acc =>acc.username = acc.owner.toLowerCase().split(' ').map(word => word[0].toUpperCase()).join('')
)}
createUsername(users);

const redirectToHomePage = function (e) {
    //find the first acct that matches the username value inputed
    //prevent default behaviors of button in a form
    if (e.target.TagName === 'BUTTON') {
        e.preventDefault()
    }
   const currentAcc = users.find(acc =>  acc.username === username.value
    )
    
    if(currentAcc?.pin === Number(password.value)){
        SubmitFormLink.setAttribute('href', "./index.html");
    }else{
        SubmitFormLink.setAttribute('href', "#")
        errorMsg.textContent = "Please input valid Username and password";
    }
}
// console.log(redirectToHomePage())
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

 

        // image.setAttribute('src', currrentAcc.display);