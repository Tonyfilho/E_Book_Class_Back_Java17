package app.java.java_certification.staticFields;

class TestStatic {
  static String name = "Mary";

  public static String getName() {
    return name;
  }
}

public class Test01 {

  public static void main(String[] args) {
    TestStatic t0 = new TestStatic();
    TestStatic t1 = null;

    // * Insert code here *//
    System.out.println(t0.name);
    System.out.println(t0.getName());
    System.out.println(TestStatic.name);
    System.out.println(TestStatic.getName());
    System.out.println(t1.name);
    System.out.println(t1.getName());

  }

  /**
   * Which of the lines when inserted in the space specified will cause a compiler
   * error?
   *
   * A. System.out.println(t0.name);
   *
   * B. System.out.println(t0.getName());
   *
   * C. System.out.println(TestStatic.name);
   *
   * D. System.out.println(TestStatic.getName());
   *
   * E. System.out.println(t1.name);
   *
   * F. System.out.println(t1.getName());
   *
   * G. Both E and F
   *
   * H. A, B, E and F
   *
   * I. None of the above
   */
}
