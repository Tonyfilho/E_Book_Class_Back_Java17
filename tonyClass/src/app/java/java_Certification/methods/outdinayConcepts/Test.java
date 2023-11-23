package app.java.java_certification.methods.outdinayConcepts;

class SuperTest {
 public SuperTest(int a) {}

 // public SuperTest(int a, int b) {}
 protected SuperTest() { }
}

public class Test extends SuperTest {
  int first, second, third;

  public Test(int x, int y) {

    first = x;
    second = y;
  }

  public Test(int x) {
    super(x);
  }



}
