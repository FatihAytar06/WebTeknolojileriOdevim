var secenekler=[
  {
  name:'Ankara Kalesi',
  image:'images/ankara-kalesi.jpg',
  link:'kale.html'
  },{
  name:'Eski Meclis',
  image:'images/meclis.jpg',
  link:'kale.html'
  },{
  name:'Koca Tepe Camii',
  image:'images/kocatepe-camii.jpg',
  link:'kocatepe.html'
  }
    ,{
  name:'Anadolu Medeniyetleri Müzesi',
  image:'images/muze.jpg',
  link:'muze.html'
  }
];
var index = 0;
var SlaytCount = secenekler.length;
var interval;
var settings={
    duration : '2000',
    random:false
    
};
function init(s){
    var prev;
   interval= setInterval(function(){
        if(settings.random){
            do{
                index=Math.floor(Math.random()*SlaytCount);
            }while(index==prev)
            prev=index;
        }else{
            if(SlaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
        
    },settings.duration)
                
                
}
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
        
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
    
})
init(settings);
document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
    
});
document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
    
});
function showSlide(i){
    index=i;
    if(i<0){
        index=SlaytCount - 1;
    }
    if(i >= SlaytCount){
        index=0;
    }
document.querySelector('.card-title').textContent=secenekler[index].name;

document.querySelector('.card-img-top').setAttribute('src',secenekler[index].image);
document.querySelector('.card-link').setAttribute('href',secenekler[index].link);
}

