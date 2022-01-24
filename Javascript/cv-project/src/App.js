import React, { Component } from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Career from './components/Career';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalForm: false,
      name: '',
      email: '',
      phone: '',
      education: [],
      career: [],
    };
  }

  // Functions for the general section. Update state info / view

  onGeneralSubmit = (e) => {
    e.preventDefault();
    this.switchGeneral();
  };

  switchGeneral = () => {
    this.setState({ generalForm: !this.state.generalForm });
  };

  handleGeneralInput = (e) => {
    const { target } = e;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  // Functions for education section

  addEducation = () => {
    const key = uniqid();
    this.setState({
      education: [
        ...this.state.education,
        {
          form: true,
          id: key,
          school: '',
          subject: '',
          educationStart: '',
          educationEnd: '',
        },
      ],
    });
  };

  switchEducation = (e) => {
    e.preventDefault();
    const id = e.target.dataset.value;
    this.setState((prevState) => ({
      education: prevState.education.map((val) =>
        val.id === id ? { ...val, form: !val.form } : val,
      ),
    }));
  };

  handleEducationInput = (e) => {
    const { target } = e;
    const id = e.target.parentElement.parentElement.dataset.value;
    const value = target.value;
    const name = target.name;
    this.setState((prevState) => ({
      education: prevState.education.map((val) =>
        val.id === id ? { ...val, [name]: [value] } : val,
      ),
    }));
  };

  deleteEducation = (e) => {
    const { target } = e;
    const id = target.dataset.value;
    this.setState((prevState) => ({
      education: prevState.education.filter((item) => item.id !== id),
    }));
  };

  // career functions

  addCareer = () => {
    const key = uniqid();
    this.setState({
      career: [
        ...this.state.career,
        {
          form: true,
          id: key,
          company: '',
          role: '',
          jobStart: '',
          jobEnd: '',
        },
      ],
    });
  };

  switchCareer = (e) => {
    e.preventDefault();
    const id = e.target.dataset.value;
    this.setState((prevState) => ({
      career: prevState.career.map((val) => (val.id === id ? { ...val, form: !val.form } : val)),
    }));
  };

  handleCareerInput = (e) => {
    const { target } = e;
    const id = e.target.parentElement.parentElement.parentElement.dataset.value;
    const value = target.value;
    const name = target.name;
    this.setState((prevState) => ({
      career: prevState.career.map((val) => (val.id === id ? { ...val, [name]: [value] } : val)),
    }));
  };

  deleteCareer = (e) => {
    const { target } = e;
    const id = target.dataset.value;
    this.setState((prevState) => ({
      career: prevState.career.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { generalForm, name, email, phone, education, career } = this.state;

    return (
      <div className="App">
        <header>CV Creator</header>
        <h2>General Information</h2>
        <General
          onGeneralSubmit={this.onGeneralSubmit}
          switchGeneral={this.switchGeneral}
          handleGeneralInput={this.handleGeneralInput}
          generalForm={generalForm}
          name={name}
          email={email}
          phone={phone}
        />
        <h2>Education</h2>
        <Education
          addEducation={this.addEducation}
          switchEducation={this.switchEducation}
          handleEducationInput={this.handleEducationInput}
          deleteEducation={this.deleteEducation}
          education={education}
        />
        <h2>Career</h2>
        <Career
          addCareer={this.addCareer}
          switchCareer={this.switchCareer}
          handleCareerInput={this.handleCareerInput}
          deleteCareer={this.deleteCareer}
          career={career}
        />
      </div>
    );
  }
}

export default App;
