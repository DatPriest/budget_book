export class NewPasswordModule {
  constructor (
    public userId: number,
    public hash: string,
    public securityQuestionKey: string,
    public securityAnswer: string,
  ) { }
}
