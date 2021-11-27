var persons={
    person1:{
        firstname:"Arjun",
        lastname:"Singh",
        Officeaddress:"Madunagar deori road ,Agra."},
    person2:{
       firstname:"Amit",
       lastname:"Shinha",
       Officeaddress:"Laxmi nagar kota, Rajasthan."},
    person3:{
       firstname:"Vijay",
       lastname:"Bharduaj",
       Officeaddress:"Noida Delhi."}
};

function fullnameandAddress(str){
       console.log(str);
}
fullnameandAddress(persons.person1);
fullnameandAddress(persons.person2);
fullnameandAddress(persons.person3);

console.log(persons.person1.lastname);
console.log(persons.person1.firstname);
console.log(persons.person1.Officeaddress);

console.log(persons.person2.firstname);
console.log(persons.person2.lastname);
console.log(persons.person2.Officeaddress);

console.log(persons.person3.firstname);
console.log(persons.person3.lastname);
console.log(persons.person3.Officeaddress);
