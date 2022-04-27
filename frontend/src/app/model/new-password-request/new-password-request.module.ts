export class NewPasswordRequestModule {
  constructor (
    public email: string,
    public securityQuestion: string,
    public securityAnswer: string,
  ) { }
}
