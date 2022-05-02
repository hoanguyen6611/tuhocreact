import React, { useState } from 'react';

const Input = () => {
	const [fullname, setFullname] = useState("");
	const handleInputChange = (event) => {
		console.log(event.target);
	}
	return (
		<div className="p-5">
			<input
				type="text"
				name="fullname"
				className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
				placeholder="Enter your name"
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Input;