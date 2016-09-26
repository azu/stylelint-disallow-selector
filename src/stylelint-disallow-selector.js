// LICENSE : MIT
"use strict";
const stylelint = require('stylelint');
export const ruleName = 'azu/disallow-selector';
export const messages = stylelint.utils.ruleMessages(ruleName, {
    rejected: (selector) => {
        return `You should not use disallowed selector: "${selector}".`
    }
});

module.exports = stylelint.createPlugin(ruleName, (options) => (cssRoot, result) => {
    const disallowValues = options.disallow || [];
    cssRoot.walkRules(function(rule) {
        const selectors = rule.selectors;
        selectors.filter(selector => {
            const chunks = selector.split(/\s+/g);
            return chunks.some(chunk => {
                return disallowValues.indexOf(chunk) !== -1;
            });
        }).forEach(selector => {
            stylelint.utils.report({
                message: messages.rejected(selector),
                node: rule,
                result: result,
                ruleName: ruleName
            })
        });
    });
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;