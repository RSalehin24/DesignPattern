public class main {

   public static void main(String[] args) {

      classData classdata = new classData();

      Observer s1 = new studentDisplay();
      classdata.registerObserver(s1);
      classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");

      System.out.println("\n\n");

      Observer s2 = new studentDisplay();
      classdata.registerObserver(s2);
      classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");

      System.out.println("\n\n");

      classdata.removeObserver(s2);
      classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");

      System.out.println("\n\n");

      Observer t1 = new teacherDisplay();
      classdata.registerObserver(t1);
      classdata.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");
   }
}