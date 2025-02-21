module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce usage of trackBy in *ngFor bindings',
      recommended: true,
    },
    schema: [], // no options
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();
    const ngForRegex = /\*ngFor\s*=\s*(['"`])(.*?)\1/gi;
    let match;
    while ((match = ngForRegex.exec(text)) !== null) {
      const ngForContent = match[2];
      if (!/trackBy\s*[:(]/.test(ngForContent)) {
        const loc = sourceCode.getLocFromIndex(match.index);
        context.report({
          message: 'Elements using *ngFor must use a trackBy function.',
          loc,
        });
      }
    }
    return {};
  },
};
