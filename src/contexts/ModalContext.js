import React, { createContext, useContext } from 'react'

export const ModalContext = React.createContext(false);

export const useModal = () => useContext(ModalContext);