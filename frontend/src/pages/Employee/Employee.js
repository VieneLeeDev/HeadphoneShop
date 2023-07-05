import { useEffect, useState } from "react";
import AddnewEmployee from "../AddnewEmployee/AddnewEmployee";
import axios from "axios";
import { apiGetListEmployees } from "../axios/api";
function Employee() {
  const [isAddNew, setIsAddNew] = useState(false);
  const [reLoad, setReLoad] = useState(false);
  const [employess, setEmployess] = useState([]);
  const [dataUpdate, setDataUpdate] = useState([]);

  const reloadPage = () => {
    setReLoad(!reLoad);
  };

  useEffect(() => {
    axios
      .get(apiGetListEmployees)
      .then((response) => {
        // Xử lý dữ liệu trả về từ API ở đây
        setEmployess(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error(error);
      });
  }, [reLoad, dataUpdate]);
  const handleAddnew = () => {
    setIsAddNew(!isAddNew);
  };
  //DELETE EMPLOYEE
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${apiGetListEmployees}/${id}`);
      reloadPage();
    } catch (error) {
      console.log(error);
    }
  };

  // GET ITEM NEED TO UPDATE
  const getEmployee = (id) => {
    try {
      const filterId = employess.filter((person) => person.id === id);
      setDataUpdate(filterId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isAddNew ? (
        <AddnewEmployee onClick={handleAddnew} valueUpdate={dataUpdate} />
      ) : (
        <div className="px-5 py-3 ">
          <div className="d-flex justify-content-center">
            <h3>Employee list</h3>
          </div>
          <button onClick={handleAddnew} className="btn btn-success">
            <span className="ms-1 d-none d-sm-inline">Add Employee</span>
          </button>
          <div className="mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Avatar</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employess.map((person, index) => {
                  return (
                    <tr key={index}>
                      <td> {person.firstName}</td>
                      <td> {person.lastName}</td>
                      <td>
                        {" "}
                        <img
                          className="img_employes"
                          src={person.avatar}
                          alt=""
                        />
                      </td>
                      <td> {person.email}</td>
                      <td> {person.department}</td>
                      <td> {person.gender}</td>
                      <td>{person.phoneNumber}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => {
                            getEmployee(person.id);
                          }}
                        >
                          edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm me-2"
                          onClick={() => deleteEmployee(person.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
export default Employee;
