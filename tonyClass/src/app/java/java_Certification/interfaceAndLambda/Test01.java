package app.java.java_certification.interfaceAndLambda;

interface Functionable {

    int performFunction(String s, int i1, Integer i2);

    public String toString();
}

public class Test01 {
    public static void main(String[] args) {
        Functionable lambdaA = (s, i, j) -> 1;  // Lambda A

        Functionable lambdaB = (String s, int i, int j) -> 1;  // Lambda B

        Functionable lambdaC = (var s, var i, Integer j) -> 1;  // Lambda C

        Functionable lambdaD = (var s, var i, var j) -> 1;  // Lambda D
    }
}
