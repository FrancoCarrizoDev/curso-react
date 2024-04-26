export default function LoginForm({
  formData,
  errors,
  validateForm,
  onChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm && validateForm(formData);
  };

  return (
    <form>
      <label>Username</label>
      <br />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={onChange}
      />
      <br />
      {errors.username && <p>{errors.username}</p>}
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
      />
      <br />
      {errors.password && <p>{errors.password}</p>}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
