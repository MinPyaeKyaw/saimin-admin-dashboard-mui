import { Modal } from '@mui/base';
import { Box } from '@mui/system';
import { Z_INDEXES } from '@configs/ui-consts';
import useModalManager from '@hooks/useModalManager';

export function ModalContainer() {
  const { modalContent, open, closeModal } = useModalManager();

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: Z_INDEXES.MODAL,
        }}
        onClick={closeModal}
      >
        {modalContent}
      </Box>
    </Modal>
  );
}
