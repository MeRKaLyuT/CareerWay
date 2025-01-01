module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "react-hooks",
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["warn", "single"],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
