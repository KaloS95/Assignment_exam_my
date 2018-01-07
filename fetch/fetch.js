var fetch = require('node-fetch');


var FormData = require('form-data');
var form = new FormData();
form.append('assid', "a1");


fetch("http://localhost:8080/submit", {

  method: "POST",

  //make sure to serialize your JSON body
  body: form
})
.then( (response) => { 
   //do something awesome that makes the world a better place
   console.log(response.body)
});