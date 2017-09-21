import { stringArrayToObject } from '../../src/utils/arrayUtils';

describe('#ArrayUtils', () => {
  describe('#stringArrayToObject', () => {
    it('transforms an array of strings to object', () => {
      const input = ['A', 'B', 'C', 'D'];
      const output = { A: 'A', B: 'B', C: 'C', D: 'D' };
      expect(stringArrayToObject(input)).toEqual(output);
    });

    it('transforms an array of strings with namespace to object', () => {
      const namespace = '@@TEST_NAME';
      const input = ['A', 'B', 'C', 'D'];
      const output = { A: `${namespace}:A`, B: `${namespace}:B`, C: `${namespace}:C`, D: `${namespace}:D` };
      expect(stringArrayToObject(input, namespace)).toEqual(output);
    });

    it('throws error if any action name is empty', () => {
      const input = ['A', 'B', 'C', 'D', ''];
      const input2 = ['A', 'B', 'C', 'D', null];
      expect(() => {
        stringArrayToObject(input);
      }).toThrow();
      expect(() => {
        stringArrayToObject(input2);
      }).toThrow();
    });

    it('throws error if any action names are not strings', () => {
      const inputWithList = ['A', 'B', 'C', 'D', ['E']];
      const inputWithObj = ['A', 'B', 'C', 'D', {}];
      expect(() => {
        stringArrayToObject(inputWithList);
      }).toThrow();
      expect(() => {
        stringArrayToObject(inputWithObj);
      }).toThrow();
    });
  });
});
