import React from 'react';

export default function AboutOverview() {
  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>About Us — Overview</h1>
      <div style={{ lineHeight: 1.6 }}>
        <p>D. Y. Patil College of Engineering and Technology, Kolhapur was established in 1984 under the Aegis of Dr. D.Y. Patil Group to serve the society through education. The college has been granted Autonomous Status from the Academic Year 2019-20 by UGC, New Delhi.</p>
        
        <h2 style={{ margin: '24px 0 16px' }}>Vision</h2>
        <p>To be a leader in Engineering Education, Research and Innovation for the betterment of society.</p>

        <h2 style={{ margin: '24px 0 16px' }}>Mission</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>To impart quality technical education through well-designed curriculum.</li>
          <li>To create conducive environment for research and innovation.</li>
          <li>To develop professionals with strong ethics and social values.</li>
          <li>To strengthen collaboration with industries and institutions.</li>
        </ul>

        <h2 style={{ margin: '24px 0 16px' }}>Key Highlights</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>NBA Accredited Programs</li>
          <li>NAAC Accredited with 'A' Grade</li>
          <li>Autonomous Institute</li>
          <li>ISO 9001:2015 Certified</li>
          <li>Best Engineering College in Western Maharashtra</li>
          <li>State-of-the-art Infrastructure</li>
          <li>Excellent Placement Record</li>
        </ul>
      </div>
    </section>
  );
}
