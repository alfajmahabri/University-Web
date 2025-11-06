import React from 'react';

export default function ContactEnquiries() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Contact — Enquiries</h1>

      <p style={{ lineHeight: 1.6 }}>
        For general enquiries about admissions, programmes, placements or collaborations, use the contact information
        below or send us a message using the institute enquiry email. The admissions cell and departmental offices can
        provide programme-specific assistance.
      </p>

      <div style={{ background: '#f5f5f5', padding: '18px', borderRadius: '8px', marginTop: '18px' }}>
        <p><strong>Admissions Office</strong></p>
        <p>Email: admissions.dypcet@dypgroup.edu.in</p>
        <p>Phone: 0231-2601431 / 32 / 33</p>
      </div>

      <div style={{ marginTop: '18px', background: '#f5f5f5', padding: '18px', borderRadius: '8px' }}>
        <p><strong>General Enquiries</strong></p>
        <p>Email: info.dypcet@dypgroup.edu.in</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Message (placeholder)</h3>
        <p>
          You can implement a contact form here that posts to your backend or an email service. Required fields typically
          include name, email, subject and message.
        </p>
      </div>
    </section>
  );
}
