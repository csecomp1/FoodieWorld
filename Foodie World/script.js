//biriyani 
let biri=document.querySelectorAll('.b1')
birirate=[90,80,99,120,140,150]
biriimg=['images/biryani/Ambur-Chicken-Biryani.jpg',
        'images/biryani/Chicken-Biryani-hyd.jpg',
        'images/biryani/egg-biryani.jpeg',
        'images/biryani/goan-fish-biryani.jpg',
        'images/biryani/hyd-Mutton-Biryani.jpg',
        'images/biryani/kamrupi-biryani.jpg']
birinames=['Ambur Biriyani','Chicken Biriyani','Egg Biriyani','Goan Fish Biriyani','Hyderabad Mutton Biriyani','Kamrupi Biryani']
cartit=[];
biriquan=[0,0,0,0,0,0];
birivis=[0,0,0,0,0,0];
bquanobj=[null,null,null,null,null]
//chicken
chickrate=[100,120,90,80,130,200]
chickimg=['images/chicken/Chicken-Curry.jpg',
        'images/chicken/Chicken-do-Pyaza.jpg',
        'images/chicken/Chicken-Masala.jpeg',
        'images/chicken/Chicken_roast.jpeg',
        'images/chicken/Handi-chicken.jpg',
        'images/chicken/Murgh-Musallam.jpg']
chicknames=['Chicken Curry','Chicken Pyaza','Chicken Masala','Chicken Roast','Handi Chicken','Murg Mussalam']
cartit=[];
chickquan=[0,0,0,0,0,0];
chickvis=[0,0,0,0,0,0];
chickobj=[null,null,null,null,null,null];

//chinese
chinrate=[100,120,90,80,130,200]
chinimg=['images/chinese/cabbage-momos-.jpg',
        'images/chinese/ChickenManchurian.jpg',
        'images/chinese/Chili-Chicken.jpg',
        'images/chinese/chowmin.jpg',
        'images/chinese/mmos.jpg',
        'images/chinese/spring-rolls.jpg']
chinnames=['Cabbage momos','Chicken Manchurian',' Chili Chicken','Chowmin','Mmos','Spring Rolls']
cartit=[];
chinquan=[0,0,0,0,0,0];
chinvis=[0,0,0,0,0,0];
chinobj=[null,null,null,null,null,null];

//Paneer
panrate=[100,120,90,80,130,200]
panimg=['images/paneer/Matar-Paneer.jpg',
        'images/paneer/palak-paneer.jpg',
        'images/paneer/paneer-butter-masala.jpg',
        'images/paneer/Paneer-Do-Pyaza.jpg',
        'images/paneer/vegetable-curry.jpeg',
        'images/paneer/Paneer-Hyderabadi.jpg']
pannames=['Matar Paneer','Palak Paneer',' Paneer Butter Masala','Paneer Pyaza','Vegetable Curry','Paneer Hyderabadi']
cartit=[];
panquan=[0,0,0,0,0,0];
panvis=[0,0,0,0,0,0];
panobj=[null,null,null,null,null,null];

//South Indian
inrate=[100,120,90,80,130,200]
inimg=['images/south indian/Butter-Masala-Dosa.png',
        'images/south indian/idli-with-rice-flour.jpg',
        'images/south indian/masala-dosa.jpg',
        'images/south indian/mysore-bonda.jpg',
        'images/south indian/onion-uttapam.jpg',
        'images/south indian/plain-dosa.jpeg']
innames=['Butter Masala Dosa','Idly','Masala Dosa','Mysore Bonda','Onion Uttapam','Plain Dosa']
cartit=[];
inquan=[0,0,0,0,0,0];
invis=[0,0,0,0,0,0];
inobj=[null,null,null,null,null,null];

//Vegetable 
vegrate=[100,120,90,80,130,200]
vegimg=['images/vegetable/navratan-korma_-vegetable.png',
        'images/vegetable/VEG-JALFREZI.jpg',
        'images/vegetable/vegetable-biryani.jpg',
        'images/vegetable/vegetable-curry.jpeg',
        'images/vegetable/vegetable-kolhapuri.jpg',
        'images/vegetable/vegetable-masala.jpg']
vegnames=['Veg Kuruma','Veg jalfrezi','Veg Briyani','Veg Curry','Veg Kolhapuri','Vegetable Masala']
cartit=[];
vegquan=[0,0,0,0,0,0];
vegvis=[0,0,0,0,0,0];
vegobj=[null,null,null,null,null,null];


let totcost=document.getElementById('tcost');
let totitem=document.getElementById('titem');
totitem.value=0;
totcost.value=0;
let cartclick=document.getElementById('cartclick');
let cartbox=document.getElementById('cartdisp');
cartclick.addEventListener('click',()=>{
    totitem.innerText=totitem.value;
    totcost.innerText=totcost.value;
    console.log('cart clicked');
     let left=document.querySelector('.left');
     left.style.visibility='hidden'; 
     let right=document.querySelector('.bo');
     right.style.visibility='hidden';
     cartbox.style.visibility='visible';
     let tot=document.getElementById('tot');
     tot.style.visibility='visible';
} );

function addtocart(itemname,quant,pric,recipiename,val){
 
    console.log('inside fun');
    console.log(itemname);
    console.log(quant[val-1]);
    console.log(pric);
    
    let ele=document.createElement('div');
    ele.setAttribute('class','cartitem');

    let imgbox=document.createElement('img');
    imgbox.setAttribute('src',itemname);

    let crname=document.createElement('div');
    crname.setAttribute('class','crname');
    let name=document.createElement('p');
    name.innerText=recipiename;
    crname.appendChild(name);
   
    let crquan=document.createElement('div');
    crquan.setAttribute('class','crquan');
    let decr=document.createElement('button');
    decr.innerText='-';
    decr.setAttribute('class','decr');
    let quan=document.createElement('span');
    quan.innerText=quant[val-1];
    bquanobj[val-1]=quan;
    let incr=document.createElement('button');
    incr.innerText='+';
    incr.setAttribute('class','incr');
    incr.addEventListener('click',()=>{
        
        quant[val-1]++;
        quan.innerText=quant[val-1];
        totitem.value++;
        totitem.innerText=totitem.value;
        totcost.value+=pric;
        console.log(pric);
        totcost.innerText=totcost.value;
        
    });
    decr.addEventListener('click',()=>{
       
        quant[val-1]--;     
        quan.innerText=quant[val-1];
        totitem.value--;
        totitem.innerText=totitem.value;
        totcost.value-=pric;
        totcost.innerText=totcost.value;
    })
    crquan.appendChild(decr);
    crquan.appendChild(quan);
    crquan.appendChild(incr);

    let crprice=document.createElement('div');
    crprice.setAttribute('class','crprice');
    let price=document.createElement('span');
    price.innerText=pric;
    crprice.appendChild(price);

    ele.appendChild(imgbox);
    ele.appendChild(crname);
    ele.appendChild(crquan);
    ele.appendChild(crprice);

    cartbox.appendChild(ele);

}
biri.forEach(but => {
    but.addEventListener('click',()=>{
        biriquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=birirate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(birivis[but.value-1]){        
            console.log('again visited ');
            console.log(bquanobj[but.value-1]);
            bquanobj[but.value-1].innerText=biriquan[but.value-1];
        }   
        else{
        addtocart(biriimg[but.value-1],biriquan,birirate[but.value-1],birinames[but.value-1],but.value) ;    
        birivis[but.value-1]=1;
        }
    })
});
let chg=document.querySelectorAll('.c1')
chg.forEach(but => {
    but.addEventListener('click',()=>{
        chickquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=chickrate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(chickvis[but.value-1]){        
            console.log('again visited ');
            console.log(chickobj[but.value-1]);
            chickobj[but.value-1].innerText=chickquan[but.value-1];
        }   
        else{
        addtocart(chickimg[but.value-1],chickquan,chickrate[but.value-1],chicknames[but.value-1],but.value) ;    
        chickvis[but.value-1]=1;
        }
    })
});
let p=document.querySelectorAll('.ch1')
p.forEach(but => {
    but.addEventListener('click',()=>{
        chinquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=chinrate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(chinvis[but.value-1]){        
            console.log('again visited ');
            console.log(chinobj[but.value-1]);
            chinobj[but.value-1].innerText=chinquan[but.value-1];
        }   
        else{
        addtocart(chinimg[but.value-1],chinquan,chinrate[but.value-1],chinnames[but.value-1],but.value) ;    
        chinvis[but.value-1]=1;
        }
    })
});
let pp=document.querySelectorAll('.p1')
pp.forEach(but => {
    but.addEventListener('click',()=>{
        panquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=panrate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(panvis[but.value-1]){        
            console.log('again visited ');
            console.log(panobj[but.value-1]);
            panobj[but.value-1].innerText=panquan[but.value-1];
        }   
        else{
        addtocart(panimg[but.value-1],panquan,panrate[but.value-1],pannames[but.value-1],but.value) ;    
        panvis[but.value-1]=1;
        }
    })
});
let s=document.querySelectorAll('.s1')
s.forEach(but => {
    but.addEventListener('click',()=>{
        inquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=inrate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(invis[but.value-1]){        
            console.log('again visited ');
            console.log(inobj[but.value-1]);
            inobj[but.value-1].innerText=inquan[but.value-1];
        }   
        else{
        addtocart(inimg[but.value-1],inquan,inrate[but.value-1],innames[but.value-1],but.value) ;    
        invis[but.value-1]=1;
        }
    })
});
let v=document.querySelectorAll('.v1')
v.forEach(but => {
    but.addEventListener('click',()=>{
        vegquan[but.value-1]++;
        
        totitem.value++;
        totitem.innerText=totitem.value;  
        totcost.value+=vegrate[but.value-1]; 
        totcost.innerText=totcost.value;
        if(vegvis[but.value-1]){        
            console.log('again visited ');
            console.log(vegobj[but.value-1]);
            vegobj[but.value-1].innerText=vegquan[but.value-1];
        }   
        else{
        addtocart(vegimg[but.value-1],vegquan,vegrate[but.value-1],vegnames[but.value-1],but.value) ;    
        vegvis[but.value-1]=1;
        }
    })
});
