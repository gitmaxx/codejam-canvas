let img = new Image();
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

img.onload = function () {
  context.drawImage(img,0,0,img.width, img.height);
};

img.src = 'assets/images/image.png';
console.log(img);
//context.fillStyle = '#00FF00';
//context.fillRect(0, 0, 128, 128);
//let myURL=document.getElementById("myscripttag").src
//let request = new XMLHttpRequest();
//request.open('GET', 'assets/data/4x4.json', true);
 // request.onload = function () {
  // Convert JSON data to an object
  //let users = JSON.parse(this.response);
 // }

  //function XHR(file, callback){
  //  let xhr = new XMLHttpRequest();
  //  xhr.onreadystatechange = function(){
  //      if(xhr.readyState === 4 &amp;&amp; xhr.status === 200){
   //         callback(xhr.responseText);
   //     }
  //  }
  //  xhr.open('GET', file, true);
  //  xhr.send();
//}

//let url = 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-2/codejam-canvas/data/4x4.json';
//fetch(url, {
 //   mode: 'no-cors', // Useful for including session ID (and, IIRC, authorization headers)
 // })
 //   .then(res => res.json())
  //  .then(data => console.log(data));


    //let someData;

//fetch('assets/data/4x4.json', {mode: "same-origin"})
//.then(res => res.json())
// .then(data => someData = data)
// .then(() => console.log(someData));


