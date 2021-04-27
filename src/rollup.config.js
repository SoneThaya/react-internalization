import typescript from "rollup-plugin-typescript2";
import { transform } from "@formatjs/ts-transformer";

export default {
  input: "./main.ts",

  plugins: [
    typescript({
      transformers: () => ({
        before: [
          transform({
            overrideIdFn: "[sha512:contenthash:base64:6]",
            ast: true,
          }),
        ],
      }),
    }),
  ],
};
