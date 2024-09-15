declare global {
  interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  }

  interface TelegramWebApp {
    initDataUnsafe: {
      user?: TelegramWebAppUser;
    };
    ready: () => void;
    setBackgroundColor: (color: string) => void;
    setHeaderColor: (color: string) => void;
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

export {};
