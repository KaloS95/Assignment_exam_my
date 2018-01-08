var fetch = require('node-fetch');


var FormData = require('form-data');
var form = new FormData();
form.append('assid', "a1");


fetch("http://localhost:8080/submit", {

  method: "POST",
  headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Accept': 'application/json'
        },

  //make sure to serialize your JSON body
  body: JSON.stringify(form)
})
.then( (response) => { 
   //do something awesome that makes the world a better place
   console.log(response.body)
});