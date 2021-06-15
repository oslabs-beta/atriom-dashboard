import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import toJson from 'enzyme-to-json';

import Search from '../../../../src/components/NavBar/Search';
import { InputBase } from '@material-ui/core';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Search Conponent Tests', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Search />);
    });

    it('Verifies that Search returns a div that renders a div and and InputBase component', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.contains(<InputBase />));
      expect(wrapper.contains(<div />));
    });

    it("Verifies that the Search component has a className 'search'", () => {
      expect(wrapper.hasClass('search'));
    });
  });
});
