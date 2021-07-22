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

const postNewPlace = async (obj) => {
  try {
    const res = await fetch(`${fetchApiUrl}/addNewPlace`, {
      method: 'POST',
      body: JSON.stringify(obj),
      ...reqOptions,
    });
    const result = await res.json();
    console.log('New Place Created: ', result);
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

const deleteOnePlace = async (id) => {
  try {
    const resp = await fetch(`${fetchApiUrl}/delete/${id}`, {
      method: 'DELETE',
      ...reqOptions,
    });
    await resp.json();
  } catch (err) {
    console.log('Delete user failed.. ', err);
  }
};

const editOnePlace = async (id, newBody) => {
  const resp = await fetch(`${fetchApiUrl}/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newBody),
    ...reqOptions,
  });
  await resp.json();
};

export { postNewPlace, getAllPlaces, deleteOnePlace, editOnePlace };
