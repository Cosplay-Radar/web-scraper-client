import { render, screen } from '@testing-library/react';
import App from './App';

test('detailsSplit can divide the retrieved data', () => {
  const detailsSplit = (string) => {
    const output = {date:'', location: ''}
    for (let i = string.length; i > 0; i--) {
      if (!isNaN(parseInt(string[i]))) {
        output.date = string.slice(0, i+1);
        output.location = string.slice(i+1, string.length);
        return output
      }
    }
    return output
  }
  expect(detailsSplit('November 18-19-2022Wilberson Memorial Center')).toEqual({date:'November 18-19-2022',location: 'Wilberson Memorial Center'})
});
