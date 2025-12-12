const initSeeText = (): void => {
    const copyButton = document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement;
    const copyTextButton = copyButton.querySelector("span") as HTMLSpanElement;
    const outputField = document.getElementById("output-text") as HTMLSpanElement;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputField.textContent);

        copyTextButton.textContent = "Copiado!";
        copyButton.style.backgroundColor = "var(--success-500)";

        setTimeout(() => {
            copyTextButton.textContent = "Copiar";
            copyButton.style.backgroundColor = "var(--primary-500)";
        }, 1000);
    };

    copyButton.addEventListener("click", copyToClipboard);
};

initSeeText();
