import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// riderly firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyBthjX1-i8wdnBhf_uufyChe0QC2ukqfns",
//     authDomain: "riderly-2cda0.firebaseapp.com",
//     projectId: "riderly-2cda0",
//     storageBucket: "riderly-2cda0.firebasestorage.app",
//     messagingSenderId: "874358645048",
//     appId: "1:874358645048:web:20bac4af2d462c158461cd"
// }

// 민호 firebase
const firebaseConfig = {
    apiKey: "AIzaSyDK17KRonEqqTgIzCJQtVq9sFcm9I3M6BM",
    authDomain: "yoo-minho-portpolio.firebaseapp.com",
    projectId: "yoo-minho-portpolio",
    storageBucket: "yoo-minho-portpolio.firebasestorage.app",
    messagingSenderId: "491690009116",
    appId: "1:491690009116:web:f349d29bafd428812d35d9",
    measurementId: "G-6SB56D2Q52"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };