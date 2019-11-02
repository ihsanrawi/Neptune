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
	const user = <div className='user'>u/{post.author.name}</div>;

	return (
		<div className='comment-component'>
			<div className='top-layout'></div>
			<div></div>
			<div className='btn btn-action'>
				<Button title='Reply' />
				<Button title='Give Award' />
				<Button title='Share' />
				<Button title='Save' />
			</div>
		</div>
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
