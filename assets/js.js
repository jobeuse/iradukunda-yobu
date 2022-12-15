 
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
 