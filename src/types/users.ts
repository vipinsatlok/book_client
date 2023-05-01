export interface UserList {
  _id: string;
}

export interface IUserParams {
    params: {
      userId: string;
    };
  }

export interface IUser {
  _id: string;
  name: string;
  number: string;
  password: string;
  gyanGanga: number;
  jeeneKiRah: number;
  total: number;
}
