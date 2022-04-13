export class User {
  constructor (
    public firstName: string,
    public lastName: string,
    public password: string,
    public email: string,
    public securityQuestion: string,
    public securityAnswer: string
  ) { }
}
