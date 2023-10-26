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
  }

}
