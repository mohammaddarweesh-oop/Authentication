// email : "eve.holt@reqres.in"
// password : "cityslicka"
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btn-login");
let token = "";
// localStorage.clear();

console.log("Email : eve.holt@reqres.in");
console.log("Password : cityslicka");
function login(email, password, token) {
  axios
    .post("https://reqres.in/api/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);
      console.log(response.data.token);
      token = response.data.token;
      localStorage.setItem("token", token);
      console.log("token recevir", token);
      createNewUser();
      window.location.pathname = "secondpage.html";
      console.log("data : ", email.value, password.value);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
}
console.log(token);

function createNewUser() {
  token = localStorage.getItem("token");
  axios
    .post(
      "https://reqres.in/api/users",
      {
        name: "Mohammad",
        job: "Software Engineer",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam, amet dignissimos modi error officiis beatae perferendis fugiat nobis! Voluptatem ratione sequi, perspiciatis beatae voluptates repudiandae voluptatum quibusdam saepe sint. ",
      },
      {
        Headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log(response);
    });
}
console.log("Wait ..../");
