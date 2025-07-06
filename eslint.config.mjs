import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 'any'の使用をエラーとして検出する
      "@typescript-eslint/no-explicit-any": "error",
      // 他に追加したいルールがあればここへ記述
    },
  },
];

export default eslintConfig;
