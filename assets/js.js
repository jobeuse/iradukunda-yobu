 
var form=document.getElementById("form")
.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    name= document.getElementById("name").value;
    email = document.getElementById("email").value;
     message = document.getElementById("message").value;
  
    if (!name){

        document.getElementById("error").innerHTML="Name required";
    }
    else if (!email){
         document.getElementById("error").innerHTML="Email required";
    }
     else if (!message){
         document.getElementById("error").innerHTML="Message required";
    }else if (email){

         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log(name); 

             document.getElementById("error").innerHTML="";
            document.getElementById("success").innerHTML=` Your response have been saved,  `+name;
            

         }else{
             document.getElementById("error").innerHTML="Email format is not correct";
            
         }
 
    }

});
 


    var burger_button= document.getElementById("burger_button"); 
    var navbar= document.getElementById("NavItems_icons"); 
    var close= document.getElementById("close"); 

function showNavabar (){ 
    burger_button.addEventListener("click", function (){
        navbar.style.display="block";  
        burger_button.style.display="none"
        close.style.display="block";
    });

   
   
}


function closeNavbar (){ 
     close.style.display="none";

     if(close){ 
         close.addEventListener("click", function (){
                navbar.style.display="none"; 
                burger_button.style.display="block"
                  close.style.display="none";
             });
    }

}


showNavabar();
closeNavbar();

    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //         x.className += "reponsive";
    //     } else {
    //         x.className = "topnav";
    //     }
    //     }