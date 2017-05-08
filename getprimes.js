var getPrimes = function(n){
    
    var i,j;
    var primeNumbers = [];
    for( i =2; i<=n; i++){
        for( j=2; j<=i; j++){
            if((i%j) == 0){
                break;
            }
            
        }
            if (i==j){
              
                primeNumbers.push(i);
                
        
            }
        
    }
    
    
  console.log(primeNumbers)
}

getPrimes(9)