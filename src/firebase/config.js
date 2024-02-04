// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDUwF8KXcuaSXKUO4SNkcib8JFeV9s6q78",
//   authDomain: "language-learning-app-179f6.firebaseapp.com",
//   projectId: "language-learning-app-179f6",
//   storageBucket: "language-learning-app-179f6.appspot.com",
//   messagingSenderId: "443115709349",
//   appId: "1:443115709349:web:72111701c9084b9c0ebe4c",
//   measurementId: "G-KEVK9Q9FD9",
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUwF8KXcuaSXKUO4SNkcib8JFeV9s6q78",
  authDomain: "language-learning-app-179f6.firebaseapp.com",
  databaseURL:
    "https://language-learning-app-179f6-default-rtdb.europe-west1.firebasedatabase.app/0",
  projectId: "language-learning-app-179f6",
  storageBucket: "language-learning-app-179f6.appspot.com",
  messagingSenderId: "443115709349",
  appId: "1:443115709349:web:72111701c9084b9c0ebe4c",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);
