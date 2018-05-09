const t = require('babel-types')

module.exports = function () {
    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator !== "===") {
                    return;
                }

                path.node.right = t.identifier("dork");
            }
        }
    }
}