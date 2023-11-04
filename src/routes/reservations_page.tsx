import CollapsibleSection from 'components/collapsibleSection';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/section';
import UnitItem from 'components/unitItem';
import store from '../redux/store';
import api from '../redux/api';

import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.jpeg';

const demoImgs = [img3, img3, img3, img4, img3,
  img3, img3, img4, img3, img3, img3, img4, img3,
  img3, img3, img4, img3, img3, img3, img4,
  img3, img3, img3, img4, img3, img3, img3, img4];

export default function ReservationsPage() {
  // eslint-disable-next-line
  const dispatch = useDispatch<typeof store.dispatch>();

  const { pastList, futureList } = useSelector(
    (state: { reservations: { pastList:[], futureList:[] } }) => (
      state.reservations
    ),
  );

  React.useEffect(() => {
    dispatch(api.fetchReservations());
  }, [dispatch]);

  /* eslint-disable */
  const RenderItem = (itemsArr: [], past:boolean = false) => (
    <section className="flex justify-center flex-wrap gap-[10px] w-100">
      {itemsArr.map((item: { id: number, unit_details: {} }) => {
        const { id } = item;
        return <UnitItem key={id} item={item.unit_details} img={demoImgs[id - 1]} pastReservation={past} reservation={item} />;
      })}
    </section>
  );
  /* eslint-enable */

  return (
    <div className="reservation-page-container ">
      <h1 className="main-title">Reservations</h1>
      <span className="main-subtitle sec-color">browse your reservations</span>
      <span className="breaker mb-5">...................</span>
      <Section childernClassName="flex flex-col gap-[10px] px-0 !my-auto">
        <CollapsibleSection
          title="Past Reservations"
          className="!m-0 !p-0 border rounded-md flex flex-row "
          childernClassName="!px-0 flex flex-row "
        >
          {RenderItem(pastList, true)}
        </CollapsibleSection>
        <CollapsibleSection
          title="Upcoming Reservations"
          className="!m-0 !p-0 border rounded-md flex flex-row "
          childernClassName="!px-0 flex flex-row "
          isOpen
        >
          {RenderItem(futureList)}
        </CollapsibleSection>
      </Section>
    </div>
  );
}
