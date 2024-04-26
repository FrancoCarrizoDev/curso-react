export default function UserForm({ formData, errors, validateForm, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm && validateForm(formData);
  };

  return (
    <form>
      <label>Nombre</label>
      <br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
      <br />
      {errors.name && <p>{errors.name}</p>}
      <br />
      <label>Apellido</label>
      <br />
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={onChange}
      />
      <br />
      {errors.lastname && <p>{errors.lastname}</p>}
      <br />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}
