const path = require('path');
const conversionFuncs = require('../../../src/helpers/index');
const data = require('../../../src/contexts/ATRIOM');
import colors from '../../../src/helpers/colors';

describe('Checks data conversion functions', () => {
  const colorMap = {
    checkout: '#a52024',
    home: '#1ec1f7',
    search: '#5f50a5',
  };
  let colorMapResult;

  //check color map function

  describe('Creates color map', () => {
    it('creates a color map and returns an object', () => {
      colorMapResult = conversionFuncs.createColorMap(data.default, colors);
      expect(colorMapResult).toEqual(colorMap);
      expect(colorMapResult).toHaveProperty('checkout');
    });
  });

  //check convert app obj function

  describe('Coverts app object', () => {
    it('Checks if app object is converted', () => {
      const result = conversionFuncs.convertAppObj(
        data.default,
        colorMapResult
      );
      expect(result[0]).toHaveProperty('data');
      expect(result[0].data).toHaveProperty('link');
    });
  });

  //check convertconsumedfunction

  describe('Coverts consumed modules', () => {
    const { consumes } = data.default[0];
    it('Checks if app object is converted', () => {
      const result = conversionFuncs.convertConsumedModules(
        consumes,
        colorMapResult
      );
      expect(result[0]).toHaveProperty('type');
      expect(result[0].type).toBe('ModuleNode');
      expect(result[0].data).toHaveProperty('color');
    });
  });

  describe('Maps container positions', () => {
    it('returns app positions', () => {
      const result = conversionFuncs.locationsMap(data.default);
      expect(result[0]).toHaveProperty('position');
      expect(result[0].position.x).toBeTruthy();
      expect(result[0].position.y).toBeTruthy();
    });
  });
});
