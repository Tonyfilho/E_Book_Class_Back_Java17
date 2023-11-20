package app.java.java_certification.construtores;



  final static class GreatStuff {  // Line 1
    public final static String APP_NAME = "GreatApp";
    public static int counter = 1;  // Line 2

    public final static int helpfulMethod() {  // Line 3
        return counter++;  // Line 4
    }
}

public class Test {
    public static void main(String[] args) {
        System.out.println(GreatStuff.APP_NAME + " " + GreatStuff.helpfulMethod() + " " + GreatStuff.counter);
    }

}


