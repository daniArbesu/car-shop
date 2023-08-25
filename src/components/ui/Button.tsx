'use client';

import { MouseEventHandler } from 'react';

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<Props> = ({ label, onClick, className, type }) => {
  return (
    <button
      disabled={false}
      type={type || 'button'}
      className={`custom-btn ${className}`}
      onClick={onClick}
    >
      <span className="flex-1">{label}</span>
    </button>
  );
};

export default Button;
