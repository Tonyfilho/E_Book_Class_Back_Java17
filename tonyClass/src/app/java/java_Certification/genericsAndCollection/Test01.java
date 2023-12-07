package app.java.java_certification.genericsAndCollection;

import java.util.ArrayList;
import java.util.List;

public class Test01 {

      public List getListA() {
        List<? extends Number> list = new ArrayList<>();

        list.add(10);
        return list;
    }

    public List getListB() {
        List<? super Number> list = new ArrayList<>();
        list.add(10);
        return list;
    }

    public List getListC() {
        List<?> list = new ArrayList<>();
        list.add(10, "f");
        return list;
    }

    public List getListD() {
        List<Long> list = new ArrayList<Long>();
        list.add(10);
        return list;
    }

    public List getListE() {
        List<Number> list = new ArrayList<Integer>();
        list.add(10);
        return list;
    }

}
