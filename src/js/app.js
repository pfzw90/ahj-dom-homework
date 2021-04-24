import img from '../img/goblin.png';

export default class GoblinGame {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
    this.goblin = document.createElement('img');
    this.goblin.src = img;
    this.currentPos = 0;
  }

  generateRand() {
    return Math.floor(Math.random() * (this.fieldSize ** 2 - 1));
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.createElement('div');
      container.className = 'container';
      document.body.appendChild(container);
      let n = 0;
      for (let i = 0; i < this.fieldSize; i += 1) {
        const row = document.createElement('div');
        row.className = 'row';
        container.insertAdjacentElement('afterbegin', row);
        for (let j = 0; j < this.fieldSize; j += 1) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.id = `cell_${n}`;
          row.insertAdjacentElement('beforeend', cell);
          n += 1;
        }
      }
    });

    setInterval(() => {
      document.getElementById(`cell_${this.currentPos}`).innerHTML = '';
      this.currentPos = this.generateRand();
      document.getElementById(`cell_${this.currentPos}`).insertAdjacentElement('afterbegin', this.goblin);
    }, 500);
  }
}
