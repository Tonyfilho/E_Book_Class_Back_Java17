import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.BinaryOperator;

public class Main2 {

  public static void main(String... args) {

    List<String> list = new ArrayList<>(List.of("alpha", "bravo, charlie, delta"));

    var coords = Arrays.asList(
        new double[] { 47.2160, -95.2348 },
        new double[] { 29.1566, -89.2495 },
        new double[] { 35.1556, -90.0659 });
    /** Print using Lambda */
    // coords.forEach((data) -> System.out.println("Coords: " +
    // Arrays.toString(data)));

    /** BiConsulmer Using Lambda Expression to format code */
    BiConsumer<Double, Double> p1 = (lat, lng) -> System.out.printf("[lat:%.3f lon:%.3f]%n", lat, lng);
    var firstPoint = coords.get(0);
    processPoint(firstPoint[0], firstPoint[1], p1);

    /** Lambda expression to use in the place of the Method */
    System.out.println("---------Lambda expression  to use in the place of the Method----------------------");
    coords.forEach(data -> processPoint(data[0], data[1], p1));

    /** Lambda expression to use in the place of the Method */
    System.out.println(
        "---------Lambda expression  to use in the place of the Method and Lambda to print and format----");
    coords.forEach(
        data -> processPoint(data[0], data[1], (lat, lng) -> System.out.printf("[lat:%.3f lon:%.3f]%n", lat, lng)));


    System.out.println("-------------Another Example Lambda-----------------");
    list.removeIf(item -> item.equalsIgnoreCase("bravo"));
    list.forEach(item -> System.out.println(item));

  }// end Static

  /****************** Binsumer****************************************** */
  public static <T> void processPoint(T t1, T t2, BiConsumer<T, T> consumer) {
    consumer.accept(t1, t2);
  }

  public static <T> T calculator(BinaryOperator<T> function, T value1, T value2) {
    T result = function.apply(value1, value2);
  //  System.out.println("Result of operation: " + result);
    return result;
  }
}
