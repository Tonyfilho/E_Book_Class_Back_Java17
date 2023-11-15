package app.java.java_certification.string;

public class String_Manipulating_Immutable {



    static String s;
    public static void main(String[] args) {

       String s;
       boolean isOk=true;
       if (isOk) s = String_Manipulating_Immutable.s+"";  // Line 1
       else s="";
       s.concat("Hello ");  // Line 2
       s.concat("World");
       s.toUpperCase();
       System.out.println("s = "+s);

    }
}

