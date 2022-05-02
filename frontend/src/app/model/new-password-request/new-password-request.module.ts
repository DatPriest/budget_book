export class NewPasswordRequestModule {
  constructor (
    public email: string,
    public hash: string,
    public securityQuestion: string,
    public securityAnswer: string,
  ) { }
}
