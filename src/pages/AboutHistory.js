import React from 'react';

export default function AboutHistory() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>About — History</h1>

      <div style={{ lineHeight: 1.6 }}>
        <p>
          D. Y. Patil College of Engineering &amp; Technology (DYP CET), Kolhapur was founded in the mid-1980s
          by the D. Y. Patil group to provide high quality technical education to the region. Since its inception
          the institute has steadily expanded its academic programmes, infrastructure and research activities.
        </p>

        <h2 style={{ margin: '20px 0 12px' }}>Milestones</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>1984 — College established and began offering undergraduate engineering programmes.</li>
          <li>2000s — Progressive expansion of departments and campus facilities.</li>
          <li>2019 — Institute granted autonomous status for enhanced curriculum flexibility and academic governance.</li>
          <li>Accreditations — Several programmes accredited by national bodies and college holds NAAC/NBA recognitions.</li>
        </ul>

        <h3 style={{ marginTop: '20px' }}>Our Journey</h3>
        <p>
          Over the decades DYP CET has emphasised practical learning, industry linkages and holistic student development.
          The focus on research, employability and continuous improvement has positioned the college as a leading technical
          institute in the region.
        </p>
      </div>
    </section>
  );
}
