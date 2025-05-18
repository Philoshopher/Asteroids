const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';

class Player {
  constructor({ position, velocity, color }) {
    this.position = position;
    this.velocity = velocity;
    this.color = color;
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
  color: 'white',
});

player.render();
