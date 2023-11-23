package app.java.java_certification.modifiers;

import app.java.java_certification.modifiers.pkga.SuperClass;

public class Test extends  SuperClass {  // Line 1
    private String text;   // Line 2
    Test(String text ) {
    //  super();


        setText(text);
          }
    public void setText(String text) { this.text = text; }

    public static void main(String[] args) {
        System.out.println(new Test("text"));  // Line 4
    }
}
