const next =document.getElementById('nextbtn')
const previous=document.getElementById('previousbtn')
const imgdiv=document.getElementById('imgdiv')
const background=document.getElementById('background')


const mystring=['one.jpg','two.jpg','three.jpg','four.jpg','five.jpg']

imgdiv.style.backgroundImage = `url(${mystring[0]})`
background.style.backgroundImage=`url(${mystring[0]})`




index=0
next.addEventListener('click',function(){
    index++
    if (index==mystring.length) {
        index=0
    }
    
    imgdiv.style.backgroundImage=`url(${mystring[index]})`
    background.style.backgroundImage=`url(${mystring[index]})`
    

})
previous.addEventListener('click',function(){
    index--
    if (index==-1) {
        index=mystring.length-1
    }
    
    imgdiv.style.backgroundImage=`url(${mystring[index]})`
    background.style.backgroundImage=`url(${mystring[index]})`
    

})