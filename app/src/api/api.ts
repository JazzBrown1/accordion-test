import { CombinedTabData, simpleDateToDate } from '../Pages/Main/Main';

export interface DetailsPayload {
  firstname: string,
  surname: string,
  email: string,
  dob: string | Date,
  gender: string,
  comments: string,
  telephone: string,
}

export interface DetailsResponse {
  firstname: string,
  surname: string,
  email: string,
  dob: string,
  gender: string,
  comments: string,
  telephone: string,
}

const sendDetails = async (data: CombinedTabData):Promise<DetailsResponse | false> => {
  // This is all pre parsed this should never happen
  if (!data.details || !data.final || !data.more) return false;
  const parsedDate = simpleDateToDate(data.more.dob);
  if (!parsedDate) return false;
  const payload : DetailsPayload = {
    firstname: data.details.firstname,
    surname: data.details.surname,
    email: data.details.email,
    dob: parsedDate,
    gender: data.more.gender,
    comments: data.final.comments,
    telephone: data.more.phoneNumber,
  };
  try {
    const response = await fetch('/api/saveDetails', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(payload),
    });
    if (!response) return false;
    const json:DetailsResponse = await response.json();
    return json;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return false;
  }
};

export default sendDetails;
