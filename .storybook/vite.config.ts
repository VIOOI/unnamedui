import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tailwindcss from "tailwindcss";
import { UserConfigExport } from "vite";
import unplugin from "@beqa/unplugin-transform-react-slots";

const app = async (): Promise<UserConfigExport> => {
	return defineConfig({
		plugins: [unplugin.vite(), react()],
		css: {
			postcss: {
				plugins: [tailwindcss],
			},
		},
	});
};
// https://vitejs.dev/config/
export default app;
