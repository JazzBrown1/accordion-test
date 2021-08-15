/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AccordionSlotKey } from '../../Accordian/Accordion';
import AccordionTab from '../../Accordian/AccordionTab';
import { FinalTabData } from './Main';
import PARSE from './validate';

interface Props {
  onComplete: (data: FinalTabData, slot?: AccordionSlotKey) => void
}

const FinalCommentsTab = ({ onComplete } : Props) => {
  const [comments, setComments] = useState<string>('');
  const [commentsError, setCommentsError] = useState<boolean>(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  const parse = () => {
    let error = false;
    if (!PARSE.comments(comments)) {
      setCommentsError(true);
      error = true;
    } else setCommentsError(false);
    return !error;
  };

  const handleNext = () => {
    if (parse()) onComplete({ comments });
    else setShouldValidate(true);
  };

  const handleClose = (newTab: AccordionSlotKey) => {
    if (parse()) onComplete({ comments }, newTab);
    else setShouldValidate(true);
  };

  return (
    <AccordionTab slotKey="3" title="Step 3: Final comments" onNext={handleNext} onClose={handleClose}>

      <label className={`input-label${commentsError ? ' error' : ''}`}>
        <p>Comments</p>
        <textarea
          onBlur={() => { if (shouldValidate) parse(); }}
          value={comments}
          onChange={(e) => { setComments(e.target.value); }}
        />
      </label>

    </AccordionTab>
  );
};

export default FinalCommentsTab;
