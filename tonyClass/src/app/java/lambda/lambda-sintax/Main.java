import java.util.ArrayList;
import java.util.List;

public class Main {

  public static void main (String ...args) {
       List<String> list = new ArrayList<>(List.of("alpha","bravo, charlie, delta"));

       for(String s: list) {
        System.out.println(s);
       }
       System.out.println("----------------");
       // ---------------- Lambda Expression------------------------------
       list.forEach((l)-> System.out.println(l));

       System.out.println("----------------");
       //----If has 01 Parameter does need to (..)
       list.forEach( myString -> System.out.println(myString));



       System.out.println("----------------");
       list.forEach((var myString) -> {
         char first = myString.charAt((0));
         System.out.println(myString + " means " +first);
        });

        System.out.println("--------Lambda with @FunctionalInterface--------");
        int result = calculator((a, b) -> a + b, 10 , 20);
        System.out.println("Result: " + result);

        System.out.println("--------Lambda with @FunctionalInterface Verbose Typed--------");
        int result2 = calculator((Integer a,Integer b) -> a + b, 10 , 20);
        System.out.println("Result Typed: " + result2);

        System.out.println("--------Lambda with @FunctionalInterface Verbose VAR--------");
        int result3 = calculator((var a, var b) -> a + b, 10 , 20);
        System.out.println("Result VAR: " + result3);

        System.out.println("--------Lambda with @FunctionalInterface Verbose VAR Double--------");
        var result4 = calculator((var a,  var b) -> a / b, 10.0 , 2.5);
        System.out.println("Result VAR: " + result4);

      //  System.out.println("--------Lambda with @FunctionalInterface Verbose Object--------");
      //  var result5 = calculator((var a, var b) -> ((String) a).toUpperCase() + " " + ((String) b).toUpperCase(), "Ralph"  + "Kramden");
      //  System.out.println("Result VAR: " + result5);

      }

      public static <T> T calculator(Operation<T> function, T value1, T value2) {
          T result = function.operate(value1, value2);
          System.out.println("Result of operation: " + result);
          return result;
      }

}
