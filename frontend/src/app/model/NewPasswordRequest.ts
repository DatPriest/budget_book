export class NewPasswordRequest {
  constructor (
    public email: string,
    public securityQuestion: string,
    public securityAnswer: string
  ) { }
}
