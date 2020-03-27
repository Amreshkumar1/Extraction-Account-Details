var accData =[
  {"accNum": "AAA-1234",
   "user":"Alice"},
  {"accNum": "AAA-5231",
   "user":"Bob"},
  {"accNum": "AAA-9921",
   "user":"Alice"},
  {"accNum": "AAA-8191",
   "user":"Alice"},
];
 
balance={
  "AAA-1234": 4593.22,
  "AAA-5231": 0,
  "AAA-9921": 232142.5,
  "AAA-8191": 4344
};
 
//user //sortBy("accNum" or "balance") // sortDirection("asc","desc" def = asc)
//filter bob
//filter charlie
//sortby accNum
//filter by alice sort by bal asc
 
function prog2(){
    var acNo=[];
                if(arguments[0] != undefined && arguments[1]== undefined && arguments[2]== undefined ){
                                accData.map(item=>{ if(item.user.toUpperCase() == arguments[0].toUpperCase()) { acNo.push(item.accNum);} })     
                }
    else if(arguments[0] == null && arguments[1] != undefined && arguments[2]== undefined ){
       acNo = accData.map(item=>{ return Object.assign( item , {"balance" : balance[item.accNum]} )})
       acNo = Sort(acNo,arguments[1]).map(item=>{ return item.accNum }); 
       
    }
    else if(arguments[0] != undefined && arguments[1] != undefined && arguments[2] != undefined ){
       acNo = accData.filter(item=>{ if(item.user.toUpperCase() == arguments[0].toUpperCase()) {  return item } })
       acNo.map(item=>{ return Object.assign( item , {"balance" : balance[item.accNum]} )})
       acNo = Sort(acNo,arguments[1],arguments[2]).map(item=>{ return item.accNum });               
    }
    return acNo;  
                }
 
function Sort(list,prop,dir){   
    if(dir == null || dir == "asc" || dir == undefined){       
      return list.sort((a, b) => { return  a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0 })     
    }
    else if(dir == "desc"){
      return list.sort((a, b) => { return  a[prop] > b[prop] ? -1 : a[prop] < b[prop] ? 1 : 0 })         
     }
  }
 
 
var result1=prog2("bob");console.log("Result 1",result1);
var result2=prog2("charlie");console.log("Result 2",result2);
var result3=prog2(null,"accNum");console.log("Result 3",result3);
var result4=prog2("Alice","balance","asc");console.log("Result 4",result4);
var result5=prog2("Alice","balance","desc");console.log("Result 5",result5);
var result6=prog2(null,"balance");console.log("Result 6",result6);