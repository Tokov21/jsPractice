getFirst = (arr) => {
  let [first] = arr;
  return first;
};

getFifth = (arr) => {
  let [, , , , five] = arr;
  return five;
};

getSecondAndThird = (arr) => {
  let [, second, third, ,] = arr;
  return `${second} ${third}`;
};

// console.log(getFirst([1]));

// console.log(getFifth([, , , , 5]));

// console.log(getSecondAndThird([, 2, 3, ,]));

const obj = {
  name: "Tolya",
  surname: "Homyakov",
  email: "flyingcatsad@gmail.com",

  phones: {
    home: "+38095623523",
    mobile: "+38032423523",
  },

  address: {
    street: {
      name: "Soborniy",
      number: "230",
    },

    city: "Zaporozhye",
  },
};

getUserEmail = () => {
  let { email } = obj;

  return email;
};

getUserFullName = () => {
  let { name, surname } = obj;

  return `${name} ${surname}`;
};

getUserPhones = () => {
  let {
    phones: { home, mobile },
  } = obj;

  return { home, mobile };
};

getUserAddress = () => {
  let address = { ...obj.address };

  return obj.address !== undefined ? address : null;
};

getUserStreetName = () => {
  let {
    address: {
      street: { name },
    },
  } = obj;

  return obj.address.street !== undefined ? name : null;
};

console.log(getUserEmail());

console.log(getUserFullName());

console.log(getUserPhones());

console.log(getUserAddress());

console.log(getUserStreetName());
