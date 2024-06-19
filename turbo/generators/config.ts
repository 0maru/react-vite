import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("component", {
		description: "Add a new component",
    // アクションに対して変数の値を求める
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the component?",
			},
			{
				type: "list",
				name: "app",
				message: "Choose the app to which the organisms component belongs.:",
				choices: ["client"],
			},
		],
		// アクションを定義する
		actions: [
			{
				type: "add",
				path: "apps/client/src/components/ui/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "templates/component.hbs",
			},
			{
				type: "add",
				path: "apps/client/src/components/ui/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: "templates/component.stories.hbs",
			},
			{
				type: "add",
				path: "apps/client/src/components/ui/{{pascalCase name}}/index.ts",
				templateFile: "export * from './{{pascalCase name}}'",
			},
		],
	});
}
