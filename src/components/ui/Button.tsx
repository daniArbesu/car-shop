'use client';

import { MouseEventHandler } from 'react';

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<Props> = ({ label, onClick, className }) => {
  return (
    <button disabled={false} type="button" className={`custom-btn ${className}`} onClick={onClick}>
      <span className="flex-1">{label}</span>
    </button>
  );
};

export default Button;
