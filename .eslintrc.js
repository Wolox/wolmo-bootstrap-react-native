module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier",
    "flowtype"
  ],
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "globals": {
    "__DEV__": true,
  },
  "rules": {
    "prettier/prettier": ["error", { printWidth: 110, singleQuote: true }],
    "no-invalid-this": "off",
    "consistent-return": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".ejs"] }],
    "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] } ],
    "import/order": ["error", {"newlines-between": "always"}],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "error",
    "react/no-typos": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".android.js",
          ".ios.js"
        ]
      }
    }
  }
};
