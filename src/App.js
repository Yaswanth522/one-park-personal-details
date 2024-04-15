import "./index.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "Jason",
    email: "jason@gmail.com",
    phone: "+14096731904",
    company: "Yellow.ai",
    industry: "Healthcare",
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
      <form onSubmit={onSubmitHandler}>
        <div className="row">
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
        <div className="row">
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
          <div className="tf">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="tf">
            <select
              value={formData.industry}
              className="form-inputs"
              name="industry"
              onChange={onChangeHandler}
              required
            >
              <option value="Restaurant">Restaurant</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Construction">Construction</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
