import java.util.ArrayList;

class classData {
  ArrayList<Observer> observers = new ArrayList<>();
  
  public void registerObserver(Observer observer){
    observers.add(observer);
  }

  public void removeObserver(Observer observer){
    observers.remove(observer);
  }
  
  public void measuredChanged(String courseNo, String topic, String teacher, String time){
    for(Observer observer: observers){
      observer.update(courseNo, topic, teacher, time);
    }
  }
}
