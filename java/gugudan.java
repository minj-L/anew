import java.util.Scanner;

public class gugudan {
  public static void main(String[] args){
    int num;
    Scanner sc = new Scanner(System.in);
    while(true){
      System.out.print("출력할 구구단을 선택하세요 : ");
      num = sc.nextInt();
      if (num < 1 && num > 10){
        System.out.print("해당 숫자는 구구단을 출력할 수 없습니다 다시 입력하세요");
      } else if (num == 0 ){
        System.out.print(0);
      }else{
        for (int j = 1; j <= 9; j++){
          System.out.println(num + " * " + j + " = " + num * j);
        }
      }
    }
  }
}
