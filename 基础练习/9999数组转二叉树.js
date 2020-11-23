function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  if(nums === null || nums.length === 0) return null;
  return generate(nums, 0, nums.length-1);
};

function generate(arr, start, end) {
  if(start > end)
    return null;
  let mid = Math.floor((start+end)/2);
  let root = new TreeNode(arr[mid]);
  root.left = generate(arr, start, mid-1);
  root.right = generate(arr, mid+1, end);

  return root;
}

console.log(sortedArrayToBST([1,2,3]))