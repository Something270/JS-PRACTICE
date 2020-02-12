//console.log("aewsrdtfgh")

elemLoginButton = document.getElementById("login_button");
console.log(elemLoginButton);

function showMessage(message, isError){
  //makes a welcome message
  var elemWelcomeMessage = document.createElement("p");
  elemWelcomeMessage.innerText = message;
  elemWelcomeMessage.id = "user_message";
  
  if(isError){
      elemWelcomeMessage.className = "error-message";
  }
    var elemPreviousMessage = document.getElementById("user_message");

    //borrar mensaje anterior en caso de existir
    if(elemPreviousMessage) {
        elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
    }


  //shows the welcome message
  var elemMaindiv = document.getElementById("main_div");
  elemMaindiv.appendChild(elemWelcomeMessage);

}




 elemLoginButton.onclick = function() {
    console.log("WHO CLICKED!?")

    var elemUsername = document.getElementById("username");
    var elempassword = document.getElementById("password");
    
    console.log(elemUsername)
    console.log(elempassword)
    
    var username = elemUsername.value;
    var password = elempassword.value;
    
    console.log(username);
    console.log(password);

    if(username === "admin" && password == "admin"){
            
         //   //makes a welcome message
         //   var elemWelcomeMessage = document.createElement("p");
          //  elemWelcomeMessage.innerText = "Bienvenido " + username;
           
         //   //shows the welcome message
          //  var elemMaindiv = document.getElementById("main_div");
          //  elemMaindiv.appendChild(elemWelcomeMessage);
        
          // WelcomeMessageShown = true;
        showMessage("Bienvenido " + username);
            

    } else{
        showMessage("Credenciales incorrectas", true)
    }
    if(username === ""){
      showMessage("Please add username",true)
    }
    if(password === ""){
      showMessage("please add password",true)
    }
    if(username === "" && password == ""){
      showMessage("please add credencials",true)
    }
 }