
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBBCQNGdqOqm97L2rVJDRlJ_PkMtUFX5ic",
    authDomain: "leaflets-6b146.firebaseapp.com",
    databaseURL: "https://leaflets-6b146-default-rtdb.firebaseio.com",
    projectId: "leaflets-6b146",
    storageBucket: "leaflets-6b146.appspot.com",
    messagingSenderId: "202878123015",
    appId: "1:202878123015:web:653b546075c79e55fafea2",
    measurementId: "G-NV5Z9N63ZN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    
    const promise = auth.signInWithEmailAndPassword(email, password).then(console.log("Logged IN!"));
    promise.catch(e=>alert(e.message));
    console.log(promise);
    // localStorage.clear();

    localStorage.setItem("isLogedIn", true);
    // window.location = "portal.html";
    setTimeout(() => {
      console.log(isLogedIn());
      if (isLogedIn() != null)
      window.open('portal.html','_self');
    }, 2000)
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    localStorage.clear();
    localStorage.setItem("isLogedIn", false);
    location.reload();
    alert("SignOut Successful from System");
  }

  function isLogedIn() {
    var user = auth.currentUser;
    console.log("User: ", user);
    return user;
  }

  // $( document ).ready(function() {
  //   console.log( "testing.." );
  //   var user = auth.currentUser;
  //   console.log("User: ", user);
  // });

  // active user to homepage
  // firebase.auth().onAuthStateChanged((user)=>{
  //   if(user){
  //     var email = user.email;
  //     alert("Active user "+email);
  //     // window.location = "portal.html"

  //   }else{
  //     // alert("No Active user Found");
  //     window.location = "index.html";
  //   }
  // })