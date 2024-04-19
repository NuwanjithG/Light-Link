  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnuoj_Ez3HK_Tov4S2dmFvPjbCwW9gQOc",
    authDomain: "user-register-dc68a.firebaseapp.com",
    projectId: "user-register-dc68a",
    storageBucket: "user-register-dc68a.appspot.com",
    messagingSenderId: "292704064789",
    appId: "1:292704064789:web:5c2e0d6fc7d7a6b106c51c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth();

  //getting all the objects of html

  var fName = document.getElementById("fName")
  var lName = document.getElementById("lName")
  var Email = document.getElementById("Email")
  var empId = document.getElementById("empId")
  var passWord = document.getElementById("passWord")

  //function for storing data
  window.signup = function(e){
	e.preventDefault();
	var obj = {
		fName:fName.value,
		lName:lName.value,
		Email:Email.value,
		empId:empId.value,
		passWord:passWord.value,
	}

	createUserWithEmailAndPassword(auth,obj.Email, obj.passWord)
	.then(function(success){
		alert("Signup Successful")
	})
	.catch(function(err){
		alert("Error" + err)
	})
	console.log(obj)
  };
  
//login 
const analytics = getAnalytics(app);

  var loginEmail = document.getElementById("loginEmail")
  var loginPassword = document.getElementById("loginPassword")

window.login = function(e){
  e.preventDefault();
  var objc = {
    loginEmail:loginEmail.value,
    loginPassword:loginPassword.value,
  };

  signInWithEmailAndPassword(auth, objc.loginEmail,objc.loginPassword)
  .then(function(successed){
    console.log(user.uid)
    alert("Logged In Succfully")
  })
  .catch(function(errr){
    window.location.replace('index.html')
    alert("Login Error" + errr)
  });

  console.log(objc)
};
