import React, { useState } from 'react';
import axios from 'axios';
import Card from "../../components/Card/Card";
import Text from "../../components/Text/Text";
import InputField from "../../components/InputField/InputField";
import Button from '../../components/Button/Button';
import Map from "./Map";
import Alert from "../../components/AlertMessage/Alert";
import location from "../../assets/geo-alt-fill.svg";
import mobile from "../../assets/phone.svg";
import email from "../../assets/envelope-at-fill.svg";
import styles from "./contactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [alert, setAlert] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.144.190.190:5000/api/users', formData);
      console.log(response.data);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setAlert({ message: 'Message Sent Successfully!', type: 'success' });

      // Hide alert after 3 seconds
      setTimeout(() => {
        setAlert({ message: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setAlert({ message: 'Please Try Again Later!', type: 'error' });

      // Hide alert after 3 seconds
      setTimeout(() => {
        setAlert({ message: '', type: '' });
      }, 3000);
    }
  };

  const heading = () => {
    return (<Text text="CONTACT US" color={"white"} tag={"h1"} />);
  };

  const LeftSection = () => {
    return (
      <div className={styles.leftSection}>
        {heading()}
        <div className={styles.cardSection}>
          <Card
            icon={location}
            text={"Location:"}
            textSize={"1.3rem"}
            textColor={"black"}
            cardHeight={"90px"}
            cardColor={"lightgrey"}
            text2={"38 Dunrobin crescent ,Kleinburg, Ontario, L4H 4A9"}
            text2Size={"0.8rem"}
          />
          <Card
            icon={email}
            text={"Email:"}
            textSize={"1.3rem"}
            textColor={"black"}
            cardHeight={"90px"}
            cardColor={"lightgrey"}
            text2={"ashi.sunnam@gmail.com"}
            text2Size={"0.8rem"}
          />
          <Card
            icon={mobile}
            text={"Call:"}
            textSize={"1.3rem"}
            textColor={"black"}
            cardHeight={"90px"}
            cardColor={"lightgrey"}
            text2={"+16476860657"}
            text2Size={"0.8rem"}
          />
        </div>
      </div>
    );
  };

  const RightSection = () => {
    return (
      <div className={styles.rightSection}>
        <div className={styles.mapWrapper}>
          <Map />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <InputField 
                placeholder={"Enter Name"} 
                height={"50px"} 
                width={"100%"} 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
              />
              <InputField 
                placeholder={"Enter Email"} 
                height={"50px"} 
                width={"100%"} 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
              />
            </div>
            <InputField 
              placeholder={"Subject"} 
              height={"3rem"} 
              width={"100%"} 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange}
            />
            <InputField 
              placeholder={"Message"} 
              height={"12rem"} 
              width={"100%"} 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
            />
            <Button type="submit">Message</Button>
          </form>
          <Alert message={alert.message} type={alert.type} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container} id="contact-us">
      <div className={styles.backgroundImage}></div>
      {LeftSection()}
      {RightSection()}
    </div>
  );
};

export default ContactUs;
