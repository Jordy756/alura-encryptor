// const outputField = document.getElementById("output-text") as HTMLTextAreaElement;

// const copyToClipboard = () => navigator.clipboard.writeText(outputField.value);

// (document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement).addEventListener("click", copyToClipboard);

const initClipboardHandler = () => {
    const outputField = document.getElementById("output-text") as HTMLSpanElement;
    const copyButton = document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement;

    const copyToClipboard = () => navigator.clipboard.writeText(outputField.textContent);

    copyButton.addEventListener("click", copyToClipboard);
};

initClipboardHandler();
