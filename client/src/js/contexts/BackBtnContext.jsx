import React from 'react';

const BackBtnContext = React.createContext({});

export const BackBtnProvider = BackBtnContext.Provider;
export const BackBtnConsumer = BackBtnContext.Consumer;