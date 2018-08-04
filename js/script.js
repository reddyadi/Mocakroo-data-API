/*First lesson of the day*/
// var data = [
//   {
//     name: "person1"
//   },
//   {
//     name: "person2"
//   }
// ];
// console.log(data);
//
// var jsonData = [
//   { //json syntax
//     "name": "person1"
//   },
//   {
//     "name": "person2"
//   }
// ];
// console.log(jsonData);
//
// var x = JSON.stringify(data);
//
// console.log(x);
//
// var newUser = {
//   name: "person name",
//   username: "username",
//   password: "password",
//   email: "email"
// }
//
// newUser = JSON.stringify(newUser);
// //send to the database
//
// //turns into object syntax
// JSON.parse(varible);


/*Second lesson of the day, pure javascript request*/
// /*AJAXv(asynchronous javascript and XML)*/
// /*Filtering data (data.json) onto JS*/
// //http request//
// //actual syntax//
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//
//   /*request responses*/
//   // readyState
//   //   0 - request was not initialized
//   //   1 - server connection established
//   //   2 - request recieved
//   //   3 - processing request
//   //   4 - request has finished and the data/response is ready
//   //
//   // Status
//   //   200 - OK
//   //   403 - Forbidden / need to log in
//   //   404 - Not found
//
//   if(this.status == 403){
//     console.log("Forbidden, can't access information");
//     return;
//   } else if(this.status == 404) {
//     console.log("ERROR, file not found");
//     return;
//   }
//
//   if(this.status == 200 && this.readyState == 4){
//     console.log(this.responseText);
//     var data = JSON.parse(this.responseText);
//     console.log(data);
//   }
//
//
// };
//
// //opening a connection//
// xhttp.open("GET", "data/data.json", true); //asynchronous request//
// xhttp.send();

$.ajax({
  type: "GET",
  url: "data/data.json",
  dataType: "json",
  success: function(dataFromJSON){
    console.log(dataFromJSON);
  },
  error: function(error){
    console.log(error);
    console.log("Something went wrong with the connection");
  }
})
