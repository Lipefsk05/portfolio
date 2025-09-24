module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: ["node_modules/", "src/components/galaxy/"], // ignora o Galaxy
  rules: {
    "@typescript-eslint/no-unused-vars": "warn"
  },
};
