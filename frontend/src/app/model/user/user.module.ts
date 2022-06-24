export class UserModule {
  constructor (
    public userId: number,
    public firstName: string,
    public lastName: string,
    public hash: string,
    public email: string,
    public securityQuestionKey: string,
    public securityAnswer: string,
    public imageString: string,
  ) { }
}
