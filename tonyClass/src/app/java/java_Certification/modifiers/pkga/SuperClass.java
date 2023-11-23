package app.java.java_certification.modifiers.pkga;

public class SuperClass {

  String text="hello";
 //protected SuperClass() {} senão por o modificador da erro no compilador por ser de Packages diferentes
  SuperClass() {}
 SuperClass(String text) {}
  protected void setText(String text) { this.text = text; }
  public String toString() {  return text;  }

}
