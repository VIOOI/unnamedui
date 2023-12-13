import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { UserConfigExport } from "vite";
import { name } from "./package.json";
import unplugin from "@beqa/unplugin-transform-react-slots";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import cleanPlugin from "vite-plugin-clean";

// import { ViteAliases } from 'vite-aliases'

const app = async (): Promise<UserConfigExport> => {
	/**
	 * Removes everything before the last
	 * @octocat/library-repo -> library-repo
	 * vite-component-library-template -> vite-component-library-template
	 */
	const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

	return defineConfig({
		plugins: [
			// ViteAliases({
			//   dir: path.resolve(__dirname, "src/lib"),
			//   prefix: "@",
			// }),
			cleanPlugin({
				targetFiles: ["dist", "test"],
			}),
			unplugin.vite(),
			react(),
			dts({ insertTypesEntry: true }),
			ViteMinifyPlugin(),
		],
		css: {
			postcss: {
				plugins: [tailwindcss],
			},
		},
		build: {
			lib: {
				entry: path.resolve(__dirname, "src/index.ts"),
				name: formattedName,
				formats: ["es", "umd"],
				fileName: format => `${formattedName}.${format}.js`,
			},
			rollupOptions: {
				external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
				output: {
					globals: {
						react: "React",
						"react/jsx-runtime": "react/jsx-runtime",
						"react-dom": "ReactDOM",
						tailwindcss: "tailwindcss",
					},
				},
			},
		},
		test: {
			globals: true,
			environment: "jsdom",
		},
	});
};
// https://vitejs.dev/config/
export default app;
