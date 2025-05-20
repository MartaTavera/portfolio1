import cert0 from '../../assets/certificate_0.jpg'
import cert1 from '../../assets/certificate_1.jpg'
import cert2 from '../../assets/certificate_2.jpg'
import cert3 from '../../assets/certificate_3.jpg'
import cert4 from '../../assets/certificate_4.jpg'
import cert5 from '../../assets/certificate_5.jpg'
import cert6 from '../../assets/certificate_6.jpg'
import cert7 from '../../assets/certificate_7.jpg'
import cert8 from '../../assets/certificate_8.jpg'
import cert9 from '../../assets/certificate_9.jpg'
import cert10 from '../../assets/certificate_10.jpg'
import './Courses.css';




const Courses = () => {
  
  const certificateImages = [
    cert0,
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8, 
    cert9, 
    cert10 
  ];

  return (
    <div className="certificates-section" id="Courses" >
      <h2>Certificates</h2>
      <p className="certificates-description">
        A collection of certificates from various online courses I've completed to enhance my skills.
      </p>
      
      <div className="certificates-grid">
        {certificateImages.map((image, index) => (
          <div key={index} className="certificate-item">
            <img 
              src={image} 
              alt={`Certificate ${index + 1}`} 
              className="certificate-image"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Courses;