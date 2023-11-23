package app.java.java_certification.classes;

import app.java.java_certification.classes.pkgb.Parent;

public class Child extends Parent {
    static String name = "DEF";  // Line 1
    public void printName() { // Line 2
        System.out.println(Parent.name);  // Line 3 por ser outro Package se não por PROTECT ou Public não compila
    }
    public static void main(String[] args) {

        new Child().printName();
    }
}
