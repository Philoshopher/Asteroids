const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

//!!    PLAYER CLASS CREATION WITH MSTHODS ANS THE INITIALIZATION   !!\\
class Player {
  constructor({ position, velocity, color }) {
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.render();
  }
  render() {
    ctx.beginPath();
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(this.position.x - 25, this.position.y + 10);
    ctx.lineTo(this.position.x - 25, this.position.y - 10);
    ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.render();
  }
}

const player = new Player({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: 'Red',
});

//!!    MEVEMENT FUNCTIONALITIES    !!\\
let keys = {
  w: false,
  s: false,
  a: false,
  d: false,
};
function animateMovement() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  window.requestAnimationFrame(animateMovement);
  if (keys.w) {
    player.velocity.x = 1;
  } else if (keys.s) {
    player.velocity.x = -1;
  } else {
    player.velocity.x = 0;
  }
  player.move();
}
animateMovement();

window.addEventListener('keydown', (key) => {
  switch (key.code) {
    case 'KeyW':
      keys.w = true; //Horizontal movements
      break;
    case 'KeyS':
      keys.s = true;
      break;
  }
});
window.addEventListener('keyup', (key) => {
  switch (key.code) {
    case 'KeyW':
      keys.w = false;
      break;
    case 'KeyS':
      keys.s = false;
      break;
  }
});
