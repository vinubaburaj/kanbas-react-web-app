import * as service from "./service";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);

  const fetchAccount = async () => {
    const account = await service.account();
    setAccount(account);
  };

  const findUserById = async (id) => {
    const user = await service.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await service.signout();
    navigate("/Kanbas/signin");
  };

  const handleSave = async () => {
    await service.updateUser(account);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="w-100">
      <h1>Account</h1>
      {account && (
        <div className="mt-4">
          <div className="row mt-2">
            <div className="col-2">Password:</div>
            <div className="col-4">
              <input
                type="text"
                id="account-passowrd"
                className="form-control "
                value={account.password}
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-2">FirstName:</div>
            <div className="col-4">
              <input
                className="form-control"
                value={account.firstName}
                onChange={(e) =>
                  setAccount({ ...account, firstName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-2">LastName: :</div>
            <div className="col-4">
              <input
                className="form-control"
                value={account.lastName}
                onChange={(e) =>
                  setAccount({ ...account, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-2">DOB: :</div>
            <div className="col-4">
              <input
                className="form-control"
                value={account.dob}
                onChange={(e) =>
                  setAccount({ ...account, dob: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-2">Email::</div>
            <div className="col-4">
              <input
                className="form-control"
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-2">Role: </div>
            <div className="col-4">
              <select
                className="form-select"
                onChange={(e) =>
                  setAccount({ ...account, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSave}>
            {" "}
            Save{" "}
          </button>
          <br />
          <button className="btn btn-danger mt-2" onClick={signout}>
            Signout
          </button>
          {account.role === "ADMIN" && (
            <div>
              <Link
                to="/Kanbas/admin/users"
                className="mt-2 btn btn-warning w-40"
              >
                Show All Users
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Account;
