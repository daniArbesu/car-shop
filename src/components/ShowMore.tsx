'use client';

import { useRouter } from 'next/navigation';
import Button from './ui/Button';
import { updateSearchParams } from '@/utils';

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore: React.FC<Props> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams('limit', newLimit.toString());

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <Button
          label="Show More"
          type="button"
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
