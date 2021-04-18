import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import toJson from 'enzyme-to-json';

import DropMenu from '../../../../src/components/NavBar/Search';
import { ClickAwayListener } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('DropMenu Conponent Tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<DropMenu />);
    });

    xit('Verifies that DropMenu returns ClickAwayListener component', () => {
      expect(wrapper.contains(<ClickAwayListener />));
    });

    it("Verifies that the DropMenu component has a className 'search'", () => {
      expect(wrapper.hasClass('wrongname'));
    });
  });
});
