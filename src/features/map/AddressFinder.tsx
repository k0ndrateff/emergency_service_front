import {AddressSuggestions, DaDataAddress, DaDataSuggestion} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useEffect, useState} from "react";

const AddressFinder = () => {
  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress>>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleToggleFinder = (e: KeyboardEvent) => {
      if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();

        setIsOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleToggleFinder);

    return () => document.removeEventListener('keydown', handleToggleFinder);
  }, []);

  if (!isOpen) return null;

  return (
    <AddressSuggestions containerClassName="fixed top-20 left-[calc(50vw-150px)] w-[300px] text-slate-900 flex flex-col-reverse" token="36c47f1b48ba4024e1981e9c1d1303163a2a99c5" value={value} onChange={setValue} />
  );
};

export { AddressFinder };
