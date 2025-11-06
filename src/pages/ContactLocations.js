import React from 'react';

export default function ContactLocations() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Contact — Locations</h1>

      <div style={{ 
        background: '#f5f5f5',
        padding: '24px',
        borderRadius: '8px',
        marginBottom: '32px'
      }}>
        <h2 style={{ color: '#e53935', marginBottom: '16px' }}>Main Campus</h2>
        <p style={{ marginBottom: '8px' }}><strong>D. Y. Patil College of Engineering and Technology</strong></p>
        <p>Kasaba Bawada,</p>
        <p>Kolhapur - 416006</p>
        <p>Maharashtra, India</p>
        
        <div style={{ marginTop: '16px' }}>
          <p><strong>Phone:</strong> 0231-2601431/32/33</p>
          <p><strong>Email:</strong> info.dypcet@dypgroup.edu.in</p>
          <p><strong>Career Email:</strong> career.dypcet@dypgroup.edu.in</p>
        </div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ marginBottom: '16px' }}>How to Reach</h3>
        <ul style={{ lineHeight: 1.6 }}>
          <li><strong>By Air:</strong> Nearest Airport - Kolhapur Airport (10 km)</li>
          <li><strong>By Rail:</strong> Kolhapur Railway Station (5 km)</li>
          <li><strong>By Road:</strong> Well connected by NH-4 and State Highways</li>
        </ul>
      </div>

      <div style={{ marginTop: '32px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.771832410727!2d74.21710631478558!3d16.686843188506447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec23ae9%3A0xece6ea2a578c71b!2sD.Y.Patil%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1645106141435!5m2!1sen!2sin"
          width="100%" 
          height="450" 
          style={{ border: 0, borderRadius: '8px' }} 
          allowFullScreen="" 
          loading="lazy"
          title="DYP College Map"
        ></iframe>
      </div>
    </section>
  );
}
