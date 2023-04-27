import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Toggles = {
  toggles: string[];
  isEnabled: (toggle: string) => boolean;
};

const togglesContext = createContext<Toggles>({
  toggles: [],
  isEnabled: () => false,
});

export const useToggles = (): Toggles => {
  const toggles = useContext(togglesContext);
  return toggles;
};

export const TogglesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [localStorageToggles, setLocalStorageToggles] = useState<string[]>([]);

  useEffect(() => {
    const getTogglesFromLocalStorage = () => {
      const localStorageToggles = localStorage.getItem('toggles');

      if (localStorageToggles) {
        const togglesArray = localStorageToggles.replace(' ', '').split(',');
        setLocalStorageToggles(togglesArray);
      }
    };

    setTimeout(() => getTogglesFromLocalStorage(), 1000); // Check localStorage every second
  }, []);

  const toggles = [...localStorageToggles];
  const isEnabled = (toggle: string) => toggles.includes(toggle);

  return (
    <togglesContext.Provider value={{ toggles, isEnabled }}>
      {children}
    </togglesContext.Provider>
  );
};
