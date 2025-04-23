import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// 現在のファイルとディレクトリのパスを取得
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompatを使用して、ESLintの設定を拡張
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint設定の配列を作成
const eslintConfig = [
  // Next.js と TypeScript の設定を拡張
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-var": "off",  // 'var' を許可する
      "@typescript-eslint/no-explicit-any": "off",  // 'any' 型の使用を許可する
    },
  },
];

// ESLint設定をエクスポート
export default eslintConfig;

