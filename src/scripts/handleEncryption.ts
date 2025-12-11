import { encrypt, decrypt } from "@utils/encryptor";

const initEncryption = () => {
    const encryptButton = document.getElementById("btn-encrypt") as HTMLButtonElement;
    const decryptButton = document.getElementById("btn-decrypt") as HTMLButtonElement;
    const outputField = document.getElementById("output-text") as HTMLSpanElement;

    const getText = () => (document.getElementById("input-text") as HTMLInputElement).value;
    const handleEncrypt = () => encrypt(outputField, getText());
    const handleDecrypt = () => decrypt(outputField, getText());

    encryptButton.addEventListener("click", handleEncrypt);
    decryptButton.addEventListener("click", handleDecrypt);
};

initEncryption();
