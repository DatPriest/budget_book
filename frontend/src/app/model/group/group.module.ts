export class GroupModule {
  constructor (
    public id: number,
    public groupName: string,
    public image: string,
    public inviteCode: string,
    public viewPosition: number
  ) { }
}
