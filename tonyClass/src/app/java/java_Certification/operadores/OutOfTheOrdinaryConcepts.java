package app.java.java_certification.operadores;

public class OutOfTheOrdinaryConcepts {

  public static void main(String[] args) {
    short a = 10;
    short b = 5;
    char c = 3;

    System.out.println(c--);
    System.out.println(b -= c--);
    System.out.println(b);
    a *= b -= c--; // Line 1
    System.out.println(a);

    Object d = a % 3; // Line 2

    String dtype = "short";
    if (d instanceof Integer)
      dtype = "int"; // Line 3
    else if (d instanceof Character)
      dtype = "char";
    else if (d instanceof Long)
      dtype = "long";
    else if (d instanceof Float)
      dtype = "float";
    else if (d instanceof Double)
      dtype = "double";

    System.out.println(dtype + " " + d);

    int i = 0;
    int j = 5;
    int k = 10;

    int loopIterations = 0;

    while ((i++ < j) || (j < --k)) {

      loopIterations++;
    }
    System.out.println("while: " + loopIterations);

    // first set variables back false
    Boolean a1 = false;
    Boolean b1 = false;
    Boolean c1 = false;

    if( (c1 = true) || (a1= true) && ( b1= true));
    System.out.println(a1 +" " + b1 + " " + c1 + " ");

  }

}
