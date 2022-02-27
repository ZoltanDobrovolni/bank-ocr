import { parseFile } from './parseFile';

const mockAccountNumber =
`    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                          `;
test('test', () => {
    const expectedFirstCharMatrix = [
            '   ',
            '  |',
            '  |'
    ];
    const result = parseFile(mockAccountNumber);

    expect(result[0]).toEqual(expectedFirstCharMatrix);
})