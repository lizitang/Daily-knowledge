/**
 * Created by test on 2017/6/22.
 */
/*快速排序:对冒泡排序的一种改进
* 平均时间复杂度：O(nlogn)
* 空间复杂度O(log n),不稳定*/

    function quickSort(ele){
        if(ele.length <= 1){
            return ele;
        }
        var pivotIndex = Math.floor(ele.length / 2);//pivot中心点
        var pivot= ele.splice(pivotIndex,1)[0];
        var left=[];
        var right=[];
        for(var i=0;i<ele.length;i++){
            if(ele[i]<pivot){
                left.push(ele[i]);
            } else{
                right.push(ele[i]);
            }
        }
        return quickSort(left).concat([pivot],quickSort(right));
    };

    var arr=[3, 2, 4, 9, 1, 5, 7, 6, 8];
    var arrSorted=quickSort(arr);
    console.log(arrSorted);