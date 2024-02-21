import ErrorRepository from '../index';

const repository = new ErrorRepository();

test('Translating existing error', () => {
  repository.addError(1, 'error1');
  expect(repository.translate(1)).toBe('error1');
});

test('Translating non-existent error', () => {
  expect(repository.translate(2)).toBe('Unknown error');
});
