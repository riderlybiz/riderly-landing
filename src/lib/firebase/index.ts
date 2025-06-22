import { decrypt } from '@/utils/crypto';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

if (!process.env.ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY 환경변수가 정의되지 않았습니다.');
}

// riderly firebase
const firebaseConfig = {
  apiKey: decrypt(process.env.NEXT_PUBLIC_FIREBASE_API_KEY!, process.env.ENCRYPTION_KEY!),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };