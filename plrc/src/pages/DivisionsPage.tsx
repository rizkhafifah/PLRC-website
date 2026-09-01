import React from 'react';
import { CabinetPage } from './CabinetPage';

// Re-export CabinetPage to preserve backward compatibility for any direct imports
export const DivisionsPage: React.FC = () => {
  return <CabinetPage />;
};
