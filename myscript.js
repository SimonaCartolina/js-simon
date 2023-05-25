
const seconds=0;
secondsToShow=68400000;

setTimeout(function(){
    alert('It s time')
}, secondsToShow);

const countdown=setInterval(function(){ 
    console.log(secondsToShow);

    secondsToShow--;}, 
    1000);

let divContainer=document.querySelector('div.container');
pElement=document.createElement('p');
pElement.innerHTML= 
`<p>
${'countdown: '+ secondsToShow} 
</p>`;
divContainer.appendChild(pElement);
