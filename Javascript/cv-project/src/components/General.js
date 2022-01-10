function General(props) {
  const { generalSubmit, name, email, phone, switchGeneral, handleInput } = props;

  return (
    <>
      {generalSubmit ? (
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <section>
            <button
              onClick={(e) => {
                switchGeneral(e);
              }}>
              Edit
            </button>
          </section>
        </ul>
      ) : (
        <form onSubmit={switchGeneral}>
          <ul>
            <li>
              <label>Name:</label>
              <input name="name" type="text" onChange={handleInput} value={name}></input>
            </li>
            <li>
              <label>Email:</label>
              <input name="email" type="email" onChange={handleInput} value={email}></input>
            </li>
            <li>
              <label>Phone:</label>
              <input name="phone" type="tel" onChange={handleInput} value={phone}></input>
            </li>
            <input type="submit" value="Submit"></input>
          </ul>
        </form>
      )}
    </>
  );
}

export default General;
