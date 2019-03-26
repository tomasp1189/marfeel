import { useEffect, useState } from 'react';

function useElementOffsetHeight(selector) {
	let element = document.querySelector(selector);

	let [position, setPosition] = useState(0);

	useEffect(() => {
		element = document.querySelector(selector);
		if (!element) return;

		let handleScroll = () => {
			setPosition(element.scrollTop);
		};

		element.addEventListener('scroll', handleScroll);

		return () => {
			element.removeEventListener('scroll', handleScroll);
		};
	});

	return position;
}

export default useElementOffsetHeight;
