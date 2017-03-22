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
	it('should have an img element', () => {	
		expect(wrapper.find('img')).to.have.length(1);
	})

	it('should have div container elems', ()=> {
		expect(wrapper.find('div')).to.have.length(4);
		expect(wrapper.containsMatchingElement(
			<div className="imageContainer">
                <img src={user.avatar_url} className="userimg" />
                </div>
		)).to.equal(true);
	})

	it('should render the username', ()=> {
		expect(wrapper.find('h2')).to.have.length(1);
		expect(wrapper.containsMatchingElement(
  			<h2 className="username">{user.name}</h2>
		)).to.equal(true);
	})

	it('should render the <a> tags', () => {
		expect(wrapper.find('a')).to.have.length(6);
		expect(wrapper.containsMatchingElement(
			<a href='https://j8298c.github.io/github_card/#/'>Back to search</a>
		)).to.equal(true);
	})
	it('should render the user location and bio', ()=> {
		expect(wrapper.find('h4')).to.have.length(2);
		expect(wrapper.containsMatchingElement(
			<h4 className="userlocation">{user.location}</h4>
		)).to.equal(true);
	})
})



