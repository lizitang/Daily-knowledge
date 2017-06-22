/**
 * Created by test on 2017/6/22.
 */
/*比较相邻的两个元素，前一个比后一个大则交换元素
* 内排序
* 稳定
* 平均时间复杂度：O(n^2)*/
    function bubbleSort(arr){
        var i= arr.length;
        var tempExchangVal;
        while(i>0){
            for(var j= 0;j< i-1;j++){
                if(arr[j]>arr[j+1]){
                    tempExchangVal=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=tempExchangVal;
                }
            }
            i--;
        }
        return arr;
    }


    function sort(arr){
        for(var i=0;i<arr.length-1;i++){
            for(var j=0;j<arr.length-i-1;j++){
               if(arr[j]>arr[j+1]){
                   var temp=arr[j];
                   arr[j]=arr[j+1];
                   arr[j+1]=temp;
               }
            }
        }
    }
    var arr=[3, 2, 4, 9, 1, 5, 7, 6, 8];
    var arrSorted=bubbleSort(arr);
    console.log(arrSorted);
    var arr2=sort(arr);
    console.log(arr2);

