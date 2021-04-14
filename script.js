//creating Http Request instance
var request= new XMLHttpRequest();
//initiating a  connnection  or create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
request.send();
// load the function
//function is trigerred only  when data successfully received
request.onload=function(){
  var data=JSON.parse(this.response);
  console.log(data);
  for( var i=0;i<data.length;i++){
    console.log(data[i].name);
  }
}