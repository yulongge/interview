/**
 * 排序
 * 参考：https://segmentfault.com/a/1190000016286789
 * 参考：https://www.runoob.com/w3cnote/selection-sort.html
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

function bubbleSortDown(arr) {
	var len = arr.length;
	for(var i=0; i<len; i++) {
		for(var j =0; j < len - i -1; j++) {
			var temp = arr[j];
			if(arr[j] < arr[j + 1]) {
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr, 'after bubbleSortDown')
}

//bubbleSort(sortArr);
//bubbleSortDown(sortArr);

/**
 * 选择排序
 * 选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧
 * 
 * 1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
 * 2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3.重复第二步，直到所有元素均排序完毕
 */

function selectionSort(arr) {
	var len = arr.length;
	for(var i = 0; i< len - 1; i++) {
		var minIndex = i; 
		var minItem = arr[i];
		for(var j = i + 1; j<len; j++) {
			if(arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		arr[i] = arr[minIndex]; 
		arr[minIndex] = minItem;
	}
}

 //selectionSort(sortArr)

 /**
  * 插入排序
  * 第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
  * 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
  */
function insertionSort(arr) {
	var len = arr.length;
	var preIndex, current;
	for(var i = 1; i<len; i++) {
		preIndex = i-1;
		current = arr[i];
		while(preIndex >=0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex --;
		}
		arr[preIndex +1] = current;
	}
	console.log(arr, 'arr')
}

insertionSort(sortArr)
//console.log(sortArr, 'sortArr')
