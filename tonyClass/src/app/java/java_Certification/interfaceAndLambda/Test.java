package app.java.java_certification.interfaceAndLambda;

interface Changeable {
    int giveChange(int chg);

    default int giveChange(short chg) {  // Line 1
        return (int) (100 - chg);
    }

    static int giveChange(long chg) {   // Line 2
        return 99;
    }
}

public class Test {
    public static void main(String[] args) {
        Changeable changeable = chg -> chg - 6;  // Line 3
        int result = changeable.giveChange(Changeable.giveChange(100L)); // Line 4
        System.out.println(result);
    }

}
