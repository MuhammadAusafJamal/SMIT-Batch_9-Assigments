import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxe_H6huxtVBzbxSzXKFakKkeTz5T2Yts",
    authDomain: "wma-hackathon-batch9.firebaseapp.com",
    projectId: "wma-hackathon-batch9",
    storageBucket: "wma-hackathon-batch9.appspot.com",
    messagingSenderId: "856605530454",
    appId: "1:856605530454:web:ea3bb0bdfd9c6a9b9e1ef7",
    measurementId: "G-52JQVWNCYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


/// SIGN UP
let signUpButton = document.getElementById("signUpButton")
let emailSignUp = document.getElementById("emailSignUp")
let passwordSignUp = document.getElementById("passwordSignUp")

signUpButton && signUpButton.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, emailSignUp.value, passwordSignUp.value)
        .then((userCredential) => {
            const user = userCredential.user;
            const id = user.uid;
            console.log(user);
            console.log("user created")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Message", errorMessage)
        });
})

//// SIGN IN

let signInButton = document.getElementById("signInButton")
let emailSignIn = document.getElementById("emailSignIn")
let passwordSignIn = document.getElementById("passwordSignIn")

const signIn = () => {
    signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const id = user.uid;
            localStorage.setItem("UID", user.uid);
            console.log(" Signed in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Message", errorMessage)
        });
}
signInButton && signInButton.addEventListener("click", signIn)

/// SIGN OUT


// signOut(auth).then(() => {
//     console.log(" Sign Out Successful")
// }).catch((error) => {
//     // An error happened.
// });




/// PUBLIC DASHBOARD




///USER DASHBOARD

// const inputTitle = document.getElementById("inputTitle");
// const inputContent = document.getElementById("inputContent");
// const publishbtn = document.getElementById("publishbtn");
// const mainDiv = document.getElementById("mainDiv")

// publishbtn && publishbtn.addEventListener("click", () => {
//     mainDiv.innerHTML += `
//     <div class="card">
//     <div class="section-1 d-flex">
//         <img src="download.jpeg" alt="">
//         <p>${inputTitle.value}</p>
//     </div>
//     <div class="section-2 d-flex">
//         <p>  - August 19 2023</p>
//     </div>
//     <div class="section-3">
//         <p>${inputContent.value}</p>
//     </div>

// </div>
// `

// })

const publishBtn = document.getElementById("publish-btn");
const postedBlog = document.getElementById("posted-blog");

publishBtn && publishBtn.addEventListener('click', () => {
  const inputTitle = document.getElementById("input-title").value;
  const inputContent = document.getElementById("Input-content").value;

  const blogHTML = `
    <div class="card">
      <div class="section-1 d-flex">
        <img src="download.jpeg" alt="">
        <p>${inputTitle}</p>
      </div>
      <div class="section-2 d-flex">
        <p>By Muhammad Ausaf Jamal - August 19 2023</p>
      </div>
      <div class="section-3">
        <p>${inputContent}</p>
      </div>
    </div>
  `;

  postedBlog.innerHTML += blogHTML;
});



/// USERPROFILE

const user = auth.currentUser;
console.log(user)
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }




await setDoc(doc(db, "users", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});


const docRef = await addDoc(collection(db, "cities"), {
    name: "Tokyo",
    country: "Japan"
});
console.log("Document written with ID: ", docRef.id);