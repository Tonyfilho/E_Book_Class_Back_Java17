package app.java.java_Certification;

public  class  Scope {

  static String type = "this";
  public static void main(String[] args) {
    String s = (args.length > 0) ? "switch" : "";
    System.out.println("Arg.Length: " + args.length);
    String caseVal = (args.length > 1) ? args[1] : "";
    System.out.println("Arg.Length: " + args.length);
    System.out.println("Var S: " + s);

    if (s == "switch") {
        String type;  // Line 1
        switch (caseVal) {

            case "this":
                type = "that";
                break;
            case "that":
                type = "this";
                break;
            case "other":
            default:
                type = "somethingelse";
        }
        if (type=="that") type="this";  //Line 2

    }
    System.out.println("this is " + type);  //Line 3
}
}
