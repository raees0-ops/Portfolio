import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
    <>
    <div className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{flex:1}}> 
          <ContactInfoCard 
          iconUrl={"https://cdn3d.iconscout.com/3d/premium/thumb/email-3d-icon-download-in-png-blend-fbx-gltf-file-formats--mail-envelope-message-letter-contact-us-pack-tech-support-icons-5523022.png"}
          text={"raeesmulla535@gmail.com"}
          />

<ContactInfoCard 
          iconUrl={"https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-pack-logos-icons-6491025.png?f=webp"}
          text={"https://github.com/raees0-ops"}
          />
        </div>
        <div style={{flex:1}}> <ContactForm/></div>
      </div>
    </div>
    </>
  )
}

export default ContactMe