function INC(input){return input+1;} //function INC() array return increment value of input by +1 
function DEC(input){return input-1;} //function DEC() array return decrement value of input by -1
let counterReducer=[INC,DEC]; //counterReducer object refers to functional array values of INC and DEC
const result=counterReducer.reduce(function(actionType,counter){ //counterReducer function has actionType and counter parameters. const variable result object stores return values of function counterFunction reduce method of function counter parameter actiontype.
   if(INC){ //if condition checks for one of the two values of actionType and if it is INC 
       actionType=actionType+1; //then it increments the counter by +1 and return counter
   }
   if(DEC){ //if condition checks for one of the two values of actionType and if it is DEC
        actionType=actionType-1; //then it decrement the counter by -1 and return counter likewise adds on to the previous value of counter
   }
        return counter(actionType); //counter function with the aggregate actionType parameter returns the increment and decrement of INC and DEC functions respectively.
    
},[]); //function counterReducer array values are incremented and decremented according to the if conditional process and function counter parameter actionType is returned as result object.

