// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASh6bXGoIJ57x0O6rBH4NgkUz4FC_XYAg",
  authDomain: "my-company-site-400d2.firebaseapp.com",
  projectId: "my-company-site-400d2",
  storageBucket: "my-company-site-400d2.firebasestorage.app",
  messagingSenderId: "726374283646",
  appId: "1:726374283646:web:a9731707aaae21f243db2f",
  measurementId: "G-XY9HQ79F73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export async function uploadImage(file: File): Promise<string> {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export { storage };