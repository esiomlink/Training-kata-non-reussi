let arr = [452,603,925,825,689,656,538,586,293,440,622,52,842,925,287,221,351,954,89,220,943,438,607,431,118,644,66,629,776,249]
let tab= []
let finalTab =[]
let index;

let sr =arr.slice().sort((a,b)=>a-b)
let inv =arr.slice().sort((a,b)=>b-a)
if(sr.join()===arr.join()){
    console.log(arr)
}
else if(inv.join()===arr.join()){
    console.log(arr[0])
   }else {    
       for(let i = 0 ; i<arr.length ; i++){
          if(arr[i]>arr[i+1]){
            tab.push(arr[i+1])
          }
      }   
       
    index= arr.indexOf(tab[0])
    finalTab.push(tab[0])
       
    for(let j=index;j<arr.length;j++){
      if(arr[j]>tab[0]){
        finalTab.push(arr[j])
      }
    }
  
    let del;
      
    for(let h = 0 ; h < finalTab.length ; h++){
      if(finalTab[h]>finalTab[h+1]){
      del = finalTab.indexOf(finalTab[h])
      }
    }
      finalTab.splice(del,1)
      
      console.log(finalTab)
     }
   
  
  