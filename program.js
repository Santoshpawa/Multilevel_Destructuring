const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
                 { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let ans=[];
for( const {
    name :n,
    address:{
                city,
                street:{
                        name,
                        number
                }
    }
} of people){
     let person=`${n} lives in ${city} on ${name}`
     console.log(person)
}

