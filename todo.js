function ajax() {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          resolve(response);
        } else if (this.readyState == 4) {
          reject("Error fetching data");
        }
      };
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
      xhttp.send();
    });
  }
  
  function renderTable(response) {
    return new Promise((resolve, reject) => {
      var output = "";
      var demo = document.getElementById("demo");
      // demo.style.marginLeft = "200px";
      demo.style.marginTop = "30px";
      output += "<tr><th style='padding:10px;text-align: center;border:1px solid purple'>Task</th><th style='padding:10px;text-align: center;border:1px solid purple' >Status</th></tr>";
      for (var i = 0; i < response.length; i++) {
        output += `
          <tr>
            <td style="padding: 10px;text-align:justify;border:1px solid purple">[${i+1}] &nbsp${response[i].title}</td>  
            <td style="padding: 10px;text-align: center;border:1px solid purple"><input type="checkbox"></td>    
          </tr>`;
      }
      demo.innerHTML = output;
  
      // add event listeners to all the checkboxes
      var checkboxes = document.querySelectorAll("input[type='checkbox']");
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("click", updateCompletedTasks);
      }
  
      resolve();
    });
  }
  
  function updateCompletedTasks() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var completedTasks = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        completedTasks++;
      }
    }
    if (completedTasks >= 5) {
      alert(`Congrats. ${completedTasks} Tasks have been Successfully Completed`);
    }
  }
  
  ajax()
    .then(renderTable)
    .catch(error => console.log(error));
  