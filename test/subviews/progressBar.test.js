import ProgressBar from '../../src/mvc/view/progressBar';

const progressBar = new ProgressBar();

describe('test progress Bar', () => {
  beforeEach(() => {
    progressBar.createProgressBar(document.body);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('left border set, left progress bar', () => {
    progressBar.setDefault(false, 20);
    expect(progressBar.bar.style.left).toEqual('0px');
  });
  test('right border set, left progress bar', () => {
    progressBar.setDefault(false, 30);
    expect(progressBar.bar.style.right).toEqual('70%');
  });
  test('left border set, interval progress bar', () => {
    progressBar.setDefault(true, 20, 60);
    expect(progressBar.bar.style.left).toEqual('20%');
  });
  test('right border set, interval progress bar', () => {
    // by default right thumb set to 100%
    progressBar.setDefault(true, 20, undefined);
    expect(progressBar.bar.style.right).toEqual('100%');
  });
  test('left border set, right progress bar', () => {
    progressBar.setRight(20);
    expect(progressBar.bar.style.left).toEqual('20%');
  });
  test('right border set, right progress bar', () => {
    progressBar.setRight(1000);
    expect(progressBar.bar.style.right).toEqual('-1px');
  });
});

// test('progress bar set right', () => {
//   progressBar.createProgressBar(document.body);
//   test('left border should be set to 20%', () => {
//     progressBar.setRight(20);
//     expect(progressBar.bar.style.left).toEqual('20%');
//   });
//   test('right border should be set to -1px', () => {
//     progressBar.setRight(1000);
//     expect(progressBar.bar.style.right).toEqual('-1px');
//   });
// });
