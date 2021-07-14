public abstract class Observer {
  protected String courseNo;
  protected String topicName;
  protected String teacher;
  protected String time;
  
  
  public void update(String courseNo, String time, String topicName, String teacher){
    this.courseNo = courseNo;
    this.topicName = topicName;
    this.teacher = teacher;
    this.time = time;
    display();
  };
  
   protected String getDate(String sign){
    char day1 = time.toCharArray()[0];
    char day2 = time.toCharArray()[1];
    char month1 = time.toCharArray()[3];
    char month2 = time.toCharArray()[4];
    char year1 = time.toCharArray()[6];
    char year2 = time.toCharArray()[7];
    char year3 = time.toCharArray()[8];
    char year4 = time.toCharArray()[9];
    
    char[] arrayDay = {day1, day2};
    char[] arrayMonth = {month1, month2};
    char[] arrayYear = {year1, year2, year3, year4};
    
    String day = String.valueOf(arrayDay);
    String month = String.valueOf(arrayMonth);
    String year = String.valueOf(arrayYear);
    
    String retString = day+sign+month+sign+year;
    
    return retString;    
  };
  
  protected String getTime(boolean isTwelveHour){
    char hour1 = time.toCharArray()[12];
    char hour2 = time.toCharArray()[13];
    
    char[] array = {hour1, hour2};
    String hour = String.valueOf(array);
    int hourInt = Integer.parseInt(hour);
    String AM_PM = getAM_PM(hourInt);
    
    if(isTwelveHour){
      hourInt -= 12;
    }
    String hourStr = String.valueOf(hourInt);
    
    
    String minute = getMinute();
    String retString = hourStr+":"+minute+" "+AM_PM;
    
    return retString;    
  };
  
  private String getAM_PM(int passed12){
    String  getAM_PM;
    if(passed12 >= 12){
       getAM_PM = "PM";
    } else {
      getAM_PM = "AM";
    }
    
    return getAM_PM;
  };
  
  protected String getMinute(){
    char min1 = time.toCharArray()[15];
    char min2 = time.toCharArray()[16];
        
    char[] arrayMinute = {min1, min2};
    
    String minute = String.valueOf(arrayMinute);
    
    return minute;
  };
  
   protected abstract void display();
}
