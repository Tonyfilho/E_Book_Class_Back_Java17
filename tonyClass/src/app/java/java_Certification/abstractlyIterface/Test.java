package app.java.java_certification.abstractlyIterface;




interface ITest {
    void myMethod();
}
abstract class ATest implements ITest {
    abstract void myMethod(); // Line 1  não pode reduzir a visiabilidade da interface.
}

public class Test extends ATest {
    public static void main(String[] args) {
        Test t = new Test();
        t.myMethod();
    }

    public void myMethod() {   // Line 2
        System.out.println("Success");
    }
}
