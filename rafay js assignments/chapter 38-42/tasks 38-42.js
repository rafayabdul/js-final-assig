// question :01:
// var d=+prompt("enter an intiger:");
// var n=+prompt("enter the power:");
// function power(a,b){
// var pow= Math.pow(a,b)
// return pow;
// }
// alert(power(d,n))



// question :02:
// var inp=+prompt("enter a year:")
// function leap(a){
// if (a%4==0 || a%4==0){
//     alert ("this year is a leap year..")
// }else{
//     alert("this year is not a leap year..")
// }
// }
// leap(inp)



// question :03:
// var a=+prompt("enter 1st side length of the triangle:")
// var b=+prompt("enter 2nd side length of the triangle:")
// var c=+prompt("enter 3rd side length of the triangle:")
// function sur(d,e,f){
// var s=(d+e+f)/2;
// return s;

// }
// function area(){
// var ar=sur(a,b,c)*((sur(a,b,c)-a)*(sur(a,b,c)-b)*(sur(a,b,c)-c))
// alert("the area of a triangle is "+ar+" ...")
// }
// area()



// question :04:
// var a=+prompt("enter marks of english:")
// var b=+prompt("enter marks of math:")
// var c=+prompt("enter marks of physics:")
// var tot=300;
// function main(){
//     function average(d,e,f){
//         var ave=d+e+f;
//         return ave;
//     }
//     function per(){
//         var per=(average(a,b,c)/tot)*100;
//         return per;
//     }
//     alert("your average marks is: "+average(a,b,c)+"\n\r"+" your percentage is :"+per()+" %")
// }
// main()

// question :05
// function indof(a,b){
// var st=a;
// var chr=b;
// var ind=-1
// for(var i=0;i<st.length ;i++){
//     if(st[i]==b){
//         ind=i
//         break
//     }
// }
// if(ind==-1){
//     alert(b+" is not on any index")
// }
// else{
//     alert("index of "+b+" is "+ind)
// }

// }
// var x=prompt("enter a string")
// var y=prompt("enter the character you want the index of")
// indof(x,y)

// question :06
// function vow(a){
//     var st=a;
//     for(var i=0;i<st.length;i++){
//         if(st[i]=="a" || st[i]=="A" || st[i]=="e" || st[i]=="E" || st[i]=="i" || st[i]=="I" || st[i]=="o" || st[i]=="O" || st[i]=="u" || st[i]=="U" ){
//             st=st.slice(0,i)+st.slice(i+1)
//              }
//     }
//     alert("After removing vowels: "+"\r\n"+st)
    
// }
// var string=prompt("enter the sentence")
// vow(string)


// question 07:
// function count(a){
//     var st=a;
//     var counter=0
//     for(var i=0;i<st.length;i++){
//         var flag=false;
//         switch(st[i]){
//             case "a":
//                 flag=true;
//                 break
//             case "A":
//                 flag=true;
//                 break
//             case "e":
//                 flag=true;
//                 break
//             case "E":
//                 flag=true;
//                 break   
//             case "i":
//                 flag=true;
//                 break
//             case "I":
//                 flag=true;
//                 break
//             case "o":
//                 flag=true;
//                 break
//             case "O":
//                 flag=true;
//                 break 
//             case "u":
//                 flag=true;
//                 break
//             case "U":
//                 flag=true;
//                 break       
//             }  
//         if(flag==true){
//             switch(st[i+1]){
//                 case "a":
//                     counter=counter+1;
//                     break
//                 case "A":
//                     counter=counter+1;
//                     break
//                 case "e":
//                     counter=counter+1;
//                     break
//                 case "E":
//                     counter=counter+1;
//                     break   
//                 case "i":
//                     counter=counter+1;
//                     break
//                 case "I":
//                     counter=counter+1;
//                     break
//                 case "o":
//                     counter=counter+1;
//                     break
//                 case "O":
//                     counter=counter+1;
//                     break 
//                 case "u":
//                     counter=counter+1;
//                     break
//                 case "U":
//                     counter=counter+1;
//                     break 
//             }
//         }
//     }
//     alert("the occurrances of vowels in succession are "+counter+" times")
// }
// var x=prompt("enter your sentence")
// count(x)


// question :08:
// var inp=+prompt("enter distance beween two cities in kilo meter(Km):")
// function meter(a){
//     var met=a*1000;
//     return met;
// }
// function feet(b){
//     var fet=b*3280.84;
//     return fet;
// }
// function inch(c){
//     var inc=c*39370.1;
//     return inc;
// }
// function centimeter(d){
//     var cen=d*100000;
//     return cen;
// }
// alert("the distance in meter is : "+meter(inp)+"\n\r"+"the distance in feet is : "+feet(inp)+"\n\r"+"the distance in inches is : "+inch(inp)+"\n\r"+"the distance in centimeter is : "+centimeter(inp))


// question :09:
// var inp=+prompt("enetr number of hours:")
// if(inp>40){
//     inp=inp-40;
//     var tot=inp*12;
//     alert("your over time pay is : "+tot)
// }else{
//     alert("you did not work on overtime... ")
// }



// question :10:
// var inp=+prompt("enter amount you want to withdrawn:")
// var hcount=0
// var fcount=0
// var tcount=0
// while (inp>=100){
// hcount=hcount+1
// inp=inp-100
// }
// while (inp>=50){
//     fcount=fcount+1
//     inp=inp-50
//     }
// while (inp>=10){
//         tcount=tcount+1
//         inp=inp-10
//         }
// alert("you will have  "+hcount+" hundred notes,"+fcount+" fifty notes and "+tcount+" ten notes...")

    