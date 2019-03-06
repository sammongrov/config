import ErrorMessage from '../errors';

it('error messages', () => {
  const errors = {
    default: 'Hmm, an unknown error occured',
    timeout: 'Server Timed Out. Check your internet connection',
    invalidJson: 'Response returned is not valid JSON',
    invalidFirebase: 'Firebase is not connected correctly',
    memberExists: 'Member already exists',
    missingFirstName: 'First name is missing',
    missingLastName: 'Last name is missing',
    missingEmail: 'Email is missing',
    missingPassword: 'Password is missing',
    passwordsDontMatch: 'Passwords do not match',
    recipe404: 'Recipe not found',
    missingMealId: 'Missing meal definition',
    localeDoesNotExist: 'Sorry, we do not support that local',
  };
  expect(ErrorMessage).toMatchObject(errors);
});
