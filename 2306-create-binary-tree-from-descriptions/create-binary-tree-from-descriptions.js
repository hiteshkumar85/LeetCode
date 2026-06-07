/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let tree = new Map();
    let children = new Set();
    for([parent, child,isLeft] of descriptions) {
        if(!tree.get(parent)) {
            tree.set(parent, new TreeNode(parent));
        }

        if(!tree.get(child)) {
            tree.set(child, new TreeNode(child))
        }

        if(isLeft === 1) {
            tree.get(parent).left = tree.get(child);
        }else {
            tree.get(parent).right = tree.get(child);
        }

        children.add(child);
    }

    for([parent] of descriptions) {
        if(!children.has(parent)) {
            return tree.get(parent);
        }
    }
};