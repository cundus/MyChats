export interface IBodyRegister {
   username: string;
   email: string;
   password: string;
}

export interface IResponseRegister {}

export interface IBodyLogin {
   email: string;
   password: string;
}

export interface IResponseLogin {
   user: any;
   token: string;
}
