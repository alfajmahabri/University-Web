import React from 'react';

export default function ContactSupport() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Contact — Support</h1>

      <div style={{ lineHeight: 1.6 }}>
        <p>
          The support page lists channels for technical assistance, student services and administrative help. Below are
          primary contacts and guidance on how to lodge support requests.
        </p>

        <h3 style={{ marginTop: '18px' }}>Helpdesk &amp; IT Support</h3>
        <p>Email: ithelpdesk@dypgroup.edu.in (for network, portal and login issues)</p>
        <p>Phone: Internal helpdesk number (contact administration for current extension)</p>

        <h3 style={{ marginTop: '18px' }}>Student Services</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Examination &amp; Results: exam.cell@dypgroup.edu.in</li>
          <li>Library Services: library@dypgroup.edu.in</li>
          <li>Placement Cell: placement@dypgroup.edu.in</li>
        </ul>

        <h3 style={{ marginTop: '18px' }}>Support Hours</h3>
        <p>Monday — Friday: 09:30 AM — 05:30 PM (excluding public holidays). Response times vary by service area.</p>

        <p style={{ marginTop: '12px' }}>
          To submit a support request, email the appropriate team with a clear subject and include relevant attachments
          (screenshots, student ID, timestamps). For urgent matters contact the institute by phone.
        </p>
      </div>
    </section>
  );
}
