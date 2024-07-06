void main() {
  String name = "Serkan Burak Atmaca";
  int age = 22;
  double height = 185.0;
  bool isStudent = false;
  showInfo(name , age , height , isStudent); // Parametre olaraka geçilen kişi bilgilerini konsola yazdırır.
}

void showInfo(String name , int age , double height ,bool isStudent){
  print("Name: $name");
  print("Age: $age");
  print("Height: $height cm");
  if (isStudent){
    print("I am a student");
  }else {
    print("I am not a student");
  }
}