import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => ({
      status: 200,
      value: values,
    }))
    .catch((error) => ({
      status: error.status,
      value: error.message,
    }));
}
