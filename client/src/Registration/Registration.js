import "./Registration.css";

function Registration({ registrationComplete }) {
  async function register() {
    const name = document.getElementById("name").value;
    const amount = parseInt(document.getElementById("amount").value);

    const response = await fetch("http://localhost:8000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, amount }),
    });

    const { iid } = await response.json();
    registrationComplete(iid, name, amount);
  }

  return (
    <div className="Registration">
      <input id="name" type="text" placeholder="Name" />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={register}>Go!</button>
    </div>
  );
}

export default Registration;
