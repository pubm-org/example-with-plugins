import { defineConfig } from "@pubm/core";
import brewPlugin from "@pubm/plugin-brew";
import externalVersionSync from "@pubm/plugin-external-version-sync";

export default defineConfig({
  packages: [{ path: ".", registries: ["npm"] }],
  branch: "main",
  plugins: [
    brewPlugin({
      formulaRepo: "pubm-org/homebrew-tap",
      formulaName: "pubm-test-with-plugins",
    }),
    externalVersionSync({
      files: [{ path: "version.txt", pattern: "{{version}}" }],
    }),
  ],
});
