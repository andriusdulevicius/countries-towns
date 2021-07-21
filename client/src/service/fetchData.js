const fetchApiUrl = 'http://localhost:5000';
const reqOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};

const postNewPlace = async (obj, successCallback) => {
  try {
    const res = await fetch(`${fetchApiUrl}/addNewPlace`, {
      method: 'POST',
      body: JSON.stringify(obj),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('New Place Created: ', result);
    successCallback(result);
  } catch (err) {
    console.log('Error occured: ', err);
  }
};

const getAllPlaces = async () => {
  try {
    const res = await fetch(`${fetchApiUrl}/AllPlaces`, reqOptions);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('Get all users error: ', err);
  }
};

export { postNewPlace, getAllPlaces };
