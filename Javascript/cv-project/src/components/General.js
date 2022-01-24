function General(props) {
  const { onGeneralSubmit, switchGeneral, handleGeneralInput, generalForm, name, email, phone } =
    props;
  return (
    <>
      {generalForm ? (
        <form data-title="generalSubmit" onSubmit={onGeneralSubmit}>
          <li>
            <label>Name:</label>
            <input name="name" type="text" onChange={handleGeneralInput} value={name}></input>
          </li>
          <li>
            <label>Email:</label>
            <input name="email" type="email" onChange={handleGeneralInput} value={email}></input>
          </li>
          <li>
            <label>Phone no.:</label>
            <input name="phone" type="tel" onChange={handleGeneralInput} value={phone}></input>
          </li>
          <input name="generalSubmit" type="submit" value="Submit" />
        </form>
      ) : (
        <ul>
          <section>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>Phone no.: {phone}</li>
            <section>
              <button onClick={switchGeneral}>Edit</button>
            </section>
          </section>
        </ul>
      )}
    </>
  );
}

export default General;
