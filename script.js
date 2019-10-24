let img = new Image();
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
context.imageSmoothingEnabled = false;
let small_pic=[
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
let big_pic = [];

img.onload = function () {
  context.drawImage(img,0,0,img.width, img.height);
};

img.src = 'assets/images/image.png';

radios=document.getElementsByName('resolution');

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
      //(prev) ? console.log(prev.value): null;
      //if (this !== prev) {
      //    prev = this;
      //}
      //console.log(this.value)
    switch (this.value) {
      case "4x4":
        canvas.width="4";
        canvas.height="4";
        fillFromArray(small_pic,context,"hex")
      break;
      case "32x32":
          canvas.width="32";
          canvas.height="32";
          fillFromArray(big_pic,context,"dec")
      break;

      case "256x256":
          canvas.width="256";
          canvas.height="256";
      context.drawImage(img,0,0,img.width, img.height);
      break
    }

  });
}

function fillFromArray (array, context, colortype) {
  //let pixelSize = 256/array.length;
  let pixelSize=1;
  let i=0;
  let j=0;
  for (let row of array) {
    for (let pixel of row) {
      switch (colortype) {
        case 'hex':
         context.fillStyle='#'+pixel;
        break;
        case 'rgb':
          context.fillStyle=`rgb(
              ${pixel[0]},
              ${pixel[1]},
              ${pixel[2]},
              ${pixel[3]})`;
        break;
      }
      context.fillRect(i, j++, 1, 1);
    }
    i++;
    j=0;
  }
}




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


