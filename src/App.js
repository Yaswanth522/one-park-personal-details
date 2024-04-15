import "./index.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "Jason",
    email: "jason@gmail.com",
    phone: "jason@gmail.com",
    company: "Yellow.ai",
    industry: "Healthcare"
  })

  const onChangeHandler = (e) => {
    console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="tf">
            <input
              type="text"
              id="name"
              name="name"
              value="Jason"
              onChange = {onChangeHandler}
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
              value="jason@gmail.com"
              onChange = {onChangeHandler}
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
              value="+14096731904"
              onChange = {onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <div className="row">
          <br />
          <div className="tf">
            <input
              type="text"
              id="company"
              name="company"
              value="Yellow.ai"
              onChange = {onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <div className="row">
          <label htmlFor="state">State</label>
          <div className="tf">
            <select
              value="Healthcare"
              className="form-inputs"
              name="industry"
              onChange = {onChangeHandler}
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
