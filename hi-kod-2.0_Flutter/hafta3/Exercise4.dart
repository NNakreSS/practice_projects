void main() {
  int charge = 9;
  
  if (charge > 100) {
    print("Telefon uzaydan geldi herhalde !");
  }else if (charge == 100) {
    print("Telefon şarj edildi.");
  }else if (charge < 20 && charge >= 10) {
    print("Telefonunuzu şarj edin.");
  }else {
    print("Kritik batarya seviyesi.");
  }
}