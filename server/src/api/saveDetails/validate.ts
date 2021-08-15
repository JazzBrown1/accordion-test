const normChars = /^[a-z ,.'-]+$/i;
const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const number = /^[0-9]*$/;

const validate = {
  firstname: (firstname: string): boolean => (
    normChars.test(firstname)
    && firstname.length > 1
    && firstname.length <= 30
  ),
  surname: (surname: string): boolean => (
    normChars.test(surname)
    && surname.length > 1
    && surname.length <= 30
  ),
  email: (emailAd: string): boolean => (
    email.test(emailAd)
    && emailAd.length > 5
    && emailAd.length <= 80
  ),
  dob: (dob: Date | boolean): boolean => (dob instanceof Date),
  gender: (gender: string): boolean => gender === 'M' || gender === 'F',
  telephone: (phonenumber: string): boolean => (
    number.test(phonenumber)
    && phonenumber.length > 1
    && phonenumber.length <= 30
  ),
  comments: (comments: string): boolean => comments.length <= 300,
};

export default validate;
