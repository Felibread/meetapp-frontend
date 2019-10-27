import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Meetups, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      try {
        const formatedMeetups = response.data.map(meetup => {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const zonedDate = utcToZonedTime(parseISO(meetup.date), timezone);
          const date = format(zonedDate, 'MMMM d HH:mmaa');

          return { ...meetup, date };
        });

        setMeetups(formatedMeetups);
      } catch (err) {
        toast.error(response.data.message);
      }
    }

    loadMeetups();
  }, []);

  function handleMeetupSelection(id) {
    history.push({
      pathname: '/meetup',
      search: `?id=${id}`
    });
  }

  return (
    <Container>
      <div>
        <h1>My meetups</h1>
        <Link to="/meetup_creator">
          <MdAddCircleOutline />
          New meetup
        </Link>
      </div>

      <Meetups>
        {meetups ? (
          meetups.map(meetup => (
            <Meetup
              key={meetup.id}
              past={meetup.past}
              onClick={
                meetup.past ? null : () => handleMeetupSelection(meetup.id)
              }
            >
              <div>
                <strong>{meetup.name}</strong>
                {meetup.past && <p>Already happened</p>}
              </div>
              <span>{meetup.date}</span>
            </Meetup>
          ))
        ) : (
          <h1>You do not have any meetups organized D:</h1>
        )}
      </Meetups>
    </Container>
  );
}
