function HomeDashboard() {
  return (
    <div>
      <div className="p-3 d-flex justify-content-around">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <h5>total: {`1`}</h5>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employees</h4>
          </div>
          <hr />
          <h5>total: {`1`}</h5>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <h5>total: {`100$`}</h5>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table justify-content-center">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Addmin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default HomeDashboard;
