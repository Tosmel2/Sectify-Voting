export const getUserName = () => {
    const user = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : "";
  
    if (user) {
      return user?.fullname?.split(" ")[0];
    }
  
    return "User";
  };