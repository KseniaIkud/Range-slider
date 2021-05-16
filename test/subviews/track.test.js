import { Track } from '../../src/mvc/view/track';

const testTrack = new Track();

describe('init function', () => {
  test('init function should call createStyles and createTruck functions', () => {
    jest.spyOn(testTrack, 'createStyles');
    jest.spyOn(testTrack, 'createTrack');
    testTrack.init(document.body);
    expect(testTrack.createStyles).toHaveBeenCalledWith(document.body);
    expect(testTrack.createTrack).toHaveBeenCalled();
  });
});
describe('createStyle function', () => {
  test('new element should be created', () => {
    jest.spyOn(document, 'createElement');
    testTrack.createStyles(document.body);
    expect(document.createElement).toHaveBeenCalled();
  });
});
describe('createTrack function', () => {
  test('new element should be created', () => {
    jest.spyOn(document, 'createElement');
    testTrack.createTrack();
    expect(document.createElement).toHaveBeenCalled();
  });
});
