const initClipboard = () => {
    const outputField = document.getElementById("output-text") as HTMLSpanElement;
    const copyButton = document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement;

    const copyToClipboard = () => navigator.clipboard.writeText(outputField.textContent);

    copyButton.addEventListener("click", copyToClipboard);
};

initClipboard();
