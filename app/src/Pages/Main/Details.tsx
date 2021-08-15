/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AccordionSlotKey } from '../../Accordian/Accordion';
import AccordionTab from '../../Accordian/AccordionTab';
import { DetailsTabData } from './Main';
import PARSE from './validate';

// Want to add some messages but not sure where to add them on the page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ERROR_MESSAGES = {
  firstname: 'First name field must be under 30 characters and contain no special characters',
  surname: 'First name field must be under 30 characters and contain no special characters',
  email: 'First name field must be under 80 characters and contain no special characters',
};

interface Props {
  onComplete: (data: DetailsTabData, slot?: AccordionSlotKey) => void
}

const DetailsTab = ({ onComplete } : Props) => {
  const [firstname, setFirstName] = useState<string>('');
  const [fnError, setFnError] = useState(false);
  const [surname, setSurname] = useState<string>('');
  const [snError, setSnError] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [emError, setEmError] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  // eslint-disable-next-line no-shadow
  const parse = () => {
    let error = false;
    if (!PARSE.firstname(firstname)) {
      setFnError(true);
      error = true;
    } else setFnError(false);
    if (!PARSE.surname(surname)) {
      setSnError(true);
      error = true;
    } else setSnError(false);
    if (!PARSE.email(email)) {
      setEmError(true);
      error = true;
    } else setEmError(false);
    return !error;
  };

  const handleNext = () => {
    if (parse()) onComplete({ firstname, surname, email });
    else setShouldValidate(true);
  };

  const handleClose = (newTab: AccordionSlotKey) => {
    if (parse()) onComplete({ firstname, surname, email }, newTab);
    else setShouldValidate(true);
  };

  return (
    <AccordionTab slotKey="1" title="Step 1: Your details" onNext={handleNext} onClose={handleClose}>

      <label className={`input-label${fnError ? ' error' : ''}`}>
        <p>First Name</p>
        <input
          type="text"
          maxLength={30}
          value={firstname}
          onChange={(e) => { setFirstName(e.target.value); }}
          onBlur={() => { if (shouldValidate) parse(); }}
        />
      </label>

      <label className={`input-label${snError ? ' error' : ''}`}>
        <p>Surname</p>
        <input
          type="text"
          maxLength={30}
          value={surname}
          onChange={(e) => { setSurname(e.target.value); }}
          onBlur={() => { if (shouldValidate) parse(); }}
        />
      </label>

      <br />

      <label className={`input-label${emError ? ' error' : ''}`}>
        <p>Email Address</p>
        <input
          type="email"
          maxLength={80}
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          onBlur={() => { if (shouldValidate) parse(); }}
        />
      </label>

    </AccordionTab>
  );
};

export default DetailsTab;
