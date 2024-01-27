console.log ("EBCA Student´s user Registration System"); // Title of the website


var Registration = [ // We create a variable called carDatabese for add, search or deleting actions
    {name:"Juan Gonzales", age: "30", city: "CDMX", course:"Full Stack", email:"juanluis@gmail.com"},
    {name:"Pedro Munoz", age: "30", city: "Estado de Mexico", course:"Full Stack", email:"Pmunoz@gmail.com"},
    {name:"Jacobo Mendoza", age: "30", city: "Guanajuato", course:"Full Stack", email:"JMendoza@gmail.com"},
    {name:"Pedro Ortiz" , age: "25" , city: "Estado de Mexico", course:"Back end Python", email:"uzielitomix@gmail.com"},
    {name:"Juan Kalley", age:"40", city: "Guadalajara" , course: "Front End", email: "Juancamaney@yahoo.com"},


];
function addUser (){ // Add user function designed to add new users in the Database //

    var name = prompt("Enter your full name");
    var city = prompt("Provide your city");
    var age = prompt("Provide your age");
    var course = prompt("Select your preferred course");
    var email = prompt("Provide your email address");
     
    var newStudent = { name: name,city: city, age: age, course : course, email : email };
    
    Registration.push(newStudent);
    alert(name+ " was succesfully added in the database");
    
    }
       
    function searchUser(){ // Consult option to see the objects in the file
       for(var i = 0; i < Registration.length ; i++){
          console.log("name: " + Registration[i].name); // We show the information to the user
          console.log("city: " + Registration [i].city);
          console.log("age: " + Registration[i].age);
          console.log("course: " + Registration[i].course);
          console.log("email: " + Registration[i].email);
       };
    }
    


function deleteUser(){ // Delete function to delete objects in the database
   var nameTodelete = prompt("Please type the username to be deleted"); // We request from the user the option to be deleted
 
   Registration = Registration.filter( user =>user.name !== nameTodelete ); // We use a filter to keep te options that were not mentioned previoursly

}

    
    do{ // Actions taken from the user option according to their needings and it will be repeated until te conditon not be completed
    
    
       
    
    var opcion = prompt("Select any option: \n1. Add user \n2.Search user \n3. Delete user \n4. Exit"); //Options created to select a function 
     
    if (opcion === "1"){ // We used if to give the customer options to select there choise 
       addUser(); // If customer select the option it display the function to take
    } else if (opcion === "2"){
        searchUser ();
    }else if(opcion === "3"){
      deleteUser ();
    }else if ("Exit"){
       alert("Exit of the system");
    }else{
       alert("Invalid option, please select other");
    }
    
    
    var continuar = prompt("Do you want to do other action (S/N)"); // We give the option to the customer to select any option to continue
    
    } while (continuar === "s" ); // End of the programm
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


