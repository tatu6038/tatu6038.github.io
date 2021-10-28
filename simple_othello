#include <stdio.h>
int p,t,a,d,c,v,i,m[90]={0},s,r[]={-10,-9,-8,-1,1,8,9,10};void k(){if(m[p]==0)
for(i=0;i<8;i++){for(c=0,v=p+r[i];m[v]==3-t;v+=r[i])c++;if(c&&m[v]==t){a+=c;v=
p;if(d)do m[v]=t,v+=r[i];while(m[v]!=t);}}}char*h=" - o x\n";int main(){for(i=
1,m[41]=m[49]=2;i<10;m[i++*9]=3)m[40]=m[50]=t=s=1;for(;;a=d=0){for(p=9;p<82;++
p)k(),printf("%.2s",&h[m[p]*2]);if(a)for(d=a=s=p=8;a==8;k())t-2?(scanf("%d %d"
,&p,&i),p+=i*9):++p;else if(s)s=0,printf("pass");else break;t=3-t;}return 0;}
