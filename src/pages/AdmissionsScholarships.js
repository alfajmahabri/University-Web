import React from 'react';

export default function AdmissionsScholarships() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Admissions — Scholarships &amp; Financial Aid</h1>

      <div style={{ lineHeight: 1.6 }}>
        <p>
          The institute supports student access to education through various scholarships, government schemes and
          merit-based awards. Scholarship availability and eligibility may change yearly.
        </p>

        <h3 style={{ marginTop: '18px' }}>Types of Support</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Government Scholarships:</strong> State and central schemes for reserved categories and economically weaker students.</li>
          <li><strong>Merit Scholarships:</strong> Awards for top performers in board exams or university semesters.</li>
          <li><strong>Need-Based Aid:</strong> Support for students facing financial hardship (oncase-by-case basis).</li>
          <li><strong>Industry Scholarships:</strong> Sponsored scholarships from industry partners from time to time.</li>
        </ul>

        <h3 style={{ marginTop: '18px' }}>How to Apply</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Check eligibility criteria on the admissions portal or with the scholarship office.</li>
          <li>Gather required documents (income, caste, academic records, etc.).</li>
          <li>Submit the scholarship application form and supporting documents before the deadline.</li>
        </ol>

        <p style={{ marginTop: '12px' }}>
          For detailed and current information please contact the admissions/scholarship office or visit the official
          institute scholarships page.
        </p>
      </div>
    </section>
  );
}
