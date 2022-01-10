import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
// import Experience from './components/Experience';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalSubmit: true,
      educationSubmit: true,
      experienceSubmit: true,
      name: '',
      email: '',
      phone: '',
      education: [],
      experience: [],
      school: '',
      subject: '',
      educationStart: '',
      educationEnd: '',
      company: '',
      position: '',
      job: '',
      jobStart: '',
      jobEnd: '',
    };
  }

  switchGeneral = () => {
    this.setState({ generalSubmit: !this.state.generalSubmit });
  };

  handleInput = (e) => {
    const { target } = e;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log('test');
  };

  addEducation = () => {
    const key = uniqid();
    this.setState({
      school: '',
      subject: '',
      educationStart: '',
      educationEnd: '',
      education: [
        ...this.state.education,
        {
          id: key,
          school: '',
          subject: '',
          start: '',
          end: '',
          submit: false,
        },
      ],
      educationSubmit: !this.state.educationSubmit,
    });
  };

  onEducationSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const key = target.id;
    const index = this.state.education.findIndex((e) => e.id === key);
    const info = {
      id: key,
      school: target.school.value,
      subject: target.subject.value,
      start: target.start.value,
      end: target.end.value,
      submit: true,
    };
    let temp = [...this.state.education];
    temp.splice(index, 1, info);
    this.setState({
      education: [...temp],
      educationSubmit: !this.state.educationSubmit,
    });
  };

  switchEducation = (e) => {
    const key = e.target.dataset.value;
    this.setState((prevState) => ({
      education: prevState.education.map((e) => (e.id === key ? { ...e, submit: !e.submit } : e)),
      educationSubmit: !this.state.educationSubmit,
    }));
  };

  onRemoveEducation = (e) => {
    const { target } = e;
    const key = target.dataset.value;
    this.setState((prevState) => ({
      education: prevState.education.filter((e) => e.id !== key),
    }));
  };

  render() {
    const { generalSubmit, educationSubmit, experienceSubmit, name, email, phone } = this.state;

    const educationDisplay = this.state.education.map((edu) => {
      return (
        <div key={edu.id} id={edu.id}>
          <Education
            education={edu}
            school={this.state.school}
            subject={this.state.subject}
            start={this.state.educationStart}
            end={this.state.educationEnd}
            submit={edu.submit}
            handleInput={this.handleInput}
            onEducationSubmit={this.onEducationSubmit}
            switchEducation={this.switchEducation}
            remove={this.onRemoveEducation}
            // edTemp={edTemp}
          />
        </div>
      );
    });

    // const experienceDisplay = this.state.experience.map((exp) => {
    //   return <Experience title={exp.title} expTemp={expTemp} />;
    // });

    return (
      <div className="App">
        <header>CV Creator</header>
        <h2>General details</h2>
        <General
          generalSubmit={generalSubmit}
          onGeneralSubmit={this.onGeneralSubmit}
          switchGeneral={this.switchGeneral}
          handleInput={this.handleInput}
          name={name}
          email={email}
          phone={phone}
        />
        <h2>Education</h2>
        {educationSubmit && <button onClick={this.addEducation}>Add</button>}
        {educationDisplay}
        {/* <h2>Experience</h2>
        <Experience experienceSubmit={experienceSubmit} />
        {experienceDisplay} */}
      </div>
    );
  }
}

export default App;
