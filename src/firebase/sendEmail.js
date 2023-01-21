import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function sendEmail(email, texto, name) {
  const collectionRef = collection(db, 'mail');
  const emailContent = {
    to: 'ignacab@hotmail.com',
    from: email,
    message: {
      subject: 'Ignacio, te contactan por trabajo o por spam!',
      text: texto,
      html: `Remitente: ${email} <br/> ${name}: <br/> <p>${texto}</p>`,
    },
  };
  return await addDoc(collectionRef, emailContent);
}
