export class UpdatePasswordModule {
  constructor (
    public userId: number,
    public oldPassword: string,
    public newPassword: string
  ) { }
}
