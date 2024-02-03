import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const logUpThunk = createAsyncThunk(
  "auth/logUpThunk",
  async (body, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);

      await updateProfile(auth.currentUser, {
        displayName: body.login,
      });

      const { uid, displayName, email } = auth.currentUser;

      return { uid, displayName, email };
    } catch (e) {
      return { error: e.message };
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/logInThunk",
  async (body, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );

      const { uid, displayName, email } = response.user;

      return { uid, displayName, email };
    } catch (e) {
      return { error: e.message };
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOutThunk",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (e) {
      return { error: e.message };
    }
  }
);
