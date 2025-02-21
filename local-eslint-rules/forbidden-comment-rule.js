module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Warn if a comment contains any forbidden text.',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          forbiddenTexts: {
            anyOf: [
              { type: 'string' },
              {
                type: 'array',
                items: { type: 'string' },
              },
            ],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const options = context.options[0] || {};
    let forbiddenTexts = options.forbiddenTexts || [];
    if (typeof forbiddenTexts === 'string') {
      forbiddenTexts = [forbiddenTexts];
    }
    const sourceCode = context.getSourceCode();
    return {
      'Program:exit': function () {
        const comments = sourceCode.getAllComments();
        comments.forEach((comment) => {
          forbiddenTexts.forEach((forbidden) => {
            if (comment.value.includes(forbidden)) {
              context.report({
                node: comment,
                message: "Comment contains forbidden text: '{{forbidden}}'.",
                data: { forbidden },
              });
            }
          });
        });
      },
    };
  },
};
