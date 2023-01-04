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
    <div>
      <div>registration</div>
      <input id="name" type="text" />
      <input id="amount" type="text" />
      <button onClick={register}>go</button>
    </div>
  );
}

export default Registration;
