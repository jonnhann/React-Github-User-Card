import React from 'react';

const UserCard = (props) => {
	return (
		<div className='container'>
			<img src={props.data.avatar_url} alt='user' />

			<hr />

			<h2>{props.data.name}</h2>

			<p>Handle:</p>
			<a href={props.data.html_url}>{props.data.login}</a>
			<p>Location:</p>
			<div>{props.data.location}</div>
			<p>Bio:</p>
			<p> {props.data.bio}</p>

			<h3>Followers:</h3>
			{props.followers.map((follower) => {
				return <p>{follower.login}</p>;
			})}
		</div>
	);
};

export default UserCard;
