const getEmails = (people, { withNames = false, onlyActive = false} = { withNames: false, onlyActive: false}) => {
  if (onlyActive) {
    people = people.filter(isActive)
  }


  return people.map((person)=> {
    let result = ''

    if (withNames) {

      result = `${person.name} <${person.email}>`
    } else {
      result = person.email
    }

    return result
  }).join(', ')
}




const getAddresses = (people, {onlyActive = true} = { onlyActive: false }) => {

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map((person)=> {
    let address = person.address
    let fullAddress =`${person.name}\n${address.line1}\n`

    if (address.line2) {
      fullAddress += `${address.line2}\n`
    }

    fullAddress += `${address.city}, ${address.state}`
    return fullAddress
  }).join('\n\n')
}

const getYoungest = (people)  =>{
  people.sort((personA, personB)=> {
    return personA.age - personB.age
  })
  const [ youngest, ...others ] = people
//!!!
  return {
    youngest,
    others
  }
}

const isActive = (person) => {
  return person.isActive
}

module.exports = {
  getEmails,
  getAddresses,
  getYoungest
}
