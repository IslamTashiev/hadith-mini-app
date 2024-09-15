import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState<TelegramWebAppUser | null>(null);
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
      setUser(user);
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
      {JSON.stringify(user, null, 2)}
    </div>
  );
}

export default App;
