export class NewPasswordModule {
  constructor (
    public email: string,
    public hash: string,
    public securityQuestionKey: string,
    public securityAnswer: string,
  ) { }
}
