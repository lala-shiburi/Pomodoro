import React from 'react';
import Controller from './Controller';

function StartStop(props) {
	const { handleClick, timerState } = props;
	return (
		<div>
			<Controller
				id="start_stop"
				handleClick={handleClick}
				arrow="start"
				timerState={timerState}
			/>
		</div>
	);
}

export default StartStop;
