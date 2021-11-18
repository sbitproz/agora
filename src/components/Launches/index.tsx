import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Table from 'components/common/Table';
import Modal from 'components/common/Modal';
import { Subtitle, Paragraph } from 'components/common/Typography';
import { formatDate } from 'helpers/date.helpers';
import { fetchLaunches } from './launches.slice';
import { selectLaunches } from './launches.selectors';
import { launchesColumnsConfig, launchesFilterModel } from './launches.constants';
import { Launch as ILaunch } from './launches.interface';

export const LAUNCH_COUNT = 50;

const Launch = () => {
  const dispatch = useAppDispatch();
  const launches = useAppSelector(selectLaunches);

  const [launch, viewLaunch] = useState<ILaunch | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const hasLaunches = () => launches?.length;

  const Content = () => {
    return (
      <>
        {launch?.details && (
          <>
            <Subtitle>Details</Subtitle>
            <Paragraph>{launch.details}</Paragraph>
          </>
        )}
        {launch?.launch_date_unix && (
          <>
            <Subtitle>Date</Subtitle>
            <Paragraph>{formatDate(launch.launch_date_unix)}</Paragraph>
          </>
        )}
        {launch?.rocket && (
          <>
            <Subtitle>Rocket</Subtitle>
            <Paragraph>
              Name: {launch.rocket.rocket_name}, ID: {launch.rocket.rocket_id}, Type: {launch.rocket.rocket_type}
            </Paragraph>
          </>
        )}
      </>
    );
  };

  useEffect(() => {
    dispatch(fetchLaunches(LAUNCH_COUNT));
  }, [dispatch]);

  const handleRowClick = ({ row }: { row: ILaunch }) => {
    viewLaunch(row);
    setIsOpen(true);
  };

  const clearLaunch = () => viewLaunch(undefined);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Modal
        ariaName="launch"
        isOpen={isOpen}
        content={Content}
        title={launch?.mission_name}
        onClose={closeModal}
        onClosed={clearLaunch}
      />
      {hasLaunches() && (
        <Table
          rowId="flight_number"
          filterModel={launchesFilterModel}
          rows={launches}
          columns={launchesColumnsConfig}
          onRowClick={handleRowClick}
        />
      )}
    </>
  );
};

export default Launch;
