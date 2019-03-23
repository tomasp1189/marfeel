import king from 'assets/king.svg';
import lionel from 'assets/lionel-richie.svg';

export default function(number) {
	const baseArticles = [
		{
			img: lionel,
			title: "Is it me you're looking for?",
			description: `I can see it in your eyes
    I can see it in your smile
    You're all I've ever wanted
    And my arms are open wide`
		},
		{
			img: king,
			title: 'No hooks?',
			description:
				"Is this some sort of peasant joke I'm too rich to understand?"
		},
		{
			title: "Y'all Got Any More Of them SVGs?",
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];
	const mockedArticles = [];
	for (let index = 0; index < number; index++) {
		mockedArticles.push(...baseArticles);
	}
	return mockedArticles;
}
