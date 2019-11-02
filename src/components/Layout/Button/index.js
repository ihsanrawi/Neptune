import React from 'react';
import './Button.scss';

function handleClick(e) {
	e.preventDefault();
	console.log('The link was clicked.');
}

function Button({ title, ico, onClickEvent }) {
	let clickEvent = onClickEvent ? onClickEvent : handleClick;

	return (
		<button className='btn' onClick={clickEvent}>
			{title}
		</button>
	);
}

Button.defaultProps = {
	title: 'Default'
};

export default Button;
