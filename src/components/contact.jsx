import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../CSS/contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Work Together</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>My address:</h3>
              <p>8/89f,West Street,Karankadu, Kanyakumari-dt, Tamilnadu</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Call me:</h3>
              <p>‪+91 6380102651‬</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Mail me:</h3>
              <p>jinovj250@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div>
              <h3>Follow me:</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;