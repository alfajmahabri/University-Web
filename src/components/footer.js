import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.linkColumns}>
          <div className={styles.linkColumn}>
            <a href="/about">About Us</a>
            <a href="/departments">Departments</a>
            <a href="/admissions">Admissions</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="/committees">Internal Committees</a>
            <a href="/placement">Training & Placement</a>
            <a href="/culture">Culture</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="/alumni">Alumni</a>
            <a href="/application">Application Form</a>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h3>D. Y. Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur</h3>
          <p>Email: info.dypcet@dypgroup.edu.in</p>
          <p>Tel: 0231-2601431/32/33</p>
          <p>Send your resumes for Jobs:career.dypcet@dypgroup.edu.in</p>
          <p>For student document verification apply through e-office</p>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Approved by AICTE, DTE -Govt. of Maharashtra & Affiliated to Shivaji University</p>
        <p>© 2025 DYP Group</p>
      </div>
    </footer>
  );
};

export default Footer;
