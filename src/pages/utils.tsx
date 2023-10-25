import { UserList } from "./types";
import { UserListResponse } from "../api/types";

export const filteredUserData = (): UserList => {
  const storedData: string = localStorage.getItem("userData") ?? "";
  const convertedUserData: UserListResponse = JSON.parse(storedData ?? "");

  const filteredData = {
    name: "",
    email: "",
  };

  convertedUserData.results.map((data) => {
    const name: string = `${data.name.title} ${data.name.first} ${data.name.last}`;
    const email: string = data.email;

    const userData = {
      name: name,
      email: email,
    };

    Object.assign(filteredData, userData);
  });

  return filteredData;
};
