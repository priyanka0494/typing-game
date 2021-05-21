import React from 'react';

const Results = (props) => {
	const { correctResults, wrongResults, countCorrect } = props;
	return (
		<div className="results">
			<div className="title">
				<p>Correct Answer: {countCorrect}</p>
			</div>
			<div className="resultsContainer">
				<div className="correctResults">
					{correctResults.map((correctWord, index) => (
						<div key={index} className="row">
							<p>{correctWord}</p>
						</div>
					))}
				</div>
				<div className="wrongResults">
					{wrongResults.map((wrongWord, index) => (
						<div key={index} className="row">
							<p>{wrongWord}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Results;