"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "at-rule-empty-line-before": [ "always", {
      "ignoreAtRules": [
        "import",
        "first-nested"
      ],
      "except": [
        "first-nested",
        "blockless-after-blockless"
      ],
      "ignore": ["after-comment"]
    }],
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "selector-no-qualifying-type": true,
    "selector-max-id": 0,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "always",
    "selector-attribute-operator-space-after": "always",
    "selector-attribute-brackets-space-inside": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line",
    "declaration-empty-line-before": "never",
    "declaration-colon-newline-after": "always-multi-line",
    "property-no-vendor-prefix": true,
    "number-leading-zero": "always",
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-unless-keyword",
    "comment-whitespace-inside": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": [ "always-multi-line", {
      "ignore": [
        "after-comment"
      ]
    } ],
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always"
  }
}

