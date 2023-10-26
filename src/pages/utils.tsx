import { UserList } from "./types";
import { UserListResponse } from "../api/types";

export const filteredUserData = (): UserList => {
  const storedData: string = localStorage.getItem("userData") ?? "{}";
  const convertedUserData: UserListResponse = JSON.parse(storedData ?? "{}");

  const filteredData = {
    name: "",
    email: "",
  };

  convertedUserData?.results.map((item) => {
    const name: string = `${item.name.title} ${item.name.first} ${item.name.last}`;
    const email: string = item.email;

    const userData = {
      name: name,
      email: email,
    };

    Object.assign(filteredData, userData);
  });

  return filteredData;
};
