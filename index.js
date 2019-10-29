// Code your solution here
function findMatching(drivers, string){
//    string.toLowerCase
   let filtering = drivers.filter( d => {
       return new RegExp(string, 'i').test(d)
   })
   return filtering
}

function fuzzyMatch(drivers, string){
    console.log(string)
       let filtering = drivers.filter( d => {
           d.toLowerCase
         return  d.startsWith(string)
       })
       return filtering
    }

    function matchName(drivers, string){
        // console.log(string)
           let filtering = drivers.filter( d => {
            return d['name'] === string
           })
           return filtering
        }
    