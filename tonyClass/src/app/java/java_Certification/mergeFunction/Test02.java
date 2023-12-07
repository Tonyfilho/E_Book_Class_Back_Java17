package app.java.java_certification.mergeFunction;

import java.util.LinkedHashSet;
import java.util.List;

public class Test02 {
     public static void main(String[] args) {
        LinkedHashSet<String> set = new LinkedHashSet<>();
        set.addAll(List.of("Dog", "Cat", "Gerbil", "Hamster"));
        System.out.println("01"  + set);
        set.retainAll(List.of("Goat", "Cat", "Hamster"));
        System.out.println("02"  +set);
        set.addAll(List.of("Cat", "Gerbil"));
        System.out.println("03"  +set);
    }
}
