import { decrypt, encrypt } from '@scripts/utils/encryption';

(() => {
  const encryptButton = document.getElementById('btn-encrypt');
  const decryptButton = document.getElementById('btn-decrypt');
  const outputField = document.getElementById('output-text');
  const inputField = document.getElementById('input-text');

  if (
    !(encryptButton instanceof HTMLButtonElement) ||
    !(decryptButton instanceof HTMLButtonElement) ||
    !(outputField instanceof HTMLSpanElement) ||
    !(inputField instanceof HTMLTextAreaElement)
  )
    return;

  const getText = () => inputField.value;
  const handleEncrypt = () => encrypt(outputField, getText());
  const handleDecrypt = () => decrypt(outputField, getText());

  encryptButton.addEventListener('click', handleEncrypt);
  decryptButton.addEventListener('click', handleDecrypt);
})();
