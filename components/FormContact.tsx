import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactMail } from "../services/sendMail";

export default function FormContact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if(!name || !email || !subject || !message){
      toast('preencha todos os campos para enviar sua mensagem.', {
        style: {
          background: '#fa4c29',
          color: '#fff'
        }
      });
      return;   
    }

    try{
      await sendContactMail(name, email, subject, message);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      toast('Sua mensagem foi enviada com sucesso, logo retornaremos contato.', {
        style: {
          background: '#1ed416',
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao enviar sua mensagem, tente novamente.', {
        style: {
          background: '#fa4c29',
          color: '#fff'
        }
      });
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="contact-form" name="myForm" id="myForm">
      <span id="error-msg"></span>
      <div className="row">
          <div className="col-lg-6">
              <div className="position-relative mb-3">
                  <span className="input-group-text">
                    <i className="mdi mdi-account-outline"></i>
                  </span>
                  <input name="name" type="text" className="form-control" placeholder="Seu nome" onChange={({target}) => setName(target.value)} value={name} />
              </div>
          </div>
          <div className="col-lg-6">
              <div className="position-relative mb-3">
                  <span className="input-group-text">
                    <i className="mdi mdi-email-outline"></i>
                  </span>
                  <input name="email" id="email" type="email" className="form-control"
                      placeholder="Seu e-mail" onChange={({target}) => setEmail(target.value)} value={email} />
              </div>
          </div>
          <div className="col-lg-12">
              <div className="position-relative mb-3">
                  <span className="input-group-text">
                    <i className="mdi mdi-file-document-outline"></i>
                  </span>
                  <input name="subject" id="subject" type="text" className="form-control"
                      placeholder="Assunto" onChange={({target}) => setSubject(target.value)} value={subject} />
              </div>
          </div>
          <div className="col-lg-12">
              <div className="position-relative mb-3">
                  <span className="input-group-text align-items-start">
                    <i className="mdi mdi-comment-text-outline"></i>
                  </span>
                  <textarea name="comments" id="comments" rows={4} className="form-control"
                      placeholder="Sua mensagem*" onChange={({target}) => setMessage(target.value)} value={message}></textarea>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-sm-12">
              <input type="submit" id="submit" name="send" className="btn btn-primary" value="Enviar" />
          </div>
      </div>
    </form>
  )
}
