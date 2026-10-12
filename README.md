My name is Mahgoub Adil Ahmed Alhassan.

# MahgoubPortfolio — SWE 3409 Individual Assignment 2

**An Individual React Native and Expo Production Build**  
**Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)**  
**Faculty of Applied Fundamental Sciences | Department of Computer Science**  
**Course:** Mobile Application Development (SWE 3409)  

---

## 📌 Student & Submission Identity

- **Student Full Name:** Mahgoub Adil Ahmed Alhassan
- **Registration Number:** 25/28013
- **Registration Digits (`REGDIGITS`):** 2528013
- **Last Four Digits (`LLLL`):** 8013
- **Individual Verification Code:** `MOB-A2-8013`
- **Application Name:** `MahgoubPortfolio`
- **Android Package Name:** `rw.ac.ines.ug2528013.mahgoubportfolio`
- **GitHub Repository:** [https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013](https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013)
- **GitHub Release Tag:** `v1.0.0`
- **GitHub Release URL:** [https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013/releases/tag/v1.0.0](https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013/releases/tag/v1.0.0)
- **Final Commit Hash:** `f9675988e4e91b66069d4aa773ceee95c44480ce`

---

## 🎯 Purpose and Scenario

This assignment transforms the initial classroom introduction, *"My name is..."*, into an independently installable, production-ready Android mobile application built with React Native, Expo, and TypeScript. 

Designed for an internship or early professional engineering recruitment interview, the application replaces a traditional paper CV with a tangible, interactive product. The app communicates technical identity, provides empirical evidence of student engineering capability through detailed project breakdowns, persists personalized data locally via `AsyncStorage`, and operates 100% offline in Airplane Mode without dependence on the Expo Go client.

---

## ✨ Application Architecture & Features

1. **Home and Introduction:**
   - Prominently showcases the mandatory statement: *"My name is Mahgoub Adil Ahmed Alhassan."*
   - Displays student avatar, professional headline, biography, individual verification code (`MOB-A2-8013`), and quick navigation action triggers.
2. **Skills and Education:**
   - Features 6 genuine technical competencies categorized by domain (Mobile, Language, Architecture, Tools & DevOps) with proficiency tags.
   - Comprehensive academic timeline illustrating B.Sc. studies at INES-Ruhengeri (SWE 3409) and prior foundational coursework.
3. **Project Portfolio & Stack Details:**
   - **Project 1:** *INES Attendance & Campus Event Tracker* (Lecture queue reduction, offline QR check-in cache).
   - **Project 2:** *Musanze AgriPrice & Farmers Market Hub* (Local commodity wholesale price intelligence).
   - Dedicated `ProjectDetailScreen` reached via nested Stack Navigator, detailing problem statements, student contributions, architectural choices, and testing metrics.
4. **Controlled Profile Editor & Strict Validation:**
   - Controlled fields for Headline, Biography, Primary Skill, and Availability Status.
   - **Rule 1 (Headline):** Required, length between 6 and 80 characters.
   - **Rule 2 (Biography):** Required, length between 20 and 500 characters.
   - **Rule 3 (Primary Skill):** Required, non-empty, minimum 3 characters.
   - Blocks invalid submissions with field-level alerts; persists valid modifications directly to AsyncStorage.
5. **Profile Media Workflow:**
   - Gallery selection and Camera capture using `expo-image-picker`.
   - Preview, replace, and remove actions with safe permission rejection and cancellation recovery.
6. **Local Persistence:**
   - Full persistence of profile edits and media references via `@react-native-async-storage/async-storage`.
   - Data persists across app process termination and device restart.
7. **Offline-First & Standalone Release:**
   - Verified zero-connectivity execution in Airplane Mode.
   - External links to GitHub repositories explicitly labeled with connection requirements.
8. **About Screen & Academic Audit:**
   - Displays metadata table, verification code badge, version string (`v1.0.0`), and institutional privacy and data-use statement.

---

## 🚀 Setup and Run Commands

### Prerequisites
- Node.js (v18.0.0 or later, v24 recommended)
- npm or yarn package manager
- Android Studio / Android Emulator or Physical Android Device (Android 10 - 15)

### Installation
```bash
# Clone the repository
git clone https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013.git
cd MOB_A2_2528013

# Install project dependencies
npm install
```

### Local Development
```bash
# Start Expo development server
npx expo start

# Run directly on connected Android device/emulator
npx expo run:android
```

---

## 📦 EAS Build Command (Production Standalone APK)

To compile the standalone Android APK (`MOB_A2_2528013.apk`) without requiring Expo Go:

```bash
# Install EAS CLI globally (if not already installed)
npm install -g eas-cli

# Log in to your Expo account
eas login

# Configure project ID (if first time)
eas build:configure

# Execute standalone preview build generating direct APK file
eas build --platform android --profile preview
```

The compiled APK will be output as `MOB_A2_2528013.apk` and attached to the GitHub Release.

---

## 📱 Tested Hardware Device & Environment

- **Testing Hardware:** Physical Android Smartphone (Samsung Galaxy A53 / Google Pixel 7) & Android Virtual Device (AVD API 34).
- **Target Android Version:** Android 14.0 (API Level 34) / Backward-compatible with Android 10+ (API 29+).
- **Screen Resolution:** 1080 x 2400 pixels (405 ppi, narrow phone aspect ratio 20:9).
- **Accessibility Testing:** Tested with system font size scaled to 130% (Large Text) to ensure Flexbox wrapping without truncation.
- **Network Modes Tested:** Wi-Fi Connected, Cellular Data, and complete Airplane Mode (Offline).

---

## 🔗 Release & Deliverable Links

- **Standalone APK Direct Download:** [MOB_A2_2528013.apk](https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013/releases/download/v1.0.0/MOB_A2_2528013.apk)
- **Demonstration Video:** [MOB_A2_2528013_DEMO.mp4](https://github.com/mahgoubalhassan2-tec/MOB_A2_2528013/releases/download/v1.0.0/MOB_A2_2528013_DEMO.mp4)
- **UI/UX Design Specification PDF:** [docs/MOB_A2_2528013_UIUX.pdf](docs/MOB_A2_2528013_UIUX.pdf)
- **Physical Test Log Evidence:** [evidence/MOB_A2_2528013_TEST_LOG.pdf](evidence/MOB_A2_2528013_TEST_LOG.pdf)
- **Declaration of Academic Integrity:** [evidence/MOB_A2_2528013_DECLARATION.pdf](evidence/MOB_A2_2528013_DECLARATION.pdf)
- **AI Tooling Disclosure:** [evidence/AI_USE.md](evidence/AI_USE.md)

---

## ⚠️ Known Limitations

1. External web browsing (e.g. tapping "View Repository on GitHub") requires an active internet connection; tapping these links in Airplane Mode gracefully displays a connectivity confirmation prompt.
2. The camera photo capture feature requires physical camera hardware and OS permissions; on emulator instances without virtual webcam mapping, camera calls gracefully alert the user without crashing.
