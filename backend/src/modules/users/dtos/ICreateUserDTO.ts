export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  sex: string;
  date_of_birth: Date;
  own_car: boolean;
}
