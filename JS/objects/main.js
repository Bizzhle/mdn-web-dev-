// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x; //  the horizontal and vertical coordinates where the ball starts on the screen
  this.y = y;
  this.velX = velX;
  this.velY = velY; /* added to the x/y coordinate values
   when we animate the balls, to move them by this much on each frame. */
  this.color = color; // each ball gets a color.
  this.size = size; // each ball gets a size — this is its radius, in pixels.
}

Ball.prototype.draw = function () {
  ctx.beginPath(); //  state that we want to draw a shape on the paper.
  ctx.fillStyle = this.color; // define what color we want the shape to be
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // method to trace an arc shape on the paper
  ctx.fill(); // finish drawing the path we started with beginPath()
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }
  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }
  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

let balls = [];
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};
loop();
