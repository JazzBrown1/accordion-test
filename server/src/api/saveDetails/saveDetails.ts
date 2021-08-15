import { RequestHandler } from 'express';
import sequelize from '../../db/sequelize';

import User from '../../db/User';
import validate from './validate';

export interface DetailsPayload {
  firstname: string,
  surname: string,
  email: string,
  dob: string | Date,
  gender: string,
  comments: string,
  telephone: string,
}

export interface DetailsPayloadWDate extends DetailsPayload {
  dob: Date,
}

const validateAll = (data: DetailsPayload): boolean => {
  if (
    !validate.firstname(data.firstname)
  || !validate.surname(data.surname)
  || !validate.email(data.email)
  || !validate.dob(new Date(data.dob))
  || !validate.gender(data.gender)
  || !validate.telephone(data.telephone)
  || !validate.comments(data.comments)
  ) return false;
  return true;
};

const saveDetails: RequestHandler = async (req, res, error) => {
  try {
    const { body }: { body:DetailsPayload } = req;
    body.dob = new Date(body.dob); // parse the date

    // Validate payload and send a 400 if request is bad
    if (!validateAll(body)) {
      res.sendStatus(400);
      return;
    }

    await sequelize.sync();
    const user = await User.create(body);
    const json = user.toJSON();

    // Success send 200
    res.status(200).json(json);
  } catch (err) {
    error(err || new Error('Unknown Exception Thrown'));
  }
};

export default saveDetails;
