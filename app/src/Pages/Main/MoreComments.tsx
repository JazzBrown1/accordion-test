/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { AccordionSlotKey } from '../../Accordian/Accordion';
import AccordionTab from '../../Accordian/AccordionTab';
import { MoreTabData, SimpleDate, simpleDateToDate } from './Main';
import PARSE from './validate';

interface Props {
  onComplete: (data: MoreTabData, slot?: AccordionSlotKey) => void
}

const MoreCommentsTab = ({ onComplete } : Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [gender, setGender] = useState<string>('');
  const [genderError, setGenderError] = useState(false);
  const [dob, setDob] = useState<SimpleDate>({ mm: 0, yy: 0, dd: 0 });
  const [DOBError, setDOBError] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  const parse = () => {
    let error = false;
    if (!PARSE.telephone(phoneNumber)) {
      setPhoneNumberError(true);
      error = true;
    } else setPhoneNumberError(false);
    if (!PARSE.gender(gender)) {
      setGenderError(true);
      error = true;
    } else setGenderError(false);
    if (!PARSE.dob(simpleDateToDate(dob))) {
      setDOBError(true);
      error = true;
    } else setDOBError(false);
    return !error;
  };

  const handleNext = () => {
    if (parse()) onComplete({ phoneNumber, gender, dob });
    else setShouldValidate(true);
  };

  const handleClose = (newTab: AccordionSlotKey) => {
    if (parse()) onComplete({ phoneNumber, gender, dob }, newTab);
    else setShouldValidate(true);
  };

  return (
    <AccordionTab slotKey="more" title="Step 2: More comments" onNext={handleNext} onClose={handleClose}>

      <label className={`input-label${phoneNumberError ? ' error' : ''}`}>
        <p>Telephone Number</p>
        <input
          maxLength={30}
          type="number"
          value={phoneNumber}
          onChange={(e) => { setPhoneNumber(e.target.value); }}
          onBlur={() => { if (shouldValidate) parse(); }}
        />
      </label>

      <label className={`input-label${genderError ? ' error' : ''}`}>
        <p>Gender</p>
        <div className="select-wrapper">
          <span className="select-v">v</span>
          <select
            onBlur={() => { if (shouldValidate) parse(); }}
            onChange={(e) => {
              setGender(e.target.value);
              setGenderError(false);
            }}
            value={gender}
          >
            <option className="select-placeholder" value="" disabled selected hidden>Select Gender</option>
            <option>M</option>
            <option>F</option>
          </select>
        </div>
      </label>

      <br />

      <label className={`input-label${DOBError ? ' error' : ''}`}>
        <p>Dob</p>
        <input
          type="number"
          maxLength={2}
          value={dob.dd || ''}
          className="dob-input"
          onBlur={() => { if (shouldValidate) parse(); }}
          onChange={(e) => {
            setDob((oldState) => {
              const newState = { ...oldState };
              newState.dd = Number(e.target.value);
              return newState;
            });
          }}
        />
        <input
          type="number"
          maxLength={2}
          value={dob.mm || ''}
          className="dob-input"
          onBlur={() => { if (shouldValidate) parse(); }}
          onChange={(e) => {
            setDob((oldState) => {
              const newState = { ...oldState };
              newState.mm = Number(e.target.value);
              return newState;
            });
          }}
        />
        <input
          type="number"
          maxLength={4}
          value={dob.yy || ''}
          className="dob-input"
          onBlur={() => { if (shouldValidate) parse(); }}
          onChange={(e) => {
            setDob((oldState) => {
              const newState = { ...oldState };
              newState.yy = Number(e.target.value);
              return newState;
            });
          }}
        />
      </label>

    </AccordionTab>
  );
};

export default MoreCommentsTab;
