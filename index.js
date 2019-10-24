// Code your solution here

let findMatching = (array,driver) => {
    return array.filter(d => {
        return d.toLowerCase() === driver.toLowerCase()
  })
}

let fuzzyMatch = (drivers,search) => {
     return drivers.filter(d => {
          return d.toLowerCase().indexOf(search.toLowerCase()) === 0
     })
}

let matchName = (drivers, name) => {
      return drivers.filter(d => {
          return d.name.toLowerCase() === name.toLowerCase()
      })

}