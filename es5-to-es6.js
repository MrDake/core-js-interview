
let person = {
    name: 'Anna',
    age: 56,
    job: {
      company: 'Tesco',
      title: 'Manager'
    }
  };
  
  function getInfo(person) {
    var age = person.age,
      yearOfBirth = 2018 - age,
      name = person.name,
      company = person.job.company;
    console.log(`${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
  }
  getInfo(person);
  
  
  const getInfoES6 = (person) => {
      const { name, job: { company }, age, yearOfBirth = new Date().getFullYear() - age } = person;
      console.log(`${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
  }
  getInfoES6(person);