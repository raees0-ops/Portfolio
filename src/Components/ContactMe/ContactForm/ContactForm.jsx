import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className="name-container">
                <input type="text" className="firstname" placeholder='Enter Fist Name' />
                <input type="text" className="lastname" placeholder='Enter Last Name' />
            </div>

            <input type='text' name='email' placeholder='Email'/>
            <textarea name="massage" placeholder='Massage' rows={3}></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default ContactForm