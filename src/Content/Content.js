import React from 'react';
import './Content.scss';
import Resume from '../Resume/Resume';

const content = props => {
	return (
		<div className="Content">
			<Resume/>
		</div>
	)
}

export default content;