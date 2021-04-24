import GoblinGame from '../app';
import img from '../..//img/goblin.png'

test('Testy test', () => {
  const test = new GoblinGame(2);
  expect(test.fieldSize).toEqual(2);
});
