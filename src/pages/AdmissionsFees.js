import React from 'react';

export default function AdmissionsFees() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Admissions — Fee Structure</h1>

      <div style={{ lineHeight: 1.6 }}>
        <p>
          Fee structures vary by programme (UG/PG), category (government/management quota) and academic year.
          The information below is indicative — always refer to the official admissions office for exact figures.
        </p>

        <h3 style={{ marginTop: '18px' }}>Indicative Fees (per year)</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>B.Tech (Government quota):</strong> Tuition &amp; statutory fees as per DTE norms.</li>
          <li><strong>B.Tech (Management quota):</strong> Higher tuition as determined by the institute.</li>
          <li><strong>M.Tech:</strong> Tuition and development fees as per programme regulations.</li>
          <li><strong>Other charges:</strong> Library, laboratory, examination and student activity fees apply.</li>
        </ul>

        <h3 style={{ marginTop: '18px' }}>Payment &amp; Refunds</h3>
        <p>
          Fees can typically be paid online or at designated fee counters. Refund and withdrawal rules follow regulatory
          guidelines; contact the admissions office for the official refund policy.
        </p>

        <h3 style={{ marginTop: '18px' }}>Contact for Fees</h3>
        <p>Email: admissions.dypcet@dypgroup.edu.in</p>
        <p>Phone: 0231-2601431/32/33</p>
      </div>
    </section>
  );
}
