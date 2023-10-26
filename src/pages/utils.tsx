import { UserList } from "./types";
import { UserListResponse } from "../api/types";

export const getUserData = (): UserList => {
  const storedData: string =
    localStorage.getItem("userData") ?? '{"results": []}';
  const convertedUserData: UserListResponse = JSON.parse(storedData);

  const filteredData = {
    name: "",
    email: "",
    gender: "",
    cell: "",
    phone: "",
    image: "",
  };

  convertedUserData.results.map((item) => {
    const userData = {
      name: `${item.name.title} ${item.name.first} ${item.name.last}`,
      email: item.email,
      gender: item.gender,
      cell: item.cell,
      phone: item.phone,
      image: item.picture?.large,
    };

    Object.assign(filteredData, userData);
  });

  return filteredData;
};
