import './App.css';
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Program from './components/program';
import Floatingab from './components/fab';
import Footer from './components/footer';
import Placement from './components/placement';
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';

// Import pages
import AboutOverview from './pages/AboutOverview';
import AboutHistory from './pages/AboutHistory';
import AboutTeam from './pages/AboutTeam';
import AcademicsPrograms from './pages/AcademicsPrograms';
import AcademicsDepartments from './pages/AcademicsDepartments';
import AcademicsSyllabus from './pages/AcademicsSyllabus';
import AdmissionsApply from './pages/AdmissionsApply';
import AdmissionsFees from './pages/AdmissionsFees';
import AdmissionsScholarships from './pages/AdmissionsScholarships';
import ContactLocations from './pages/ContactLocations';
import ContactEnquiries from './pages/ContactEnquiries';
import ContactSupport from './pages/ContactSupport';

function Home() {
  return (
    <>
      <Slider />
      <Program />
      <Floatingab/>
      <Placement />
      <Hero />
    </>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderRoute = () => {
    // primary matching by path
    if (path === '/' || path === '') return <Home />;

    if (path.startsWith('/about/')) {
      if (path === '/about/history') return <AboutHistory />;
      if (path === '/about/team') return <AboutTeam />;
      return <AboutOverview />;
    }

    if (path.startsWith('/academics/')) {
      if (path === '/academics/departments') return <AcademicsDepartments />;
      if (path === '/academics/syllabus') return <AcademicsSyllabus />;
      return <AcademicsPrograms />;
    }

    if (path.startsWith('/admissions/')) {
      if (path === '/admissions/fees') return <AdmissionsFees />;
      if (path === '/admissions/scholarships') return <AdmissionsScholarships />;
      return <AdmissionsApply />;
    }

    if (path.startsWith('/contact/')) {
      if (path === '/contact/enquiries') return <ContactEnquiries />;
      if (path === '/contact/support') return <ContactSupport />;
      return <ContactLocations />;
    }

    // fallback to home for unknown routes
    return <Home />;
  };

  return (
    <>
      <Navbar />
      <main>
        {renderRoute()}
      </main>
      <Footer />
    </>
  );
}

export default App;
