// axios req
// function getTxnlist() {
//   console.log("lalalalaaaaa");
//   axios
//     .get("http://localhost:3000/txnlist")
//     // Handle a successful response from the server
//     .then((response) => {
//       // Getting a data object from response that contains the necessary data from the server
//       const data = response.data;
//       console.log("On get txn list success", response);
//     })
//     // Catch and print errors if any
//     .catch((error) => console.error("On get txn list error", error));
// }

// XMLHttpRequest
// function apiCall() {
//   var data = null;
//   // Create a request variable and assign a new XMLHttpRequest object to it.
//   var request = new XMLHttpRequest();

//   // Open a new connection, using the GET request on the URL endpoint
//   request.open("GET", "http://localhost:3000/", true);

//   request.onload = function () {
//     // Begin accessing JSON data here
//     data = JSON.parse(this.response);

//     if (request.status >= 200 && request.status < 400) {
//       console.log("lalal", data);
//       // data.forEach((movie) => {
//       //   console.log(movie.title);
//       // });
//     } else {
//       console.log("error");
//     }
//   };
// }
