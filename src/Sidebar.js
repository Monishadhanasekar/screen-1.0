import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import green from "./green.png";
import rose from "./rose.png";
import axios from "axios";
const Sidebar = ({ sidebar, closeSidebar }) => {
  const [segmentname, setSegmentName] = useState("");
  const [val, setVal] = useState([]);

  //Function to add new input field
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  //Function to clear the input field data
  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  //Function to change the input value
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };

  //Function to send the data to the server
  const onSubmit = async (event) => {
    event.preventDefault();
    const url = "https://webhook.site/47700b54-efdb-4dd0-8f06-fceb8b51ef08";
    await axios.post(url, {
      segment_name: segmentname,
      schema: val,
    });
    clearFields(event);
  };

  //delete function
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };

  return (
    <>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <p>
          {" "}
          <BsChevronLeft />
          Saving Segment
        </p>
        <div className="form">
          <form onSubmit={(event) => onSubmit(event)}>
            <div>
              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Enter the Name of the Segment
                </label>
                <br></br>
                <br></br>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name of the segment"
                  onChange={(e) => setSegmentName(e.target.value)}
                ></input>
              </div>

              <br></br>
              <p>
                {" "}
                To save your segment, you need to add the schemas to build the
                query
              </p>
              <div className="icons">
                <img src={green} className="img" alt="green" />- User Traits
                &nbsp;
                <img src={rose} className="img" alt="rose" />- Group Traits
              </div>
              <br></br>
              <br></br>
              {val.map((data, i) => {
                return (
                  <>
                    <div className="container p-1">
                      <select
                        className="custom-select"
                        onChange={(e) => handleChange(e, i)}
                      >
                        <option>Add schema to segment</option>
                        <option value="first_name"> First Name</option>
                        <option value="last_name"> Last Name</option>
                        <option value="gender"> Gender</option>
                        <option value="age"> Age</option>
                        <option value="account_name"> Account Name</option>
                        <option value="city"> City</option>
                        <option value="state"> State</option>
                      </select>
                      &nbsp;&nbsp;
                      <button className="sub" onClick={() => handleDelete(i)}>
                        -
                      </button>
                      <br></br>
                    </div>
                  </>
                );
              })}
              <br></br>
              <div className="add">
                <a
                  href
                  style={{
                    textDecoration: "underline",
                    color: "lightseagreen",
                  }}
                  onClick={() => handleAdd()}
                >
                  + Add new schema
                </a>
              </div>
            </div>
            <div className="footer">
              <button className="btn1">Save the segment</button>&nbsp;&nbsp;
              <button
                className={sidebar ? "btn2" : "backdrop"}
                onClick={closeSidebar}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
