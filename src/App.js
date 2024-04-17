import "./index.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "Vasudev Chatti",
    email: "vasu@yellow.ai",
    phone: "+15715278608"
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    window.parent.postMessage(
      JSON.stringify({
        event_code: "ym-client-event",
        data: JSON.stringify({
          event: {
            code: "userdetails",
            data: formData,
          },
        }),
      }),
      "*"
    );
  };

  return (
    <div className="container">
      <h3 className="form-heading">Contact information</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <label htmlFor="name">Full Name</label>
          <div className="tf">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <div className="row">
        <label htmlFor="phone">Phone number</label>
          <div className="tf">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <div className="row">
        <label htmlFor="name">Email</label>
          <div className="tf">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default App;
