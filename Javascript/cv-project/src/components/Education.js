function Education(props) {
  const { switchEducation, addEducation, handleEducationInput, deleteEducation, education } = props;

  const educationItems = education.map((val) => (
    <section key={val.id}>
      {val.form ? (
        <form data-value={val.id} onSubmit={switchEducation}>
          <li>
            <label>School: </label>
            <input
              type="text"
              name="school"
              onChange={handleEducationInput}
              value={val.school}></input>
          </li>
          <li>
            <label>Subject: </label>
            <input
              type="text"
              name="subject"
              onChange={handleEducationInput}
              value={val.subject}></input>
          </li>
          <li>
            <label>Date Started:</label>
            <input
              type="date"
              name="educationStart"
              onChange={handleEducationInput}
              value={val.educationStart}></input>
          </li>
          <li>
            <label>Date Completed:</label>
            <input
              type="date"
              name="educationEnd"
              onChange={handleEducationInput}
              value={val.educationEnd}></input>
          </li>
          <li>
            <input name="educationSubmit" type="submit" value="Submit" />
          </li>
        </form>
      ) : (
        <ul>
          <li>School: {val.school}</li>
          <li>Subject: {val.subject}</li>
          <li>Date Started: {val.educationStart}</li>
          <li>Date Completed: {val.educationEnd}</li>
          <button onClick={switchEducation} data-value={val.id}>
            Edit
          </button>
          <button onClick={deleteEducation} data-value={val.id}>
            Delete
          </button>
        </ul>
      )}
    </section>
  ));

  return (
    <>
      <section>
        <button onClick={addEducation}>Add Education</button>
        {educationItems}
      </section>
    </>
  );
}

export default Education;
