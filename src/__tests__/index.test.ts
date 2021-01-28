import message from '../index';

it('Works', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  expect(message).toBe('This module must not be required!');
});
