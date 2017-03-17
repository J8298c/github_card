import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import {GithubCard} from '../js/components/githubcard';
const user = {
	avatar_url: 'https://somethingelse.com'
}

const wrapper = shallow(<GithubCard user={user} />);

describe('<GithubCard />', () => {
	it('should have an img', () => {
		expect(wrapper.find('img')).to.have.length(1);
	});
	it('should have an header tages', () => {
		expect(wrapper.find('h5')).to.have.length(2);
	})
	it('should have div elements', () => {	
		expect(wrapper.find('div')).to.have.length(11);		
	})
	it('should have <a> tags', () => {
		expect(wrapper.find('a')).to.have.length(5);
	})
})



