const initSeeText = (): void => {
    const copyButton = document.getElementById("btn-copy-to-clipboard") as HTMLButtonElement;
    const copyTextButton = copyButton.querySelector("span") as HTMLSpanElement;
    const outputField = document.getElementById("output-text") as HTMLSpanElement;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputField.textContent);

        copyTextButton.textContent = "Copiado!";
        copyButton.classList.add("success");

        setTimeout(() => {
            copyTextButton.textContent = "Copiar";
            copyButton.classList.remove("success");
        }, 500);
    };

    copyButton.addEventListener("click", copyToClipboard);
};

initSeeText();
