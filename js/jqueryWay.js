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
