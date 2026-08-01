# Alura Encryptor

![Alura Encryptor Banner](https://res.cloudinary.com/dygwpgeq9/image/upload/q_auto/f_auto/v1775784152/alura_encryptor_dark_og_img_ocfkkk.webp)

<div align="center">

![Astro](https://img.shields.io/badge/Astro-6.x-2C2052?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

## 📄 Descripción

**AluEncrypt** es una aplicación web diseñada para encriptar y desencriptar mensajes de texto. Este proyecto forma parte del primer desafío del programa **Oracle Next Education (ONE)** en alianza con **Alura Latam**.

Aunque este desafío fue completado originalmente en **2023**, esta versión representa un **re-work completo realizado en 2025**. El objetivo de esta reconstrucción fue aplicar la experiencia ganada durante estos años y llevar el proyecto al siguiente nivel, migrando de HTML/JS vainilla a tecnologías modernas como **Astro** y **TypeScript**.

### 🔑 Llaves de Encriptación

Las "llaves" de encriptación utilizadas son las siguientes:

- La letra `e` es convertida para `enter`
- La letra `i` es convertida para `imes`
- La letra `a` es convertida para `ai`
- La letra `o` es convertida para `ober`
- La letra `u` es convertida para `ufat`

**Requisitos:**

- Debe funcionar solo con letras minúsculas.
- No deben ser utilizados letras con acentos ni caracteres especiales.

## 📸 Capturas de Pantalla

| Vista principal                                                                                                                         | Modo claro                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![Vista principal](https://res.cloudinary.com/dygwpgeq9/image/upload/q_auto/f_auto/v1775784152/alura_encryptor_dark_og_img_ocfkkk.webp) | ![Modo claro](https://res.cloudinary.com/dygwpgeq9/image/upload/q_auto/f_auto/v1775784153/alura_encryptor_light_og_img_qnzbx2.webp) |

## ✨ Funcionalidades

- **Encriptar texto:** Convierte el texto ingresado según las llaves de encriptación.
- **Desencriptar texto:** Revierte el proceso de encriptación al texto original.
- **Copiar al portapapeles:** Botón funcional para copiar el resultado con un solo clic.
- **Validación de entrada:** Restricción para aceptar solo minúsculas y sin acentos.
- **Tema Oscuro/Claro:** Interfaz adaptable con selector de tema persistente.
- **Diseño Responsivo:** Adaptado para funcionar en dispositivos móviles, tablets y escritorio.

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/):** Framework web para construir sitios rápidos y optimizados.
- **TypeScript:** Superset de JavaScript para un código más robusto y tipado.
- **CSS Variables:** Para el manejo de temas y estilos globales.
- **HTML5 Semántico:** Para una mejor estructura y accesibilidad.

## 🚀 Instalación y Ejecución

Si deseas correr este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Jordy756/alura-encryptor.git
   cd alura-encryptor
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   pnpm run dev
   ```

4. **Abrir en el navegador**
   Visita `http://localhost:4321` para ver la aplicación.

## 📜 Licencia

Este proyecto se distribuye bajo la licencia MIT de Jordy Castro.

- Tipo: MIT License
- Titular: Jordy Castro
- Copyright: 2026
- Texto completo: [LICENSE](LICENSE)
