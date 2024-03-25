import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


function Counter (props) {
	
	 
	return (
		<div className="container-fluid d-flex bg-black">

			<span className="col-3"></span>
			<span className="col-1 text-white fs-1"><FontAwesomeIcon icon={faClock} /></span>
			<span className="col-1 text-white fs-1">{props.digitSix}</span>
			<span className="col-1 text-white fs-1">{props.digitFive}</span>
			<span className="col-1 text-white fs-1">{props.digitFour}</span>
			<span className="col-1 text-white fs-1">{props.digitThree}</span>
			<span className="col-1 text-white fs-1">{props.digitTwo}</span>
			<span className="col-1 text-white fs-1">{props.digitOne}</span>
			<span className="col-3"></span>
			
		
		</div>
	);
};

export default Counter
