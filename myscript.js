
const seconds=0;
secondsToShow=68400000;

setTimeout(function(){
    alert('It s time')
}, secondsToShow);

const countdown=setInterval(function(){ 
    console.log(missingTime);

    missingTime--;}, 
    1000);

    /*new Date(0, 0, 0, 19, 0, 0, 0);
    console.log(Date);

/*let divContainer=document.querySelector('div.container');
pElement=document.createElement('p');
pElement.innerHTML= 
`<p>
${'countdown: '+ secondsToShow} 
</p>`;
divContainer.appendChild(pElement);*/

/*let divContainer=document.querySelector('div.container');
pElement=document.createElement('p');
pElement.innerHTML= 
`<p>
${'countdown: '+ Date} 
</p>`;
divContainer.appendChild(pElement);*/

let oggi = Date.now();

const domani = new Date(2023, 05, 26, 10, 00, 0, 0);

let missingTime= (domani-oggi);

if(missingTime==0){
    alert('It s time')
}

let divContainer=document.querySelector('div.container');
pElement=document.createElement('p');
pElement.innerHTML= missingTime;
divContainer.appendChild(pElement);
