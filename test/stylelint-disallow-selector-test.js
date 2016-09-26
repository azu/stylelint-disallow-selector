require("babel-register");
var test = require('stylelint-test-rule-tape');
var fn = require('../src/stylelint-disallow-selector');

test(fn.rule, {
    ruleName: fn.ruleName,
    skipBasicChecks: true,
    config: {
        "disallow": [
            "use"
        ]
    },
    accept: [
        {
            code: '.c{}'
        },
        {
            code: '.c { display: var(--use); }'
        },
        {
            code: '.use {}'
        }
    ],
    reject: [
        {
            code: 'use { }',
            message: fn.messages.rejected("use")
        },
        {
            code: '.c use{}',
            message: fn.messages.rejected(".c use")
        },
        {
            code: '.c use d{}',
            message: fn.messages.rejected(".c use d")
        }
    ]
});