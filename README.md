# 🦾 Accessibility App for ELA Patients

## 🌐 Overview

This project aims to assist individuals with Amyotrophic Lateral Sclerosis (ALS) by providing an intuitive and accessible interface for communication. The application leverages eye-tracking technology, voice synthesis, and a user-friendly UI to facilitate seamless interaction.

## 🛠 Technologies Used

- 🎨 Material UI: For the front-end design
- 👁 [WebGazer.js](https://github.com/brownhci/WebGazer/wiki/Top-Level-API): For eye-tracking
- 🗣 Whisper: OpenAI's voice synthesis API
- 🐱‍🏍 NestJS: For the back-end
- 🔥 Firebase: For real-time database and authentication

## 🌟 Features

### 👀 Eye-Tracking Card Selection

The app uses eye-tracking to allow the user to select a card displayed on either the left or right side of the screen. Each selection eliminates all cards on the opposite side and further narrows down the choices through a binary search algorithm. The final selected card is then spoken out loud using voice synthesis.

### 🃏 Customizable Cards

Caregivers can customize the cards by adding images and naming them. The cards can be iconographic to cater to individuals who may have difficulty reading.

### 💾 Local and Web Storage

Initially, the app will allow adding images from the local storage or via web links. Future updates will include user authentication and a back-end to store these images.

### 🗨 Voice Synthesis

The final phase of the project will integrate OpenAI's Whisper for voice synthesis to speak the selected card.

## 🚀 Future Plans

- 🔒 User authentication
- ☁ Back-end for image storage
- 🎙 Integration of voice synthesis

## 🤝 How to Contribute

This project is open-source and contributions are welcome. Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
