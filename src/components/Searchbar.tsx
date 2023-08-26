'use client';
import { useState } from 'react';
import SearchManufacturer from './SearchManufacturer';
import { SearchIcon } from './ui/Icons';
import Image from 'next/image';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SearchButton = ({ className }: { className: string }) => (
  <button type="submit" className={`z-10 -ml-3 ${className}`}>
    <SearchIcon />
  </button>
);

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      toast.error('Please fill in the search bar');
      return;
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search); // We recover the current searchparams

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton className="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Car Model icon"
          width={25}
          height={25}
          className="absolute ml-4 h-[20px] w-[20px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton className="sm:hidden" />
      </div>
      <SearchButton className="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
