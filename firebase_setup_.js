// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getDatabase, ref, set, child, get  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js"

import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-check.js";

import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, updateProfile } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"

import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDrTUss_WCj1OS8h0xjIRj9aNWgtKMk_YI",

  authDomain: "fantasy-volleyball-88bff.firebaseapp.com",

  databaseURL: "https://fantasy-volleyball-88bff-default-rtdb.firebaseio.com",

  projectId: "fantasy-volleyball-88bff",

  storageBucket: "fantasy-volleyball-88bff.appspot.com",

  messagingSenderId: "370961046238",

  appId: "1:370961046238:web:5764c52184e7df03bbc04f",

  measurementId: "G-10JNHBDR2M"

};


// Initialize Firebase

const fire_app = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(fire_app, {
  provider: new ReCaptchaV3Provider('6LfgoT8nAAAAACoykwmQxMLRTTPhBpBXOtYsKcdJ'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});


const auth = getAuth();
auth.languageCode = 'en';

let my_super_list = []
let my_secret_list = []

function handlePhoneNumberAuth(phoneNumber) {
  return new Promise((resolve, reject) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        resolve(confirmationResult)
      }).catch((error) => {
        // Couldn't send code.
        reject(error)
      });

  });
}

function handlePhoneNumberLog(confirmationResult, code) {
  return new Promise((resolve, reject) => {
    confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      resolve(result.user)
    }).catch((error) => {
      // User couldn't sign in (bad verification code?).
      reject(error)
    });
  });
}

function handleEmailAuth(email) {
  return new Promise((resolve, reject) => {
    sendSignInLinkToEmail(auth, email, {
      // this is the URL that we will redirect back to after clicking on the link in mailbox
      url: 'https://untimelyslushyregister.volleyvisual.repl.co#?test=true',
      handleCodeInApp: true,
    }).then(() => {
      resolve("true")
    }).catch((error) => {
      reject(error)
    });
  });
}

function handleEmailLog(email, link) {
  return new Promise((resolve, reject) => {
    signInWithEmailLink(auth, email, link)
      .then((result) => {
        resolve(result.user)
      }).catch((error) => {
        console.log(error)
        reject(error)
      });
  });
}

function hasFireUser() {
  return auth.currentUser
}

function newUser() {
  return auth.currentUser && auth.currentUser.displayName == null
}

function UpdateSubsribeStatus(val) {
  updateProfile(auth.currentUser, {
    displayName: val,
  }).then(() => {
    console.log("success")
  }).catch((error) => {
    console.log(e)
  });

}

function getAllPlayers() {
  return new Promise((resolve, reject) => {
    if(my_super_list.length != 0){
      resolve(my_super_list.slice())
    }
    else{
      const db = getFirestore(fire_app);
      const usersCollection = collection(db, "players");
      getDocs(usersCollection)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            my_super_list.push({ id: doc.id, ...doc.data() });
          })
          resolve(my_super_list.slice())
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          reject(error)
        });
    }
  });
}

function commitToUser(data) {
  if(auth.currentUser == null){
    return
  }
  const uid = auth.currentUser.uid
  const route = 'users/' + uid
  const db = getDatabase();
  // TODO:VALIDATE data  before commit
  // https://firebase.google.com/docs/reference/security/database#newdata
  set(ref(db, route), data)
  .then(() => {
    console.log("Data successfully committed to /users/" + uid);
  })
  .catch((error) => {
    console.error("Error committing data: ", error);
  });
}

function initList() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser == null) {
      // TODO:load from local storage
      const roster = localStorage.getItem('roster');
      if(roster != null){
        my_secret_list = roster.split("\n")
        let index = my_secret_list.indexOf("");

        while (index !== -1) {
          my_secret_list[index] = null
          index = my_secret_list.indexOf("");
        }
      }
      else{
        //pass
      }
    
      resolve();
    } else {
      const uid = auth.currentUser.uid;
      
      const dbRef = ref(getDatabase());
      get(child(dbRef, "users/"+uid)).then((snapshot) => {
        if (snapshot.exists()) {
          my_secret_list = snapshot.val();
        } else {
          // ignore
        }
        resolve();
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    } 
  });
}

function secret_list_getter(){
  return my_secret_list.slice()
}

function secret_list_adder(playerId){
  if(my_secret_list.filter((obj) => {return obj != null}).length >= 10){
    return false
  }
  if(my_secret_list.length >=7){
    my_secret_list.push(playerId)
  }else{
    my_secret_list[7] = playerId
    for(let i = 0;i<7;i++){
      if(!my_secret_list[i]){
        my_secret_list[i] = null
      }
    }
  }
  localStorage.setItem("roster", my_secret_list.join("\n"))
  return true
}

function secrect_list_dropper(playerId){
  const index = my_secret_list.indexOf(playerId)
  if(index >= 7){
    my_secret_list.splice(index,1)
    localStorage.setItem("roster", my_secret_list.join("\n"))
    return true
  }
  else{
    return false
  }
}

function secret_list_sendBack(playerId){
  const index = my_secret_list.indexOf(playerId)
  if(index <= 6){
    my_secret_list[index] = null
    my_secret_list.push(playerId)
    localStorage.setItem("roster", my_secret_list.join("\n"))
    return true
  }else{
    return false
  }
}

function secret_list_start(index,playerId){
  const pindex = my_secret_list.indexOf(playerId)
  if(index <= 6 && pindex >=0 && my_secret_list[index] == null){
    my_secret_list[index] = playerId
    my_secret_list.splice(pindex,1)
    localStorage.setItem("roster", my_secret_list.join("\n"))
    return true
  }
  else{
    return false
  }
}

function getPlayerById(id) {
  if(id == null){
    return {}
  }
  let result = my_super_list.find(obj => {
    return obj.id === id
  })
  return result || {}
}

function fireAuthOut(){
  if(auth.currentUser == null){
    return
  }
  auth.signOut()
  .then(() => {
    // Log out successful
    console.log("User logged out successfully.");
  })
  .catch((error) => {
    // An error occurred while logging out
    console.error("Error logging out: ", error);
  });
}


window.handlePhoneNumberAuth = handlePhoneNumberAuth;
window.handlePhoneNumberLog = handlePhoneNumberLog;
window.handleEmailAuth = handleEmailAuth;
window.handleEmailLog = handleEmailLog;

window.hasFireUser = hasFireUser;
window.newUser = newUser;
window.UpdateSubsribeStatus = UpdateSubsribeStatus;
window.getAllPlayers = getAllPlayers;
window.commitToUser = commitToUser

window.secret_list_getter = secret_list_getter
window.secret_list_adder = secret_list_adder
window.secrect_list_dropper = secrect_list_dropper
window.secret_list_sendBack = secret_list_sendBack
window.secret_list_start = secret_list_start

window.fireAuthOut = fireAuthOut
window.getPlayerById = getPlayerById
window.initList = initList