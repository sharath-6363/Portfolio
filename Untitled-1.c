#include<stdio.h>
#include<conio.h>
void main()
{
  int a,b;
  clrscr();
  printf("enter the number for a and b\n");
  scanf("%d,%d"&a&b);
  a=a+b;
  b=a-b;
  a=a-b;
  printf("after swapping:a=%d,b=%d",a,b);
  getch();
}