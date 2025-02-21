import { useRef, useState } from 'react'

export default function useAdLegalView() {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef(null);

    const clickDialog = () => {
        setIsOpen(!isOpen);
        if (!isOpen){
            dialogRef.current?.showModal();
        }
        dialogRef.current?.close();
    };
  return {
    isOpen, dialogRef, clickDialog
  }
}
