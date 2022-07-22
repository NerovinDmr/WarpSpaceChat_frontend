export type User={
    id:string,
    name:string,
    imageUrl: string | null,
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
  export interface Usertype{
    items:User[],
    status: Status;
    isAuth:boolean
  }