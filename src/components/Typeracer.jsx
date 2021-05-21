import React from 'react';
import Button from './Button';

const Typeracer = (props) => {
const { newWord, inputValue, setInputValue, disabled, time, animation, handleInput, handleStart} = props;
	return (
		<div className="typeRacer">
			<div className="wordOutput">
				<p>{newWord}</p>
			</div>
			<div style={{animation: animation !== null ? animation : ""}} className="time">
				<p>{time}</p>
			</div>
			<div className="wordValues">
				<input
					type="text"
					value={inputValue}
					disabled={disabled}
					onKeyPress={(e) => handleInput(e)}
					placeholder={disabled ? "" : "Start Typing..."}
					onChange={e => {setInputValue(e.target.value)}}
				/>
				<Button
					handleStart={handleStart}
					disabled={disabled}
				/>
			</div>
		</div>
	);
}

export default Typeracer;