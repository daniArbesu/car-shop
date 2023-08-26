'use client';
import { calculateCarRent, generateCarImageURL } from '@/utils';
import { Car } from '../../types';
import Image from 'next/image';
import { GasIcon, RightArrow, SteeringWheelIcon, TireIcon } from './ui/Icons';
import Button from './ui/Button';
import { useState } from 'react';
import CarDetails from './CarDetails';

interface Props {
  car: Car;
}

const CarCard: React.FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <article className="car-card group">
      <div className="car-card__content">
        <h3 className="car-card__content-title">
          {make} {model}
        </h3>
      </div>
      <p className="mt-6 flex text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src={generateCarImageURL(car)}
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative mt-2 flex w-full">
        <div className="flex w-full justify-between text-gray-500 group-hover:invisible">
          <div className="flex flex-col items-center justify-center gap-2">
            <SteeringWheelIcon className="h-5 w-5" />
            <p className="text-[14px]">{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <TireIcon className="h-5 w-5" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <GasIcon className="h-5 w-5" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            label="View More"
            className="bg-primary-blue w-full rounded-full py-[16px] text-[14px] font-bold leading-[17px] text-white"
            rightIcon={<RightArrow />}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </article>
  );
};

export default CarCard;
