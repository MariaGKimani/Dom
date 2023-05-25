document.getElementsByClassName('container')
document.getElementById('container').style.color ='red';
document.getElementById('container').style.backgroundColor ='#e2e2e2';

document.getElementById('text').innerHTML = 'My name is Mariagoretti i am 22 years old'

let child = document.getElementById('container').childNodes;
console.log({child});

let children = document.getElementById('container').children;
console.log({children});

//creating a ptag 
let p = document.createElement('p')
//attaching the p-tag in the html
//attach it to the document you want it to go to
p.innerHTML =' i am a billionaire'
document.getElementById('container').appendChild(p)

document.getElementsByTagName('body').item(0).appendChild(p)

//adding an attribute.st
p.setAttribute('class','paragraph')
p.setAttribute('id','paragraph')

document.getElementById('paragraph').style.color ='purple'


//button
let button = document.getElementById('button');
button.addEventListener('click',function(){
    button.innerHTML = 'clicked!!'
    button.style.backgroundColor = '#19ba96'
    button.style.padding ='10px'
    button.style.borderRadius = '5px'
    button.style.border = none
})
