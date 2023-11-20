package app.java.java_certification.arrays;

import java.util.Arrays;

public class ArraysClass {
  String[] stringArray = new String[10];
  Object a3 = new String("testing"), b3 = new Object();   // Line 3
  //Object a2 = b2 = new Object();

  public static void main(String[] args) {
    int[] aArray = new int[3];
    Integer[] bArray = new Integer[3];
    aArray[2] = 1;
    bArray[0] = 1; // Line 1

    // bArray.add(1, 0)

    for (int a : aArray) {
      System.out.print(a + " ");
    }
    System.out.println(" ");
   // for (int b : bArray) { // Line 2
    //  System.out.print(b + " "); // Line 3
   // }

    int[][] spreadsheet = new int[3][];
    spreadsheet[0] = new int[3];
    spreadsheet[1] = new int[] { 1, 2, 3 }; // Line 1
    System.out.println("linha 27 " + Arrays.deepToString(spreadsheet)); // Line 2

  }
}
