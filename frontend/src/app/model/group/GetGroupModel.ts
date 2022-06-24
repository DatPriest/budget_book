export class GetGroupModel{
  constructor (
    public groupId: number,
    public groupName: string,
    public imageString: string,
    public inviteCode: string
  ) { }
}
