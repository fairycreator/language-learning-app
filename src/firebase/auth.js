// import { auth } from "./config";

// export const createUser = async (email, password) => {
//   try {
//     await auth.createUserWithEmailAndPassword(email, password);
//   } catch (error) {
//     console.error("Error creating a new user", error);
//   }
// };

// export const signIn = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (error) {
//     console.error("Error signing in", error);
//   }
// };

// export const signOut = async () => {
//   try {
//     await auth.signOut();
//   } catch (error) {
//     console.error("Error signing out", error);
//   }
// };

// export const getCurrentUser = () => {
//   return auth.currentUser;
// };

// import { getAuth } from "firebase/auth";
// import app from "./config";

// export const auth = getAuth(app);
