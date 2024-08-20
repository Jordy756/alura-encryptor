import { encrypt, decrypt } from "@/utils/encryptor";

const outputField = document.getElementById("output-text") as HTMLTextAreaElement;
const noMessageFoundContainer = document.querySelector(".no-message-found-container") as HTMLElement;
const messageFoundContainer = document.querySelector(".message-found-container") as HTMLElement;

const getText = () => (document.getElementById("input-text") as HTMLInputElement).value;

const handleMessageFound = (message: string) => {
    if (message === "") {
        noMessageFoundContainer.style.display = "flex";
        messageFoundContainer.style.display = "none";
    } else {
        noMessageFoundContainer.style.display = "none";
        messageFoundContainer.style.display = "flex";
    }
};

const handleEncrypt = () => {
    encrypt(outputField, getText());
    handleMessageFound(outputField.value);
};

const handleDecrypt = () => {
    decrypt(outputField, getText());
    handleMessageFound(outputField.value);
};

(document.getElementById("btn-encrypt") as HTMLButtonElement).addEventListener("click", handleEncrypt);
(document.getElementById("btn-decrypt") as HTMLButtonElement).addEventListener("click", handleDecrypt);
