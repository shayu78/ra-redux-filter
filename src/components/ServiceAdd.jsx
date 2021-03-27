import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ServiceAdd() {
	const item = useSelector((state) => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;
		dispatch({ type: 'CHANGE_SERVICE_FIELD', payload: { field: name, value } });
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const { id, name, price } = item;
		dispatch({ type: 'ADD_SERVICE', payload: { id, name, price } });
	}

	const handleReset = () => dispatch({ type: 'CANCEL_SERVICE' });

	return (
		<form className="form" onSubmit={handleSubmit} onReset={handleReset}>
			<input className="input w-100" name="name" onChange={handleChange} value={item.name} required />
			<input className="input" type="number" min="0" max="999999" name="price" onChange={handleChange} value={item.price} required />
			<button className="button" type="submit">Save</button>
			{item.id && <button className="button" type="reset">Cancel</button>}
		</form>
	);
}
