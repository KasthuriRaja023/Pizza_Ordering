//import react from "react";
//import ReactDOM from "react-dom";
import { useState } from "react";

export default function APP() {
  //function order() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [pepproni, setPepproni] = useState("");
  const [GlutenFree, setGlutenFree] = useState("");
  const [quantity, setQuantity] = useState("");
  const [instruction, setInstruction] = useState("");
  function order() {
    const sam = `<h2>Order for ${quantity} ${size} pizza(s) that are ${
      pepproni ? `HAVE PEPPRONI` : `NOT HAVE PEPPRONI `
    } 
 ${GlutenFree ? `HAVE GLUTENFREE` : `NOT HAVE GLUTENFREE`}
 for ${name}</h2>
                <h1>Instructions: ${instruction}</h1>`;
    document.getElementById("root").innerHTML = sam;
  }

  return (
    <form>
      <img width="400px" src="https://wallpaperaccess.com/full/462773.jpg" />
      <h1>Enjoy Your Pizza !</h1>
      <label>
        Name:
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div>
        <label>
          Size:
          <select id="size" onChange={(e) => setSize(e.target.value)}>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Pepproni:
          <input
            type="checkbox"
            id="pepproni"
            onChange={(e) => setPepproni(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Gluten Free:
          <input
            type="checkbox"
            id="GlutenFree"
            onChange={(e) => setGlutenFree(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <label for="quantity"></label>
          <input
            type="number"
            id="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <p>Additional instructions:</p>
          <textarea
            id="text"
            onChange={(e) => setInstruction(e.target.value)}
          ></textarea>
        </label>
      </div>
      <button onClick={order} disabled={!name,!quantity,!instruction}>
        Submit
      </button>
    </form>
  );
}