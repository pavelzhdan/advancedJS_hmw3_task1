/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import healthStatus from '../function.js';

test('health status critical', () => {
  const result = healthStatus({ name: 'player', health: 14 });

  expect(result).toBe('critical');
});

test('health status wounded', () => {
  const result = healthStatus({ name: 'player', health: 40 });

  expect(result).toBe('wounded');
});

test('health status critical', () => {
  const result = healthStatus({ name: 'player', health: 55 });

  expect(result).toBe('healthy');
});
