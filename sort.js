/**
 * 排序
 * 参考：https://segmentfault.com/a/1190000016286789
 */
var sortArr = [7,2, 5, 4, 6, 8, 9];

/**
 * 冒泡排序
 * 这个是最简单的排序，就像气泡从水里冒出来。它每执行一次外层循环，就会将最小数（或最大的）放到数组最后，然后再寻找剩余部分的最小数（或最大的）放在这一部分的最后，以此类推 
 * 冒泡排序的时间复杂度为O(n2)，空间复杂度为O(1)，属于 稳定 排序。适用于数据比较少或基本有序的情况。
 */


function bubbleSort(arr) {
    var len = arr.length;
    for(var i =0; i< len; i++) {
        for(var j = 0; j<len-i-1; j++) {
            var temp = arr[j];
            if(arr[j] > arr[j+1]) {
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr, 'after sort')
}

/**
 * 选择排序
 * 选择排序也很简单。它每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完
 * 选择排序的时间复杂度为O(n2)，空间复杂度为O(1)，属于 稳定 排序。适用于数据比较少的情况，综合各种情况来讲还是这个最慢。
 */


bubbleSort(sortArr);
console.log(sortArr, 'sortArr')