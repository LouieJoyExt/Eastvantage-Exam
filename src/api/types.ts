interface UserListResultDobTypes {
  age: number;
  date: string;
}

interface UserListResultIdTypes {
  name: string;
  value: string;
}

interface UserLocationStreetTypes {
  name: string;
  number: number;
}

interface UserLocationTypes {
  city: string;
  country: string;
  postcode: number;
  state: string;
  street: UserLocationStreetTypes;
}

interface UserNameTypes {
  first: string;
  last: string;
  title?: string;
}

interface UserListResultTypes {
  cell?: string;
  dob?: UserListResultDobTypes;
  email: string;
  gender: string;
  id?: UserListResultIdTypes;
  location?: UserLocationTypes;
  name: UserNameTypes;
}

export interface UserListResponse {
  results: UserListResultTypes[];
}
