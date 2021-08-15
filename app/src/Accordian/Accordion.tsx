import React, { createContext, useRef } from 'react';

export type AccordionSlotKey = number | string;

type CloseListener = (newSlot: AccordionSlotKey) => void;

export interface AccordionContextData {
  changeOpenSlot: (slotKey: AccordionSlotKey) => void;
  openSlot: AccordionSlotKey;
  addListener: (listener: CloseListener) => void
}

export const AccordionContext = createContext<AccordionContextData>({
  changeOpenSlot: () => { /* noop */ },
  openSlot: -1,
  addListener: () => { /* noop */ },
});

interface AccordionProps {
  children: any,
  openSlot: AccordionSlotKey,
  onChange?: (newSlot: AccordionSlotKey, oldSlot: AccordionSlotKey) => void,
}

// This component handles the passing of the openSlot state to the different AccordionTabProps#
// and the passes the open click from the trigger tab to the currently open tab
// I chose this approach because it means the tabs can be written completely independatnly
// and all of the parsing/validation can be handled at the tab level - I also made a onChange
// cback available on the Accordion module but its optional and I dont use it in this app

const Accordion = ({ children, openSlot, onChange }: AccordionProps) => {
  const slotListenerRef = useRef<CloseListener>(() => {});

  const changeOpenSlot = (slotKey: AccordionSlotKey) => {
    if (onChange) onChange(slotKey, openSlot);
    slotListenerRef.current(slotKey);
  };

  // The open tab will use this callback func to attach
  // and it is used to trigger the onClose callback
  const addListener = (listener : CloseListener) => {
    slotListenerRef.current = listener;
  };

  return (
    <div className="accordion-wrapper">
      <AccordionContext.Provider value={{ openSlot, changeOpenSlot, addListener }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

Accordion.defaultProps = {
  onChange: undefined,
};

export default Accordion;
