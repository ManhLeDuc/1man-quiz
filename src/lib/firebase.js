import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDy9FjIE3rTQSpc_M_hAgBdQIMBtGUJ5o4",
  authDomain: "manquiz-65c0d.firebaseapp.com",
  projectId: "manquiz-65c0d",
  storageBucket: "manquiz-65c0d.appspot.com",
  messagingSenderId: "606872721645",
  appId: "1:606872721645:web:dd16c26e715e888002d4e4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;


export const uploadImage = async (image) => {
  const ref = firebase.storage().ref().child(`/images/${image.name}`);
  let downloadUrl = "";
  try {
    await ref.put(image);
    downloadUrl = await ref.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};