"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { deleteUser, getAllUsers } from "../../../redux/features/apiRequest";
import { createAxios } from "../../../createInstance";
import "./getAllUser.css";
import { loginSuccess } from "../../../redux/features/authSlices";

const HomePage = () => {
  const user = useSelector((state:any) => state.auth.login?.currentUser);//lay data user trong state redux
  const userList = useSelector((state:any) => state.users.users?.allUsers);
  const msg = useSelector((state:any) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useRouter();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);
  console.log(user);

  const handleDelete = (id:any) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT);
  };

  useEffect(() => {
    if (!user) {
      navigate.push("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${user?.admin ? `Admin` : `User`}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user:any) => {
          return (
            <div key={user._id} className="user-container">
              <div className="home-user">{user.username}</div>
              <div
                className="delete-user"
                onClick={() => handleDelete(user._id)}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="errorMsg">{msg}</div>
    </main>
  );
};

export default HomePage;