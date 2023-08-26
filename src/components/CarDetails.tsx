import { Fragment } from 'react';
import { Car } from '../../types';
import { Transition, Dialog } from '@headlessui/react';
import { CloseIcon } from './ui/Icons';
import Image from 'next/image';
import { generateCarImageURL } from '@/utils';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

const CarDetails: React.FC<Props> = ({ isOpen, closeModal, car }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5 overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-primary-blue-100 absolute right-2 top-2 z-10 w-fit rounded-full p-2"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="bg-pattern relative h-40 w-full rounded-lg bg-cover bg-center">
                      <Image
                        src={generateCarImageURL(car, 'angle')}
                        alt="Car Model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary-blue-100 relative h-24 w-full flex-1 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, '29')}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-primary-blue-100 relative h-24 w-full flex-1 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, '33')}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-primary-blue-100 relative h-24 w-full flex-1 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, '13')}
                          alt="Car Model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-xl font-semibold capitalize">
                      {car.make} {car.model}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex w-full justify-between gap-5 text-right" key={key}>
                          <h4 className="text-grey capitalize">{key.split('_').join(' ')}</h4>
                          <p className="text-black-100 font-semibold capitalize">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
