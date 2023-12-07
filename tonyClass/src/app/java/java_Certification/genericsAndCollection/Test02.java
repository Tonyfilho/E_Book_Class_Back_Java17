package app.java.java_certification.genericsAndCollection;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

class Item implements Comparator<Item> {
    private int id;

    Item(int id) {
        this.id = id;
    }

    int compareTo(Item i) {
        return i.id - this.id;
    }

    public int compare(Item o1, Item o2) {
        return o1.id - o2.id;
    }

    public String toString() {
        return "" + id;
    }
}

public class Test02 {
    public static void main(String[] args) {

        List<Item> testData = List.of(
                new Item(20),
                new Item(10),
                new Item(15)
        );
        List<Item> itemList = new ArrayList<>(testData);  // Line 1
        Collections.sort(itemList);     // Line 2

        Set<Item> treeSet = new TreeSet(new Item(0));   // Line 3
        treeSet.addAll(testData);
        Item i1 = treeSet.iterator().next();      // Line 4

        System.out.println(i1);
    }
}
