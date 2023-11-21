package app.java.java_certification.methods;

  class AppTest {
  static String AppName = "Great";
  final static String goodName = "Good";
  final static String greatName = AppName; // Line 1

  static {
    AppName += " Name"; // Line 2
  }

  final static String badName = AppName; // Line 3

  public class Test04 {

    public static void main(String[] args) {

     //
      System.out.println("sem errors" + AppTest.badName);
      AppTest t = null;
      System.out.println(t.goodName);
      System.out.println(t.greatName);
      System.out.println(t.badName);
    }
  }
}
