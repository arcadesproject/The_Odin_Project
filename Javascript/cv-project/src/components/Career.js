function Career(props) {
  const { addCareer, switchCareer, handleCareerInput, deleteCareer, career } = props;

  const careerItems = career.map((val) => (
    <section key={val.id}>
      {val.form ? (
        <form data-value={val.id} onSubmit={switchCareer}>
          <li>
            <label>
              Company:
              <input
                type="text"
                name="company"
                onChange={handleCareerInput}
                value={val.company}></input>
            </label>
          </li>
          <li>
            <label>
              Role:
              <input type="text" name="role" onChange={handleCareerInput} value={val.role}></input>
            </label>
          </li>
          <li>
            <label>
              Date Started:
              <input
                type="date"
                name="jobStart"
                onChange={handleCareerInput}
                value={val.jobStart}></input>
            </label>
          </li>
          <li>
            <label>
              Date Ended:
              <input
                type="date"
                name="jobEnd"
                onChange={handleCareerInput}
                value={val.jobEnd}></input>
            </label>
          </li>
          <li>
            <input name="careerSubmit" type="submit" value="Submit" />
          </li>
        </form>
      ) : (
        <ul>
          <li>Company: {val.company}</li>
          <li>Role: {val.role}</li>
          <li>Date Started: {val.jobStart}</li>
          <li>Date Ended: {val.jobEnd}</li>
          <button onClick={switchCareer} data-value={val.id}>
            Edit
          </button>
          <button onClick={deleteCareer} data-value={val.id}>
            Delete
          </button>
        </ul>
      )}
    </section>
  ));

  return (
    <>
      <section>
        <button onClick={addCareer}>Add Career</button>
        {careerItems}
      </section>
    </>
  );
}

export default Career;
