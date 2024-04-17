import "./index.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    "company-name": "Yellow.ai",
    "business-type": "Limited Liability Company(LLC)",
    "industry": "Others"
  });

  const onChangeHandler = (e) => {
    let returnedValue = e.target.value;
    // if (
    //   e.target.name === "have-checking-account" ||
    //   e.target.name === "active-bankruptcy"
    // ) {
    //   returnedValue = returnedValue === "on" ? "Yes" : "No";
    // }
    setFormData({
      ...formData,
      [e.target.name]: returnedValue,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(formData)
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
      <h2 className="form-heading">Company information </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
        <label htmlFor="company-name">Name</label>
          <div className="tf">
            <input
              type="text"
              id="company-name"
              name="company-name"
              value={formData["company-name"]}
              onChange={onChangeHandler}
              required
            />
            <br />
          </div>
        </div>
        <div className="row">
          <label htmlFor="business-type">Business Type</label>
          <div>
            <select
              value={formData["business-type"]}
              className="form-inputs"
              name="current-business-structure"
              onChange={onChangeHandler}
              required
            >
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="Limited Liability Company(LLC)">
                Limited Liability Company(LLC)
              </option>
              <option value="C Corporation">C Corporation</option>
              <option value="S Corporation">S Corporation</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="row">
        <label htmlFor="industry">Industry</label>
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
        {/* <div className="row">
          <label htmlFor="state">State</label>
          <div>
            <select
              value={formData.state}
              className="form-inputs"
              name="state"
              onChange={onChangeHandler}
              required
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div> */}
        {/* <div className="row">
          <label htmlFor="have-checking-account">
            Do you have a business checking account?
          </label>
          <div className="tf">
            <label className="switch">
              <input type="checkbox" name="have-checking-account" onChange={onChangeHandler} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="row">
          <label htmlFor="active-bankruptcy">
            Are you currently in an active bankruptcy?
          </label>
          <div className="tf">
            <label className="switch">
              <input type="checkbox" name="active-bankruptcy" onChange={onChangeHandler} />
              <span className="slider round"></span>
            </label>
          </div>
        </div> */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default App;
