import React, { PropsWithChildren } from 'react';
import DashboardHeaders from '../DashboardHeaders';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <DashboardHeaders />
      {children}
    </div>
  );
}

export default DashboardLayout;
