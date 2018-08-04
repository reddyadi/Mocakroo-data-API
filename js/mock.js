console.log("loaded");
$.ajax({
  type: "GET",
  url: "data/mockaroo.json",
  dataType: "json",
  success: function(data) {
    console.log(data);
    var result = document.getElementById('result');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].first_name);
      var tr = document.createElement('tr');
      var th1 = document.createElement('th');
      var th2 = document.createElement('th');
      var th3 = document.createElement('th');
      var th4 = document.createElement('th');
      var txt = document.createTextNode(data[i].first_name);
      var txt1 = document.createTextNode(data[i].last_name);
      var txt2 = document.createTextNode(data[i].email);
      var txt3 = document.createTextNode(data[i].gender);
      th1.appendChild(txt);
      th2.appendChild(txt1);
      th3.appendChild(txt2);
      th4.appendChild(txt3);
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      result.appendChild(tr);
    }
  },
  error: function(error){
    console.log(error);
    console.log("Something went wrong with the connection");
  }
})
