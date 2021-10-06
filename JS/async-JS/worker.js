onmessage = function () {
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  postMessage(myDate);
};

/* fills a canvas with 1 million blue circle by clicking.
function expensiveOperation() {
  for(let i = 0; i < 1000000; i++) {
    ctx.fillStyle = 'rgba(0,0,255, 0.2)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
    ctx.fill()
  }
}

fillBtn.addEventListener('click', expensiveOperation);

alertBtn.addEventListener('click', () =>
  alert('You clicked me!')
);
*/
