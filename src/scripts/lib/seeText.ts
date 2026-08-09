(() => {
  const copyButton = document.getElementById('btn-copy-to-clipboard');
  const outputField = document.getElementById('output-text');

  if (!(copyButton instanceof HTMLButtonElement) || !(outputField instanceof HTMLSpanElement)) return;

  const copyTextButton = copyButton.querySelector<HTMLSpanElement>('span');

  if (!copyTextButton) return;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputField.textContent ?? '');

      copyTextButton.textContent = 'Copiado!';
      copyButton.classList.add('success');

      setTimeout(() => {
        copyTextButton.textContent = 'Copiar';
        copyButton.classList.remove('success');
      }, 500);
    } catch {
      copyTextButton.textContent = 'Error al copiar';

      setTimeout(() => {
        copyTextButton.textContent = 'Copiar';
      }, 1200);
    }
  };

  copyButton.addEventListener('click', copyToClipboard);
})();
