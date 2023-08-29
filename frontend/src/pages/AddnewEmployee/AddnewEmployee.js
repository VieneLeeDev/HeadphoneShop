import { useEffect, useState } from "react";
import { apiGetListEmployees } from "../../axios/api";
import axios from "axios";
function AddnewEmployee({ onClick, valueUpdate }) {
  const [employeePicked, setEmployeePicked] = useState({});
  const [formValue, setFormValue] = useState({
    firstName: "",
    avatar: "",
    lastName: "",
    department: "",
    gender: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiGetListEmployees, formValue);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };
  //handle change input
  const handleChange = (e) => {
    const { id, value, name } = e.target;
    if (name === "gender") {
      setFormValue({
        ...formValue,
        gender: value,
      });
    } else if (name === "avatar") {
      setFormValue({
        ...formValue,
        avatar: "value",
      });
    } else {
      setFormValue({ ...formValue, [id]: value });
    }
  };

  // handle close form
  const handleClose = () => {
    setEmployeePicked('');
    onClick();
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }} //
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                  Infomation Employee
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <label htmlFor="department" className="form-label">
                          Department
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="department"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>
                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="femaleGender"
                        >
                          Female
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="femaleGender"
                          value="female"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="maleGender"
                          value="Male"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="otherGender"
                          value="Other"
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 form-control">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="avatar">
                          Link Avatar
                        </label>
                        <div id="avatar" className="form-outline">
                          <input
                            className="form-control"
                            type="text"
                            name="avatar"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container d-flex justify-content-between mt-4 pt-2 w-100">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Submit
                    </button>

                    <button
                      onClick={handleClose}
                      className="btn btn-success btn-lg ml-20"
                    >
                      {" "}
                      Close{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddnewEmployee;
