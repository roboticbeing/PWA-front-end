import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './store';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import './App.css';
import Routes from './routes';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "username": "User Name:",
          "password": "Password:",
          "login": "Log In:",
          "register": "Register",
          "email": "Email:",
          "fullname": "Full Name:",
          "confirmpassword": "Confirm Password:",
          "home": "Home",
          "contact": "Contact",
          "menu": "Menu",
          "feed": "Feed",
          "news": "News",
          "announcements": "Announcements",
          "notices": "Notices",
          "events": "Events",
          "alerts": "Alerts",
          "location": "Location",
          "emergency": "Emergency",
          "people-list": "People-List"
        }
      },
      da: {
        translation:{
          "username": "User:",
          "password": "Adgangskode:",
          "login": "Log på:",
          "register": "Tilmeld",
          "email": "Email:",
          "fullname": "Fulde navn:",
          "confirmpassword": "Bekræft kodeord:",
          "home": "Hjem",
          "contact": "Kontakt",
          "menu": "Menu",
          "feed": "Nyhedsstrøm",
          "news": "Nyheder",
          "announcements": "Meddelelser",
          "notices": "Notifikationer",
          "events": "Begivenheder",
          "alerts": "Advarsler",
          "location": "Beliggenhed",
          "emergency": "Emergency",
          "people-list": "Folk-liste"
        }
      },
      ar: {
        translation: {
          "username": "العضو:",
          "password": "كلمة المرور:",
          "login": "تسجيل الدخول:",
          "register": "إشترك",
          "email": "البريد الإلكتروني:",
          "fullname": "الاسم الكامل:",
          "confirmpassword": "تأكيد كلمة المرور:",
          "home": "منزل",
          "contact": "تحول",
          "menu": "قائمة الطعام",
          "feed": "أخبارعلف",
          "news": "أخبار",
          "announcements": "إعلانات",
          "notices": "إخطارات",
          "events": "أحداث",
          "alerts": "تحذيرات",
          "location": "موقع",
          "emergency": "الطوارئ",
          "people-list": "قائمة الشعب"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
