package app.java.java_certification.genericsAndCollection;

import java.util.ArrayList;
import java.util.List;

public class Test {

  public static void main(String[] args) {
    List<Number> list = new ArrayList<Integer>(); // Line 1
    list.add(10L); // Line 2
    list.add(10.0); // Line 3
    list.add(10); // Line 4
    System.out.println(list);
  }
}
