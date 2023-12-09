import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../schema.graphqls",
  documents: ["src/**/*.vue", "*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
