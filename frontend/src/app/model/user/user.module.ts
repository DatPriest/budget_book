export class UserModule {
  constructor (
    public firstName: string,
    public lastName: string,
    public hash: string,
    public email: string,
    public securityQuestion: string,
    public securityAnswer: string,
  ) { }
}
