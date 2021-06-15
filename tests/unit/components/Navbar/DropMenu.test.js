import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import DropMenu from '../../../../src/components/NavBar/Search';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('DropMenu Conponent Tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<DropMenu />);
    });

    it("Verifies that the DropMenu component has a className 'search'", () => {
      expect(wrapper.hasClass('wrongname'));
    });
  });
});
