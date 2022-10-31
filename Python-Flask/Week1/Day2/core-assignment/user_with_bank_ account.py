class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance>=amount:
            self.balance -=amount
        else:
            print ("Insufficient funds: Charging a $5 fee")
            self.balance-= 5
        return self
    def display_account_info(self):
        print(f'Balance: {self.balance}')
        return self
    def yield_interest(self):
        if self.balance>0:
            self.balance+=self.balance*self.int_rate
        return self

Current_account=BankAccount(0.02)
saving_account=BankAccount(0.04)


Current_account.deposit(500).deposit(150).deposit(88).withdraw(128).display_account_info()
saving_account.deposit(500).deposit(10000).withdraw(88).withdraw(128).withdraw(200).withdraw(128).yield_interest().display_account_info()

class User:
    def __init__(self,name):
        self.name =name
        self.account_balance = BankAccount(int_rate=0.05, balance=100)
    def make_deposit(self,amount):
        self.account_balance.deposit(amount)
        print (self.account_balance.balance)
        return self
    def make_withdrawal(self,amount): 
        self.account_balance.withdraw(amount) 
        print (self.account_balance.balance)
        return self
    def display_user_balance(self):
        print(f"User : {self.name} , Balance : {self.account_balance.balance}$")
        return self

salma = User('salma')
salma.make_deposit(100).make_withdrawal(50).display_user_balance()