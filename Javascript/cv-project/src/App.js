import React, { useState } from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Career from './components/Career';

const App = () => {
  const [generalForm, setGeneralForm] = useState(false);
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState([]);
  const [career, setCareer] = useState([]);

  // Functions for the general section. Update state info / view

  const onGeneralSubmit = (e) => {
    e.preventDefault();
    switchGeneral();
  };

  const switchGeneral = () => {
    setGeneralForm(!generalForm);
  };

  const handleGeneralInput = (e) => {
    const { target } = e;
    const value = target.value;
    const name = target.name;
    setGeneral({ ...general, [name]: [value] });
  };

  // Functions for education section

  const addEducation = () => {
    const key = uniqid();
    setEducation([
      ...education,
      {
        form: true,
        id: key,
        school: '',
        subject: '',
        educationStart: '',
        educationEnd: '',
      },
    ]);
  };

  const switchEducation = (e) => {
    e.preventDefault();
    const id = e.target.dataset.value;
    setEducation(education.map((val) => (val.id === id ? { ...val, form: !val.form } : val)));
  };

  const handleEducationInput = (e) => {
    const { target } = e;
    const id = e.target.parentElement.parentElement.dataset.value;
    const value = target.value;
    const name = target.name;
    setEducation(education.map((val) => (val.id === id ? { ...val, [name]: [value] } : val)));
  };

  const deleteEducation = (e) => {
    const { target } = e;
    const id = target.dataset.value;
    setEducation(education.filter((item) => item.id !== id));
  };

  // career functions

  const addCareer = () => {
    const key = uniqid();
    setCareer([
      ...career,
      {
        form: true,
        id: key,
        company: '',
        role: '',
        jobStart: '',
        jobEnd: '',
      },
    ]);
  };

  const switchCareer = (e) => {
    e.preventDefault();
    const id = e.target.dataset.value;
    setCareer(career.map((val) => (val.id === id ? { ...val, form: !val.form } : val)));
  };

  const handleCareerInput = (e) => {
    const { target } = e;
    const id = e.target.parentElement.parentElement.parentElement.dataset.value;
    const value = target.value;
    const name = target.name;
    setCareer(career.map((val) => (val.id === id ? { ...val, [name]: [value] } : val)));
  };

  const deleteCareer = (e) => {
    const { target } = e;
    const id = target.dataset.value;
    setCareer(career.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header>CV Creator</header>
      <h2>General Information</h2>
      <General
        onGeneralSubmit={onGeneralSubmit}
        switchGeneral={switchGeneral}
        handleGeneralInput={handleGeneralInput}
        generalForm={generalForm}
        name={general.name}
        email={general.email}
        phone={general.phone}
      />
      <h2>Education</h2>
      <Education
        addEducation={addEducation}
        switchEducation={switchEducation}
        handleEducationInput={handleEducationInput}
        deleteEducation={deleteEducation}
        education={education}
      />
      <h2>Career</h2>
      <Career
        addCareer={addCareer}
        switchCareer={switchCareer}
        handleCareerInput={handleCareerInput}
        deleteCareer={deleteCareer}
        career={career}
      />
    </div>
  );
};

export default App;
