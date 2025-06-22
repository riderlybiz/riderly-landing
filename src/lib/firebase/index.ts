// src/lib/firebase.ts
import { decrypt } from '@/utils/crypto';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getFirebaseApp(): { app: FirebaseApp; db: Firestore } {
  if (!app) {
    const key = process.env.ENCRYPTION_KEY;
    if (!key) {
      throw new Error('ENCRYPTION_KEY 환경변수가 정의되지 않았습니다.');
    }

    const config = {
      apiKey: decrypt(process.env.NEXT_PUBLIC_FIREBASE_API_KEY!, key),
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
    };

    app = initializeApp(config);
    db = getFirestore(app);
  }

  return { app: app!, db: db! };
}
