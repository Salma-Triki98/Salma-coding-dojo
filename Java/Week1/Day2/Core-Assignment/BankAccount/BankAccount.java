public class BankAccount {


    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccount = 0;
    private static double moneyStoredInAccount = 0.0;
    private long accountsNumber;


    public BankAccount(){
        this.setCheckingBalance(0.0);
        this.setSavingsBalance(0.0);
        this.accountsNumber(123456789);
        numberOfAccount++;

        
    }
    

// Static Methods
 public static int AccountsNumber() {
        return numberOfAccount;
    }


    // Methods
    
    public double deposit(double amount, boolean isSavingAccout){
        if (isSavingAccout == true ) {
            this.setSavingsBalance(getCheckingBalance()+amount) ;
         return this.getSavingsBalance();
        }
        else{
            this.setCheckingBalance(getSavingsBalance()+amount);
        return this.getCheckingBalance();
        }
     
    }

    public double withdraw(double amount, boolean isSavingAccout){
        if (isSavingAccout == false ){
            if(this.getCheckingBalance() >= amount){
                this.setCheckingBalance(this.getCheckingBalance()-amount);}
                else{
                System.out.println("You don't have enough balance");
                }
            }
            
            
        else{
            if(this.getSavingsBalance() >= amount){
                this.setSavingsBalance(this.getSavingsBalance()-amount);
            }
            else{
                System.out.println("You don't have enough balance");
                }

        }
        return this.getSavingsBalance();
    }

    public double totalBalance(){
        this.moneyStoredInAccount = getCheckingBalance() + getSavingsBalance(); 
        return this.moneyStoredInAccount;
    }











// --- GETTERS AND SETTERS ----
    public double getCheckingBalance() {
        return this.checkingBalance;
    }
    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }
    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }
     public long getAccountsNumber() {
        return this.accountsNumber;
    }
    public void setAccountsNumber(long number) {
        this.accountsNumber = number;
    }
    
}