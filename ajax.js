/*const button =document.querySelector("button");
const output =document.querySelector("#output");

button.addEventListener("click", ()=>{
    let xhr =new XMLHttpRequest();
    xhr.open("get" , "../data.txt" ,true);
    xhr.onload = function (){
        if (this.status == 200){
            output.innerHTML = this.responseText;
        }
    }
    xhr.send();
})*/



// jason mit AJAX
/*const button = document.getElementById("button")
button.addEventListener("click" , loadcustomer)

function loadcustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open("get" , "../customer.json" , true);
    xhr.onload = function () {
      if(this.status ===200){
          let customer =JSON.parse(this.responseText);
          let output = `
          <ul>
              <li>id : ${customer.id}</li>
              <li>firstname: ${customer.firstname}</li>
              <li>lastname: ${customer.lastname}</li>
              <li>phone: ${customer.phone}</li>
              <li>age : ${customer.age}</li>
              <li>gender : ${customer.gender}</li>
          </ul>
          `;
          document.getElementById("customer").innerHTML =output;
      }  
    }
  xhr.send();
  }
*/





/*const button = document.getElementById("button")
button.addEventListener("click" , loadcustomers)

function loadcustomers () {
    let xhr = new XMLHttpRequest();
    xhr.open("get" ,"customers.json", true);
    xhr.onload = function () {
      if(this.status ===200){
         let customers =JSON.parse(this.responseText);
         let output = ``;
         customers.forEach(function(customer){
             output += `
            <ul>
                <li>id : ${customer.id}</li>
                <li>firstname: ${customer.firstname}</li>
                <li>lastname: ${customer.lastname}</li>
                <li>phone: ${customer.phone}</li>
                <li>age : ${customer.age}</li>
                <li>gender : ${customer.gender}</li>
            </ul>
            `;
         });
         
          document.getElementById("customers").innerHTML =output;
      } 
    }
  xhr.send();
  }

*/





const button = document.getElementById("button");
button.addEventListener("click" , loadpost);


function loadpost(){
    let xhr = new XMLHttpRequest();
    xhr.open("get" , "http://jsonplaceholder.typicode.com/posts/38")
    xhr.onload = function(){
        if(this.status === 200){
        let post = JSON.parse(this.responseText);
        let output = `
            <p class = "post_id"> Post Id : ${post.id} </p>
            <h2 class = "post_titel"> ${post.title}</h2>
            <p class = "post_body">  ${post.body} </p>
        `;
        document.getElementById("post").innerHTML = output;
    }}
    xhr.send();
}

















