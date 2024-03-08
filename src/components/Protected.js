import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const userID = localStorage.getItem("userID");

  if (!userID) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}
export default Protected;
