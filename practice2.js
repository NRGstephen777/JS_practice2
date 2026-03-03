let array=[]
let i = 0;

//Exercise 1
while (i < 21){
    array.push(i)
}

//EXERCISE 2
//part 1
for(let j=0; j < array.length; j++){
    console.log(array[i]);
}

// part 2
for(let j=0; j < array.length; j++){
    
    if (array[i]%2 == 1){
        console.log(array[i]);
    }
        
}


//part 3
for(let j=0; j < array.length; j++){
    
    if (array[i] < 10){
        console.log(j)
    }else{
        console.log(j);
        break;
    }
        
}