const user ={
    name: 'rukhsar',
    email: 'rukhsarq@gmail.com',
    age :'65',

}
console.log(user);

console.log(user.name);
console.log(user.email);

console.log(user['name']);

user.address ='lucknow';

console.log(user);

user.age=12;

console.log(user);

const  smartphone= {
    brand: 'iphone',
    model: 'mobile',
    price: '10000',
    color: ['black' ,'blue'], 
    

    }

    console.log(smartphone.color[1]);  
    console.log(smartphone.color.push("purple"));

    console.log(smartphone);

const SmartPhonelist = [
     {brand :'redmi',model :'notebook', price :'12000',color :['black' ,'blue']},
{ brand :'samsung',model :'m31', price :'17000',color :['white' ,'blue']},
{ brand :'realme',model :'8', price :'1700' ,color :['white' ,'blue']},
{ brand :'oppo',model :'8', price :'1700' ,color :['purple' ,'blue']},
{brand: 'vivo',model:'v20',price:'1800',color:['pink','yellow']},
]




console.log(SmartPhonelist[0]);

console.log(SmartPhonelist[2].price);

//(SmartPhonelist[1].price(price + price*0.1));
console.log(SmartPhonelist[1].price*0.1);





    
