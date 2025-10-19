export const useModal = () => {
  const isVisible = useState('modal-visible', () => false)

  const openModal = () => {
    isVisible.value = true
  }

  const closeModal = () => {
    isVisible.value = false
  }

  return {
    isVisible,
    openModal,
    closeModal
  }
}

