let person = [
    {
        'firstName': 'Ankit',
        'lastName': 'Raj',
        'Office-Address': 'Delhi'
    },
    {
        'firstName': 'Anshu',
        'lastName': 'Kumar',
        'Office-Address': 'Kolkata'
    },
    {
        'firstName': 'Mohan',
        'lastName': 'Kumar',
        'Office-Address': 'Chandigarh'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("---"+key + " " + val[key]);
}

}