import theme from 'vitepress/theme';
import DemoBlock from '../components/demo-block';
import { highlight } from '../components/highlight';

export default {
	...theme,
	enhanceApp({ app }) {
		app.component('Demo', DemoBlock);
		app.component('highlight-code', highlight);
	},
};
