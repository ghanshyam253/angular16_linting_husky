module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        "Disallow usage of 'getPaymentsType'. Use 'getPaymentsMethods' instead.",
      recommended: true,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === 'getPaymentsType') {
          context.report({
            node,
            message:
              "The method 'getPaymentsType' is deprecated. Use 'getPaymentsMethods' instead.",
          });
        }
      },
    };
  },
};
