package app.java.java_certification.methods.createAndUsingMethods;


/*
Learn Programming Academy's Java 1Z0-815 Certification Exam Course
Section 7: Creating and Using Methods
Topic: Create Methods and Constructors
Sub-Topic: Why create a private constructor
*/

class OnlyClass {

    // private constructor, the ONLY constructor
    private OnlyClass() {
    }

    private int classVariable;

    // instances can only be created within current class
    // or a nested class
    private static final OnlyClass instance = new OnlyClass();

    // You can expose the only instance via a static method
    public static OnlyClass getInstance() {
        return instance;
    }

    // Or you can make static methods which call methods on the
    // protected instance
    public static void doSomething() {
        instance.doSomethingRestricted();
        
    }

    private void doSomethingRestricted() {
        this.classVariable++;
        System.out.println("Only one instance of this class exists" +
                " or will ever exist");
    }
}

public class RestrictedObjects {
    public static void main(String[] args) {
        OnlyClass.doSomething();
    }
}
