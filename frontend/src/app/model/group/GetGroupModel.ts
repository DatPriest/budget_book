export class GetGroupModel{
  constructor (
    public groupId: number,
    public groupName: string,
    public image: string,
    public inviteCode: string
  ) { }
}
