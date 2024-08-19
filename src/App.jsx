import { useState } from "react"; 
function App() {
  
  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert( `Tu pedido fue guardado como: ${JSON.stringify(inputs)}`);
    console.log(inputs);
  } 
  
  return (
    <div className="container mt-5">
          <h3>Floreria Rojas</h3>
      <div className="row">
        <div className="col-1">
          <form onSubmit={handleSubmit}>
      <label>Cliente:
      <input
        type="text"
        name="nombre"
        value={inputs.nombre || ""}
        onChange={handleChange}
        />
      <label>Tipo de ramo:
      <input
        type="text"
        name="tiporamo"
        value={inputs.tiporamo || ""}
        onChange={handleChange}
        />
      </label>
      </label>
      <label>Precio:
        <input
          type="number"
          name="precio"
          value={inputs.precio || ""}
          onChange={handleChange}
      />
      </label>
      <label>Direccion de envio:
        <input
          type="text"
          name="direccion"
          value={inputs.direccion || ""}
          onChange={handleChange}
      />
      </label>
      <button className="btn btn-dark btn-block" type="submit">Pedir</button>
    </form>          
        </div>
      </div>
    </div>
        );
      }
      
      export default App;