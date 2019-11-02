import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-mini';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import randomColor from 'randomcolor';

import Button from '../Layout/Button';

import { abbrNumber } from '../../utils';
import PostContent from '../PostContent/';
import './Comment.scss';

export default function Comment({ post }) {
	console.log(post);
	const user = <div className='user'>u/{post.author.name}</div>;

	return (
		<section className='comment-container'>
			<div className='comment-header'>
				<div className='header-item'>Artavur</div>
				<div className='header-item'>213 points</div>
				<div className='header-item'>.</div>
				<div className='header-item'>5 hours ago</div>
			</div>
			<div className='comment-content'>
				<p>this is a test comment</p>
			</div>
			<div className='comment-footer'>
				<Button title='Reply' />
				<Button title='Give Award' />
				<Button title='Share' />
				<Button title='Save' />
			</div>
		</section>
	);
}

Comment.propTypes = {
	post: PropTypes.object.isRequired
};

/*
    <div>
        <div className={top-layout}></div>
        <div className={comment}>
            {post.comment}
        </div>
        <div className={bottom-layout}>
            <Button title={Reply} onClick={newComment} icon={messagebox}/>
            <Button title={'Give Award'} onClick={giveAward} icon={}/>
            <Button title={'Share'} onClick={Share} icon={}/>
            <Button title={'Report'} onClick={report} icon={}/>
            <Button title={'Save'} onClick={Save} icon={}/>
        </div>
    </div>
*/
