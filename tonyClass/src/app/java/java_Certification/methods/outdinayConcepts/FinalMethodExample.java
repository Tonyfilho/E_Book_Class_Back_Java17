package app.java.java_certification.methods.outdinayConcepts;

/*
Learn Programming Academy's Java 1Z0-815 Certification Exam Course
Section 7: Creating and Using Methods
Topic: Create Methods and Constructors
Sub-Topic: Final Methods
*/

// Create an abstract class with abstract methods
abstract class WillHaveManySubTypes {

    public abstract void doXYourWay();

    public abstract void doYYourWay();

    // Here we create a final method in an abstract class
    final void doZOnlyOneWay() {
        System.out.println("Z can only be done this way");
    }
}

public class FinalMethodExample extends WillHaveManySubTypes {
    private boolean flag = false;

    public static void main(String[] args) {

        // We instantiate an object and test all the methods
        FinalMethodExample e = new FinalMethodExample();
        e.doXYourWay();
        e.doYYourWay();
        e.doZOnlyOneWay();
        System.out.println(e);
    }

    //Override and implement the abstract class's abstract methods
    public void doXYourWay() {
        System.out.println("Implemented X my way");
    }

    public void doYYourWay() {
        System.out.println("Implemented Y my way");
    }
}
