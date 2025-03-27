
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBGfxiYlDqcuEC3lJ32SA9DAIsigiD4w0E",
authDomain: "saec-aps-ieee.firebaseapp.com",
databaseURL: "https://saec-aps-ieee-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "saec-aps-ieee",
storageBucket: "saec-aps-ieee.firebasestorage.app",
messagingSenderId: "927859749615",
appId: "1:927859749615:web:bfe602b7381d228586a11a",
measurementId: "G-0XHFJX8L26"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
