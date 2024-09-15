import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const { WebApp } = window.Telegram;

      // Инициализация WebApp
      WebApp.ready();

      // Установка фона и заголовка
      WebApp.setBackgroundColor("#ffffff");
      WebApp.setHeaderColor("theme");

      // Получение данных пользователя
      const user = WebApp.initDataUnsafe?.user;
      console.log("Current user:", user);

      // Показать основной текст
      if (user) {
        alert(`Hello, ${user.first_name}!`);
      }
    } else {
      console.error("Telegram WebApp is not available.");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Telegram Mini App!</h1>
    </div>
  );
}

export default App;
