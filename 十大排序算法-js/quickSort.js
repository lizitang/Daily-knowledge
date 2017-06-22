/**
 * Created by test on 2017/6/22.
 */
/*快速排序:对冒泡排序的一种改进
* 平均时间复杂度：O(nlogn)
* 空间复杂度O(log n),不稳定*/

    function quickSort(elements){
        if(elements.length <= 1){
            return elements;
        }
        var pivotIndex = Math.floor(elements.length / 2);//pivot中心点
        var pivot= elements.splice(pivotIndex,1)[0];
        var left=[];
        var right=[];
        for(var i=0;i<elements.length;i++){
            if(elements[i]<pivot){
                left.push(elements[i]);
            } else{
                right.push(elements[i]);
            }
        }
        return quickSort(left).concat([pivot],quickSort(right));
    };

    var arr=[3, 2, 4, 9, 1, 5, 7, 6, 8];
    var arrSorted=quickSort(arr);
    console.log(arrSorted);