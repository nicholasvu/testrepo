//Swap variable

import java.io.*;
import java.util.*;

public class SwapStorage {

      public static void swapNumbers(int x, int y) {
int temporary = x;
x = y;
y = temporary;
System.out.println("After swapping, x is equal to " + x + " and y is equal to " + y + ".");
}
  public static void main(String[] args) {
  Scanner in = new Scanner(System.in);
  int a,b;
  a = in.nextInt();
  b = in.nextInt();
  swapNumbers(a, b);
}