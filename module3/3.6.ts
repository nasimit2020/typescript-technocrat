{
  // getter & setter
  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }

    // getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(222, "Mr. Gorip", 50);

  goribManusherAccount.deposit = 100;

  const myBalance = goribManusherAccount.balance;

  console.log(myBalance);

  //
}
