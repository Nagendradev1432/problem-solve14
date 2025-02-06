let arr1=[0, 1, 0, 3, 12]
let arr2=[],arr3=[]
for(i of arr1){
    if(i>0){
        arr2.push(i)
    }
    else{
        arr3.push(i)
    }
    
}
let finalarray=arr2.concat(arr3)
console.log(finalarray)




let arr1=[5,4,3,1]
let sum=0
for(i of arr1){
    sum=sum+i
}
let missingnumber=((arr1.length+1)*(arr1.length+1+1))/2
console.log(missingnumber-sum)


let arr1=[20,40,50,89,100,230]
let left=0
let right=arr1.length-1
let target=230
while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr1[mid]==target){
        console.log(mid)
    }
    if(arr1[mid]<target){
        left=mid+1
    }
    else{
        right=mid-1
    }
}