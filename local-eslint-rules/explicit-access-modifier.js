module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce that each class property has an access modifier',
      category: 'Best Practices',
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      // Check class fields (for TypeScript, node type might be 'PropertyDefinition' or 'ClassProperty')
      ClassProperty(node) {
        // For TypeScript nodes, access modifier is recorded in the 'accessibility' property
        if (!node.accessibility) {
          context.report({
            node,
            message: "Class property '{{name}}' must have an access modifier.",
            data: {
              name: node.key.name,
            },
          });
        }
      },
      // For Babel parser, class fields may be 'PropertyDefinition'
      PropertyDefinition(node) {
        if (!node.accessibility) {
          context.report({
            node,
            message: "Class property '{{name}}' must have an access modifier.",
            data: {
              name: node.key.name,
            },
          });
        }
      },
    };
  },
};
