"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCW8FFKUbofXIA5zyIVps-JNKCNd4uk9d4",
    authDomain: "health-trak.firebaseapp.com",
    projectId: "health-trak",
    storageBucket: "health-trak.appspot.com",
    messagingSenderId: "329793652465",
    appId: "1:329793652465:web:ac1af852da06bf26548b50",
    measurementId: "G-3DNS8Y7SBY",
};
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(exports.app);
