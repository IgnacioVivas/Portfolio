import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function sendEmail(email, texto) {
  const collectionRef = collection(db, 'mail');
  const emailContent = {
    to: email,
    message: {
      subject: 'Hello from Firebase!',
      text: texto,
      html: `<p>${texto}</p>`,
    },
  };
  return await addDoc(collectionRef, emailContent);
}

// import { send } from 'firebase/functions';
// export default async function sendEmail(email, texto) {
//   const emailContent = {
//     to: 'ignacab@hotmail.com',
//     from: email,
//     message: {
//       subject: 'Hello from Firebase!',
//       text: texto,
//       html: `<p>${texto}</p>`,
//     },
//   };
//   return await send(emailContent);
// }
