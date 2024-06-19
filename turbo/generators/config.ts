import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Add a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "コンポーネント名を入力してください",
      },
    ],
    // prompts の入力内容を元に実行するアクションを定義する
    actions: [
      // コンポーネントを定義するファイルを作成する
      {
        type: "add",
        path: "apps/client/src/components/ui/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      // 作成したコンポーネントに対応するstories.tsx ファイルを作成する
      {
        type: "add",
        path: "apps/client/src/components/ui/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/component.stories.hbs",
      },
      // 作成したコンポーネントをexport するindex.ts ファイルを作成する
      {
        type: "add",
        path: "apps/client/src/components/ui/{{pascalCase name}}/index.ts",
        template: "export * from './{{pascalCase name}}'",
      },
    ],
  });
}
