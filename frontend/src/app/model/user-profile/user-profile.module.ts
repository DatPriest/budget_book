export class UserProfileModule {
  constructor (
    public userId: number,
    public lastName: string,
    public firstName: string,
    public email: string,
    public imageString: string,
  ) { }
}
