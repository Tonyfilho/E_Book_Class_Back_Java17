package app.java.java_certification.methods;



public class Test03 {
    String getMyName() {
        return myName;   // Line 1
    }

    static String myName = "Test";

    public static void main(String[] args) {

        try {
            Test03 t1 = new Test03();
            Test03 t2 = null;
            System.out.print('1'+Test03.myName);
            System.out.print('2' +t1.myName);  // Line 2
            System.out.print(" t1" + t1.getMyName());
            System.out.print("4 null "+t2.myName);  // Line 3

            
            System.out.print("5 get"+t2.getMyName());    // Line 4
        } catch (Exception e) {
            System.out.println();
        }
    }
}
