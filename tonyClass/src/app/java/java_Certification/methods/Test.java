package app.java.java_certification.methods;

public class Test {
  String name;
  int age;

  Test(String name) {
    this.name = name;
  }

  void Test(String name, int age) { // Line 1
    this.name = name;
    this.age = age;
  }

  static public void main(String[] args) {
   // Test a = new Test(); // Line 2 erro pois não existe construtor vazio
    Test b = new Test("Mary"); // Line 3
  //  Test c = new Test("Mary", 25); // Line 4 error pois não existe construtor com 2 parametros, existe 1 Metodo com
                                   // o mesmo NOME, mas nãom é construtor.
    b.Test("Mary", 25); // Line 5
  }







}
