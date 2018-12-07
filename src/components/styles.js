import { fadeIn, fadeInUp } from 'react-animations';
import Radium from 'radium';

export const animStyles = {

	fadeIn: {
			animation: 'x 1.4s',
			animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},

	fadeInUp: {
		animation: 'x 0.7s',
		animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
}
}