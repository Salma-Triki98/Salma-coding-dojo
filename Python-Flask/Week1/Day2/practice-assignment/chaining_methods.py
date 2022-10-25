class User:
    def __init__(self,name):
        self.name =name
        self.account_balance = 0
    def make_deposit(self,amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self,amount): 
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f"User : {self.name} , Balance : {self.account_balance}$")
        return self
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        self.display_user_balance()
        other_user.display_user_balance()
        return self

salma = User('salma')
nour = User('nour')
guido = User('guido')
# print(guido.name)

salma.make_deposit(500).make_deposit(500).make_deposit(500).make_withdrawal(175).make_withdrawal(175).make_withdrawal(175).display_user_balance().transfer_money(nour,100)
nour.make_deposit(500).make_deposit(500).make_withdrawal(175).make_withdrawal(175).display_user_balance()
guido.make_deposit(500).make_withdrawal(175).make_withdrawal(175).make_withdrawal(175).display_user_balance()

# salma.make_deposit(500)
# salma.make_deposit(500)
# salma.make_deposit(500)
# nour.make_deposit(500)
# nour.make_deposit(500)
# guido.make_deposit(500)


# # print(guido.account_balance)

# salma.make_withdrawal(175)
# salma.make_withdrawal(175)
# salma.make_withdrawal(175)
# nour.make_withdrawal(175)
# nour.make_withdrawal(175)
# guido.make_withdrawal(175)
# guido.make_withdrawal(175)
# guido.make_withdrawal(175)
# # print(guido.account_balance)


# guido.display_user_balance()
# salma.display_user_balance()
# nour.display_user_balance()

# salma.transfer_money(nour,100)