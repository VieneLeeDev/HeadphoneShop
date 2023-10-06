import { useState } from "react";
import axios from "axios";
import { apiGetListEmployees } from "../../axios/api";
function ModalUpdateEmployee({ dataUpdate, onClick }) {
  const [newData, setNewData] = useState(dataUpdate);
  const updateEmployee = async () => {
    try {
      await axios.put(`${apiGetListEmployees}/${newData.id}`, newData);
      onClick.setModalEdit(false);
      onClick.reloadPage();
    } catch (error) {
      console.log(error);
    }
    console.log(newData);
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
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          placeholder={`${dataUpdate.firstName}`}
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
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
                          className="form-control form-control-lg"
                          placeholder={`${dataUpdate.lastName}`}
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              lastName: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className=" mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>
                      <div className="form-check form-check-inline w-full">
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
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              gender: e.target.value,
                            }))
                          }
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
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              gender: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="form-check form-check-inline">
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Other
                        </label>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="maleGender"
                          value="Orther"
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              gender: e.target.value,
                            }))
                          }
                        />
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
                          placeholder={`${dataUpdate.email}`}
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
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
                          placeholder={`${dataUpdate.phoneNumber}`}
                          onChange={(e) =>
                            setNewData((prev) => ({
                              ...prev,
                              phoneNumber: e.target.value,
                            }))
                          }
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
                            placeholder={`${dataUpdate.avatar}`}
                            onChange={(e) =>
                              setNewData((prev) => ({
                                ...prev,
                                avatar: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container d-flex justify-content-between mt-4 pt-2 w-100">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      onClick={updateEmployee}
                    >
                      Submit
                    </button>

                    <button className="btn btn-success btn-lg ml-20">
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
export default ModalUpdateEmployee;
