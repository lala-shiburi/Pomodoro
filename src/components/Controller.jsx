import React from 'react';
import { Arrow } from './Icons';

function Controller(props) {
	const { id, handleClick, arrow } = props;
	return (
		<div className="controller">
			<div id={id} onClick={handleClick}>
				{/* {arrow} */}
				<Arrow />
			</div>
		</div>
	);
}

export default Controller;
