import React from 'react';
import './Comment.scss';

function getSidebarStyle(level) {
	const colors = ['green', 'orange', 'red'];
	const index = level % colors.length;
	return { 'border-left': 'solid 3px ' + colors[index] };
}

export default function Comment({ comment, level = 0 }) {
	const subComments = comment.comments || [];

	return (
		<div className='comment'>
			<div className='main-comment' style={getSidebarStyle(level)}>
				<p className='user'>{comment.user}</p>
				<p className='text'>{comment.text}</p>
			</div>
			<div className='subcomments'>
				{subComments.map(comment => (
					<Comment comment={comment} level={level + 1} />
				))}
			</div>
		</div>
	);
}
