const outputField = document.getElementById("output-text") as HTMLTextAreaElement;

const copyToClipboard = () => navigator.clipboard.writeText(outputField.value);

(document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement).addEventListener("click", copyToClipboard);
