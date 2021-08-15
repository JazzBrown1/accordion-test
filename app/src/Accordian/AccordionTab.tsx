import React, { useContext, useEffect } from 'react';
import { AccordionContext, AccordionSlotKey } from './Accordion';

interface AccordionTabProps {
  children: any,
  title: string,
  slotKey: AccordionSlotKey,
  onNext: () => void;
  onClose: (newSlot: AccordionSlotKey) => void;
}

const Accordion = ({
  children, title, slotKey, onNext, onClose,
}: AccordionTabProps) => {
  const { openSlot, changeOpenSlot, addListener } = useContext(AccordionContext);
  const isOpen = openSlot === slotKey;

  useEffect(() => {
    if (isOpen) {
      // This is so we can trigger an onclose callback when another component triggers the close
      // we could have passed values through context but this seemed less messy
      addListener((newSlot: AccordionSlotKey) => {
        onClose(newSlot);
      });
    }
  }, [onClose]);

  return (
    <div className="accordion-tab-wrapper">
      <div
        role="button"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !isOpen) changeOpenSlot(slotKey);
        }}
        className="accordion-tab-title"
        onClick={() => { if (!isOpen) changeOpenSlot(slotKey); }}
        tabIndex={0}
      >
        <p>{title}</p>
      </div>
      <div className={`accordion-tab-body${isOpen ? ' show' : ''}`}>
        {children}
        <button type="button" className="accordion-next-button" onClick={onNext}>{'Next >'}</button>
      </div>
    </div>
  );
};

export default Accordion;
