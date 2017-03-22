import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import {GithubCard} from '../js/components/githubcard';

const user = {
	avatar_url: 'https://somethingelse.com',
	name: 'Mea',
	location: 'Queens',
	blog: 'Blah Blah Blah',
	bio: 'me and my mac',
	following_url: 'Thefollowing.com',
	following: 6,
	follower_url: 'Thefollowers.com',
	followers: 8,
	repos_url: 'therepos.com',
	public_repos: 99,
	gists_url: 'thegists.com',
	public_gists: 123
}

const wrapper = shallow(<GithubCard user={user} />);

describe('<GithubCard />', () => {
	it('should have div elems', ()=> {
		expect(wrapper.find('div')).to.have.length(4);
	})
	// it('should render divs with classNames', ()=> {
	// 	expect(wrapper.contains(<div classname="imageContainer"></div>)).to.equal(true);
	// })
	// it('should have an header tages', () => {
	// 	expect(wrapper.find('h5')).to.have.length(2);
	// 	expect(wrapper.contains([
	// 		<h5>User Repos</h5>
	// 	])).to.equal(true);
	// })
	it('should have an img element', () => {	
		expect(wrapper.find('img')).to.have.length(1);
	})
	// it('should have <a> tags', () => {
	// 	expect(wrapper.find('a')).to.have.length(5);
	// })
})



