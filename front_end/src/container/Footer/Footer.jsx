import React, {useState} from 'react';

import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

function Footer() {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    message : ''
  });

  const {
    name,
    email, 
    message
  } = formData
  
  const handleChangeInput = e => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    
    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message
    }
    console.log(client.config());

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true)
    })

  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href='mailto:ugochukwuaugustine7@gmail.com' className='p-text'>ugochukwuaugustine7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href='tel: +1 (234) 136-719-587' className='p-text'>+1 (234) 136-719-587</a>
        </div>
      </div>
      {
       !isFormSubmitted ? 
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                type="text" 
                className="p-text"
                placeholder='Your Name' 
                name='name'
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                type="email" 
                className="p-text"
                placeholder='Your Email' 
                name='email'
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea 
                className='p-text'
                placeholder='Your Message'
                name="message"
                value={message} 
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending Message...' : 'Send Message'}</button>
          </div>
        :  
        <div>
          <h3 className='head-text'>Thanks for getting in touch!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
