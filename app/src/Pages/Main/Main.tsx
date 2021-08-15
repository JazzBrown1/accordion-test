/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import Accordion, { AccordionSlotKey } from '../../Accordian/Accordion';
import DetailsTab from './Details';
import FinalCommentsTab from './FinalComments';
import MoreCommentsTab from './MoreComments';
import NetworkError from './NetworkError';

export interface DetailsTabData {
  firstname: string,
  surname: string,
  email: string
}

export type SimpleDate = {
  dd: number;
  mm: number;
  yy: number;
}

export interface MoreTabData {
  phoneNumber: string,
  dob: SimpleDate,
  gender: string,
}

export interface FinalTabData {
  comments: string
}

export interface CombinedTabData {
  details?: DetailsTabData,
  more?: MoreTabData,
  final?: FinalTabData
}

export const simpleDateToDate = ({ mm, yy, dd }: SimpleDate) => {
  if (dd > 31 || dd < 1
    || mm > 12 || mm < 1
    || yy < 1900 || yy > 2021
  ) return false;
  const date = new Date();
  date.setFullYear(yy, mm, dd);
  return date;
};

interface Props {
  sendData: (data: CombinedTabData) => void;
  networkError: boolean;
}

function Main({ sendData, networkError } : Props) {
  const [openTab, setOpenTab] = useState<string | number>('1');
  const combinedTabDataRef = useRef<CombinedTabData>({});

  const detailsOnComplete = (data: DetailsTabData, nextTab?: AccordionSlotKey | undefined) => {
    combinedTabDataRef.current.details = data;
    if (nextTab) setOpenTab(nextTab);
    else setOpenTab('2');
  };

  const moreOnComplete = (data: MoreTabData, nextTab?: AccordionSlotKey | undefined) => {
    combinedTabDataRef.current.more = data;
    if (nextTab) setOpenTab(nextTab);
    else setOpenTab('3');
  };

  const finalOnComplete = (data: FinalTabData, nextTab: AccordionSlotKey | undefined) => {
    combinedTabDataRef.current.final = data;
    if (nextTab) setOpenTab(nextTab);
    sendData(combinedTabDataRef.current);
  };

  return (
    <div className="Main">
      {networkError ? <NetworkError /> : null}
      <Accordion openSlot={openTab}>
        <DetailsTab onComplete={detailsOnComplete} />
        <MoreCommentsTab onComplete={moreOnComplete} />
        <FinalCommentsTab onComplete={finalOnComplete} />
      </Accordion>
    </div>
  );
}

export default Main;
