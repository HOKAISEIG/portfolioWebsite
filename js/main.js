/* Start of script for changing content*/

var i=0;/*Initializing i*/
/*Start of the function changeContent */
function changeContent(){

    var x = document.getElementById("content");/* gets data from home page with id content and assigns it to x*/
   switch (i){
       
       /*If the case is true, it returns the corresponding statement to the element of id content*/

        case 0:
            x.innerHTML="It contains five webpages inclduing this home page." ; 
            i++; /*Increments i*/
            break; /*Terminates switch */
            
        case 1:
            x.innerHTML="Cv page containing my Curriculum Vitae(CV)";
            i++;/*Increments i */
            break;/*Terminates switch */

        case 2:
            x.innerHTML="Blog page on effects of technology on our daily life";
            i++;/*Increments i */
            break;/*Terminates switch */

        case 3:
            x.innerHTML="Research page containing my researcch for the creation of this website";
             i++;/*Increments i */
            break;/*Terminates switch */
            
        case 4:
            x.innerHTML="Contact page containing my contact details ";
            i++;/*Increments i */
            break;/*Terminates switch */

        case 5:
            x.innerHTML="  Welcome to my portfolio website!";
            i=0;/*Resets the value of i to restart the cycle*/
            break;/*Terminates switch */

   }
}
/* End function*/

/*Start of function to validate a form*/
function validateForm(){

    /* gets  data from contact page with respected id and assigns it to the variable*/
    var fName =document.forms["message"]["fullName"].value;
    var email =document.forms["message"]["Email"].value;
    var note =document.forms["message"]["Note"].value;

    /*Checking whether  all the credentials were provided */
    
    if(fName!="" && email !="" && note !=""){
        alert("Thank you for the note");/*Alerts with this prompt if all credentials were provided */
    }
    else{
        alert("Please give all credentials ");/*Alerts with this prompt if none or some of the credentials were missing*/
    }
}
/* End function*/

/*Start of function toggle darkMode*/
function darkMode() {

    var element = document.body;/* gets  data from the repected page with  id and assigns it to the variable*/
    element.classList.toggle("darkMode"); /*toggles CSS classes on the element darkMode */
}
/* End function*/
