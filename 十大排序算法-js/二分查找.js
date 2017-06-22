/**
 * Created by test on 2017/6/22.
 */
/*二分查找，也为折半查找。首先要找到一个中间值，通过与中间值比较，
大的放又，小的放在左边。再在两边中寻找中间值，持续以上操作，
直到找到所在位置为止。*/
//递归方法
    function binarySearch(data,dest,start,end){
        var end = end || data.length-1,
            start = start || 0,
            m = Math.floor((start + end)/2);
        if(data[m] == dest){
            return m;
        }
        if(dest < data[m]){
            return binarySearch(data,dest,0,m-1);
        } else {
            return binarySearch(data,dest,m+1,end)
        }
        return false;
    }
    var arr=[-34,1,3,4,5,8,34,45,65,87];
    console.log(binarySearch(arr,4));

    //非递归方法
    function binarySearch2(data,dest){
        var h=data.length-1;
        var l=0;
        while(l<=h){
           var m=Math.floor((l+h)/2);
           if(data[m]==dest){
               return m;
           }
           if(dest>data[m]){
               l=m+1;
           }else{
               h=m-1;
           }
        }
        return false;
    }
console.log(binarySearch2(arr,4));
