'use client';

import { useRouter } from 'next/navigation';
import css from "./ModalRoute.module.css"

type Props = {
  children: React.ReactNode;
};

const ModalRoute = ({ children }: Props) => {
  const router = useRouter();
  
  const close = () => router.back();

  return (
    <div
    className={css.backdrop}
        role="dialog"
        aria-modal="true">
      <div className={css.modal}>
        <button onClick={close} className={css.backBtn}>Back</button>
        {children}      
      </div>
    </div>
  );
};

export default ModalRoute;
