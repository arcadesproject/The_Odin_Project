function Education(props) {
  const {
    school,
    subject,
    start,
    end,
    handleInput,
    onEducationSubmit,
    switchEducation,
    education,
    remove,
  } = props;

  return (
    <>
      {education.submit ? (
        <ul>
          <li>{education.school}</li>
          <li>{education.subject}</li>
          <li>{education.start}</li>
          <li>{education.end}</li>
          <button onClick={switchEducation} data-value={education.id}>
            Edit
          </button>
          <button onClick={remove} data-value={education.id} data-group="education">
            Delete
          </button>
        </ul>
      ) : (
        <form id={education.id} onSubmit={onEducationSubmit}>
          <ul>
            <li>
              <label>School:</label>
              <input name="school" type="text" onChange={handleInput} value={school}></input>
            </li>
            <li>
              <label>Subject:</label>
              <input name="subject" type="text" onChange={handleInput} value={subject}></input>
            </li>
            <li>
              <label>Start:</label>
              <input name="start" type="date" onChange={handleInput} value={start}></input>
            </li>
            <li>
              <label>End:</label>
              <input name="end" type="date" onChange={handleInput} value={end}></input>
            </li>
            <li>
              <input type="submit" value="Submit"></input>
              <button onClick={switchEducation} data-value={education.id}>
                Cancel
              </button>
            </li>
          </ul>
        </form>
      )}
    </>
  );
}

export default Education;
