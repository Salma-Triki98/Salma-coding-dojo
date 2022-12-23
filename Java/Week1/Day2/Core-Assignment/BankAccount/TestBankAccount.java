public class TestBankAccount{
    public static void main(String[] args){

        BankAccount newAccount = new BankAccount();

        System.out.println(newAccount.getNumberOfAccount());
        System.out.println(newAccount.deposit(100, true));
        System.out.println(newAccount.withdraw(10, true));
         System.out.println(newAccount.totalBalance());

    }
}