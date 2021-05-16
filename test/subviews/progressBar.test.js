import { ProgressBar } from '../../src/mvc/view/progressBar';

const testProgressBar = new ProgressBar();

describe('set progress bar right', () => {
  testProgressBar.createProgressBar(document.body);
  test('left border should be set to 20%', () => {
    testProgressBar.setRight(20);
    expect(testProgressBar.bar.style.left).toEqual('20%');
  });
  test('right border should be set to -1px', () => {
    testProgressBar.setRight(1000);
    expect(testProgressBar.bar.style.right).toEqual('-1px');
  });
});
