const SmartPhonelist  = [
    {brand :'redmi',model :'notebook', price :'12000',color :['black' ,'blue']},
{ brand :'samsung',model :'m31', price :'17000',color :['white' ,'blue']},
{ brand :'realme',model :'8', price :'13000' ,color :['white' ,'blue']},
{ brand :'oppo',model :'8', price :'15000' ,color :['purple' ,'blue']},
{brand: 'vivo',model:'v20',price:'18000',color:['pink','yellow']},
];

// write a program to create an array of brands

const brands= SmartPhonelist .map ((phone)=>{return phone.brand});

console.log(brands);

// erite a program to store first color of each smartphone in an array


const colors= SmartPhonelist.map ((c )=>{return c.color[0]});


console.log(colors);

// write a program to store price of each smartphone in an array

const prices= SmartPhonelist.filter (( p)=>{return p.price  < 15000});

console.log(prices);

// 

let search= 'samsung ';

SmartPhonelist.filter((phone)=>{return phone.brand.toLowerCase().includes(search.toLowerCase())});

    console.log('Redmi'.includes ('mi'));

const clr = SmartPhonelist.filter (( q)=>{return q.brand.toLowerCase()  ==='samsung.toLowerCase'});

console.log(clr);



