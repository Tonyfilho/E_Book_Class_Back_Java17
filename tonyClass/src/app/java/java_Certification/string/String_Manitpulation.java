package app.java.java_Certification.string;

public class String_Manitpulation {

  public static void main(String... args) { // Line 1

    String hello = "hello";

    for (var arg : args) { // Line 2
      System.out.println("ArrayArgs: " + args);
      StringBuilder sb = new StringBuilder(arg); // Line 3
      System.out.print(arg.equals(sb) + " "); // Line 4
      System.out.print((hello.equals(arg)) + " "); // Line 5
      System.out.println((hello == arg)); // Line 6

    }
  }
}
