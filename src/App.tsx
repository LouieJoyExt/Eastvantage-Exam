import { useState, useEffect } from "react";

import { getUserList } from "./api/apis";

interface UserList {
  name: string;
  email: string;
}

function App() {
  const [userList, setUserList] = useState<UserList[]>([]);

  useEffect(() => {
    getUserList().then((res) => {
      res.results.map((data) => {
        setUserList([
          ...userList,
          {
            name: `${data.name.title} ${data.name.first} ${data.name.last}`,
            email: data.email,
          },
        ]);
      });
    });
  }, []);

  return (
    <>
      {userList.map((users, key) => {
        return (
          <ul key={key}>
            <li>{users.name}</li>
            <li>{users.email}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
