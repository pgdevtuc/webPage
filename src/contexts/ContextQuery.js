import { createContext, useContext, useState } from 'react';

const DisabledContext = createContext();

export function SubjectProvider({ children }) {
  const [subject, setSubject] = useState("");

  return (
    <DisabledContext.Provider value={{ subject, setSubject}}>
      {children}
    </DisabledContext.Provider>
  );
}

export function useSubject() {
  const context = useContext(DisabledContext);
  if (!context) {
    throw new Error('useDisabled must be used within a DisabledProvider');
  }
  return context;
}

