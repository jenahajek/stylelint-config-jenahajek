"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
		"order/order": [
      "custom-properties",
      "dollar-variables",
      {
        "type": "at-rule",
        "hasBlock": false
      },
      "declarations",
      {
        "type": "at-rule",
        "hasBlock": true
      },
      "rules"
    ],
    "order/properties-order": [
      [
        {
          "groupName": "grid",
          "properties": [
            "grid-template-columns",
            "grid-template-rows",
            "grid-template-areas",
            "grid-template",
            "grid-auto-columns",
            "grid-auto-rows",
            "grid-auto-flow",
            "grid",
            "grid-row-start",
            "grid-column-start",
            "grid-row-end",
            "grid-column-end",
            "grid-row",
            "grid-column",
            "grid-area",
            "row-gap",
            "column-gap",
            "gap"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "box-sizing",
          "properties": [
            "box-sizing"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "position",
          "properties": [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "float",
            "clear"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "align-content",
          "properties": [
            "align-content",
            "align-items",
            "align-self"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "flex",
          "properties": [
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "justify-content"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "order",
          "properties": [
            "order"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "columns",
          "properties": [
            "columns",
            "column-gap",
            "column-fill",
            "column-rule",
            "column-rule-width",
            "column-rule-style",
            "column-rule-color",
            "column-span",
            "column-count",
            "column-width"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "transform",
          "properties": [
            "backface-visibility",
            "perspective",
            "perspective-origin",
            "transform",
            "transform-origin",
            "transform-style"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "transitions",
          "properties": [
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "visibility",
          "properties": [
            "visibility",
            "opacity",
            "z-index"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "margin",
          "properties": [
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "outline",
          "properties": [
            "outline",
            "outline-offset",
            "outline-width",
            "outline-style",
            "outline-color"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "border",
          "properties": [
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "border-image",
            "border-image-source",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "background",
          "properties": [
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-repeat",
            "background-size"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "cursor",
          "properties": [
            "cursor"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "padding",
          "properties": [
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "width",
          "properties": [
            "width",
            "min-width",
            "max-width"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "height",
          "properties": [
            "height",
            "min-height",
            "max-height"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "overflow",
          "properties": [
            "overflow",
            "overflow-x",
            "overflow-y",
            "resize"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "list-style",
          "properties": [
            "list-style",
            "list-style-type",
            "list-style-position",
            "list-style-image",
            "caption-side"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "tables",
          "properties": [
            "table-layout",
            "border-collapse",
            "border-spacing",
            "empty-cells"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "animation",
          "properties": [
            "animation",
            "animation-name",
            "animation-duration",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "animation-fill-mode",
            "animation-play-state"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "vertical-align",
          "properties": [
            "vertical-align"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "text-alignment-decoration",
          "properties": [
            "direction",
            "tab-size",
            "text-align",
            "text-align-last",
            "text-justify",
            "text-indent",
            "text-transform",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-rendering",
            "text-shadow",
            "text-overflow"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "text-spacing",
          "properties": [
            "line-height",
            "word-spacing",
            "letter-spacing",
            "white-space",
            "word-break",
            "word-wrap",
            "color"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "font",
          "properties": [
            "font",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-weight",
            "font-smoothing",
            "osx-font-smoothing",
            "font-variant",
            "font-style"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "content",
          "properties": [
            "content",
            "quotes"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "counters",
          "properties": [
            "counter-reset",
            "counter-increment"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        },
        {
          "groupName": "breaks",
          "properties": [
            "page-break-before",
            "page-break-after",
            "page-break-inside"
          ],
          "emptyLineBefore": "never",
          "noEmptyLineBetween": true
        }
      ],
      { "unspecified": "bottom" }
    ],
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

