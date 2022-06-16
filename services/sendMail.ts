import axios from 'axios';

export const sendContactMail = async (name: string  , senderMail: string, about:string, text: string) => {

  const data = {
    senderMail,
    about,
    name,
    text
  };

  try{
    return await axios.post('/api/contact', data);
  } catch(error) {
    return error;
  }

}