import React, { useState } from 'react';

export default function AdmissionsApply() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name.trim()) return 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    if (!/^\d{7,15}$/.test(phone.replace(/\s+/g, ''))) return 'Please enter a valid phone number (7-15 digits)';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ type: 'error', message: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim() })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Server error');
      setStatus({ type: 'success', message: 'Application submitted successfully!' });
      setName(''); setEmail(''); setPhone('');
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Failed to submit application' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '40px 24px', maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '16px' }}>Admissions — Apply Now</h1>

      <p style={{ marginBottom: '24px' }}>
        Fill your basic details below and our Admissions team will get in touch.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 6 }}
            placeholder="Full name"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 6 }}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 6 }}
            placeholder="Mobile number"
          />
        </label>

        <div>
          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#0056b3',
              color: '#fff',
              border: 'none',
              padding: '10px 16px',
              borderRadius: 6,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {status && (
          <div style={{
            marginTop: 8,
            padding: 10,
            borderRadius: 6,
            background: status.type === 'success' ? '#e6ffed' : '#ffe6e6',
            color: status.type === 'success' ? '#0a6b2b' : '#a00'
          }}>
            {status.message}
          </div>
        )}
      </form>

      <div style={{ marginTop: 28 }}>
        <h3>Contact Admission Cell</h3>
        <p>Email: admissions.dypcet@dypgroup.edu.in</p>
        <p>Phone: 0231-2601431/32/33</p>
      </div>
    </section>
  );
}
