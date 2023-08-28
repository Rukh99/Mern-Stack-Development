const nums =[2,5,20,8,3,8,7]

const ans = nums.map ((n) => {return n**2});

console.log(ans);

 const ans2 =nums.filter((a) => {return a%2==0});

 console.log(ans2);


 const prices =[625,100,77,657,9,300,989,1230]

 // write a program to print prices less tha 500

 const ans3=prices.filter((p) => {return p <500 && p >= 200});

 console.log(ans3);


 // write a program to print 10% of gst

 const amount =[625,100,77,657,9,300,989,1230]

 const ans4 =amount.map((p) => {return p+ p*0.1});


 console.log(ans4);


 const rawprices =['$326.5', ,'$253.6', '$326.4']

 console.log(parseInt('$756.9'.slice(1)));

 const ans5 =rawprices.map((q) => {return parse.Int(p.slice(1))});

 console.log(ans5);