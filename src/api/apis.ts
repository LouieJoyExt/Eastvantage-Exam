import { UserListResponse } from "./types";

import axios from "axios";

export const getUserList = async (): Promise<UserListResponse> => {
  const userList = await axios.get<UserListResponse>(
    `https://randomuser.me/api`
  );

  return userList.data;
};
