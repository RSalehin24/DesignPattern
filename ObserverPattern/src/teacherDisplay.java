
class  teacherDisplay extends Observer{
  
   protected void display(){ 
     
     String date = getDate(".");
     String time = getTime(false);
     
     System.out.println("Teacher Display\n"+"Course No: "+courseNo+"\nTopic Name: "+topicName+"\nTeacher: "+teacher+"\nTime: "+date+", "+time);
  }
}
