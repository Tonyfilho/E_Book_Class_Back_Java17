package app.java.java_certification.mergeFunction;

import java.util.LinkedHashMap;
import java.util.Map;

public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new LinkedHashMap<>();
        map.put("Ralph", 55);

        map.merge("Ralph", 1, Test::mergeFunction);  // Line 1
        map.merge("Ros", 56, Test::mergeFunction);  // Line 2
        System.out.println(map);

    }

    static Integer mergeFunction(Integer i1, Integer i2) {
        if (i2 < 55) return null;
        return i1 + i2;  // Line 3
    }
}
