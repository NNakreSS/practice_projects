void main() {
  int a = 10;
  int b = 5;
  int c = 8;

  print(calculate(a,b,c));
} // [(a-b)*c/(a+b) ]*(a*b*c)

num calculate(int a, int b,int c){
  int difference = a - b;
  int sum = a + b;
  int product = a * b * c;
  return (difference*c/sum) * product;
}