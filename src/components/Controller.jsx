import React from 'react';
import { Arrow, Play, Pause, Refresh } from './Icons';
import Reset from './Reset';

function Controller(props) {
	const { id, handleClick, arrow, timerState } = props;
	return (
		<div className={`controller ${arrow}`}>
			<div id={id} onClick={handleClick}>
				{/* {arrow} */}
				{arrow === 'start' ? (
					timerState === 'start' ? (
						<Play />
					) : (
						<Pause />
					)
				) : arrow === 'reset' ? (
					<Refresh />
				) : (
					<Arrow />
				)}
			</div>
		</div>
	);
}

export default Controller;
