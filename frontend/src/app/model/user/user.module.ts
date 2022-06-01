export class UserModule {
  constructor (
    public userId: number,
    public firstName: string,
    public lastName: string,
    public hash: string,
    public email: string,
    public securityQuestion: string,
    public securityAnswer: string,
    public image: string,
  ) { }
}
