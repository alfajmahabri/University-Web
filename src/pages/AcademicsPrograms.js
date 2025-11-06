import React from 'react';

export default function AcademicsPrograms() {
  const programs = [
    {
      name: 'B.Tech Programs',
      courses: [
        'Computer Science and Engineering',
        'Artificial Intelligence and Machine Learning',
        'Electronics and Telecommunication Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering'
      ],
      duration: '4 Years',
      seats: 60
    },
    {
      name: 'M.Tech Programs',
      courses: [
        'Computer Science and Engineering',
        'Digital Electronics',
        'Heat Power Engineering',
        'Structural Engineering'
      ],
      duration: '2 Years',
      seats: 18
    }
  ];

  return (
    <section style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px' }}>Academic Programs</h1>
      
      {programs.map((program, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#e53935', marginBottom: '16px' }}>{program.name}</h2>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '24px', 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '12px' }}>Available Courses:</h3>
            <ul style={{ marginBottom: '16px' }}>
              {program.courses.map((course, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{course}</li>
              ))}
            </ul>
            <p><strong>Duration:</strong> {program.duration}</p>
            <p><strong>Seats per Branch:</strong> {program.seats}</p>
          </div>
        </div>
      ))}
      
      <div style={{ marginTop: '32px' }}>
        <h3>Eligibility Criteria</h3>
        <p>For B.Tech: Passed HSC (12th Standard) with Physics, Chemistry and Mathematics with minimum 45% marks.</p>
        <p>For M.Tech: Graduated in relevant engineering discipline with minimum 50% marks.</p>
      </div>
    </section>
  );
}
