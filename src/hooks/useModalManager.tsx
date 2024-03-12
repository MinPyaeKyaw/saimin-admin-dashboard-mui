import { ReactNode } from 'react';
import { create } from 'zustand';

interface ModalState {
  open: boolean;
  modalContent: ReactNode | null;
  openModal: (modalContent: ReactNode) => void;
  closeModal: () => void;
}

const useModalManager = create<ModalState>()((set) => ({
  open: false,
  modalContent: null,
  openModal: (modalContent) => set(() => ({ open: true, modalContent })),
  closeModal: () => set(() => ({ open: false, modalContent: null })),
}));

export default useModalManager;
