import {AddressSuggestions, DaDataAddress, DaDataSuggestion} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useEffect, useRef, useState} from "react";

const AddressFinder = () => {
  const inputRef = useRef<AddressSuggestions>(null);

  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress>>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleToggleFinder = (e: KeyboardEvent) => {
      if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();

        setIsOpen(prev => !prev);

        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    };

    document.addEventListener('keydown', handleToggleFinder);

    return () => document.removeEventListener('keydown', handleToggleFinder);
  }, []);

  if (!isOpen) return null;

  return (
    <AddressSuggestions ref={inputRef} containerClassName="fixed top-20 left-[calc(50vw-150px)] w-[300px]" token="36c47f1b48ba4024e1981e9c1d1303163a2a99c5" value={value} onChange={setValue} filterLocations={[{ region: "Москва" }]} filterRestrictValue />
  );
};

export { AddressFinder };
