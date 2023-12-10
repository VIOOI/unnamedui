import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes';
import "../src/lib/tailwind/theme.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			theme: themes.dark,
		},
	},
};

export default preview;
