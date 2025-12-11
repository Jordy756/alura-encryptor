import { encrypt, decrypt } from "@utils/encryptor";
import initHeader from "@scripts/components/header";

const initHome = () => {
    initHeader();

    const encryptButton = document.getElementById("btn-encrypt") as HTMLButtonElement;
    const decryptButton = document.getElementById("btn-decrypt") as HTMLButtonElement;
    const copyButton = document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement;
    const outputField = document.getElementById("output-text") as HTMLSpanElement;

    const getText = () => (document.getElementById("input-text") as HTMLInputElement).value;
    const handleEncrypt = () => encrypt(outputField, getText());
    const handleDecrypt = () => decrypt(outputField, getText());
    const copyToClipboard = () => navigator.clipboard.writeText(outputField.textContent);

    encryptButton.addEventListener("click", handleEncrypt);
    decryptButton.addEventListener("click", handleDecrypt);
    copyButton.addEventListener("click", copyToClipboard);
};

initHome();
