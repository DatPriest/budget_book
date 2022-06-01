export class GroupInviteModule {
  constructor(
    public groupId: number,
    public inviteCode: string,
    public valid: boolean
  ) { }
}
