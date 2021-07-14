
class studentDisplay extends Observer{
  
  protected void display(){   
   
    String date = getDate("/");
    String time = getTime(true);
    
    System.out.println("Student Display\n"+"Course No: "+courseNo+"\nTopic Name: "+topicName+"\nTeacher: "+teacher+"\nTime: "+date+", "+time);    
  }
  
 
  
}
