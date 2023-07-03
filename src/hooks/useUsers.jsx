import { useState, useEffect } from "react";
import { getUsers } from "../utils/api/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);
  return { users };
};

export default useUsers;
