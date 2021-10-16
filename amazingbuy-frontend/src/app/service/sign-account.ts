import { Account } from "./account";
export class SignAccount {
    signedAccount!:Account;

    setSignedAccount(account:Account) {
        this.signedAccount = account;
    }

    logout(){
       // this.signedAccount = null;
    }
}
