import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import  Search  from '../js/components/search';
const wrapper = shallow(<Search />);
describe('<Search />', () => {
    it('should render a form with an onSubmit props', ()=> {
        expect(wrapper.find('FormGroup')).to.have.length(1);
        expect(wrapper.props().onSubmit).to.be.defined;
    })
    
    it('should render a the input field with an onChange, onKeyPress', ()=> {
        expect(wrapper.find('FormControl')).to.have.length(1);
        expect(wrapper.props().onChange).to.be.defined;
        expect(wrapper.props().onKeyPress).to.be.defined;
    })

    it('should render a button with an onClick props', ()=> {
        expect(wrapper.find('Button')).to.have.length(1);
        expect(wrapper.props().onClick).to.be.defined;
    })
    
});


