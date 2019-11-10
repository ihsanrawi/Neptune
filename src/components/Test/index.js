import React, { Component } from 'react';
import Comment from '../Comment';
export class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [
				{
					user: 'user1',
					karma: 234,
					postedDate: '5hours ago',
					commentText: 'text1',
					comments: [
						{
							user: 'user3',
							karma: 234,
							postedDate: '5hours ago',
							commentText: 'responding to text1',
							comments: [
								{
									user: 'user1',
									karma: 234,
									postedDate: '5hours ago',
									commentText: 'responding to user3'
								}
							]
						}
					]
				},
				{
					user: 'user2',
					karma: 234,
					postedDate: '5hours ago',
					commentText: 'text2'
				}
			]
		};
	}
	render() {
		return (
			<div>
				{this.state.comments.map(comment => (
					<Comment comment={comment} />
				))}
			</div>
		);
	}
}

export default Test;
