import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

const App: FC = () => {
  return (
    <List>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <a href="/ton-connect">TON Connect</a>
      </Section>
      <Section
        header="Application Launch Data"
        footer="These pages help developer to learn more about current launch information"
      >
        <a href="/init-data">
          <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
        </a>
        <a href="/launch-params">
          <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
        </a>
        <a href="/theme-params">
          <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
        </a>
      </Section>
    </List>
  );
};

export default App;
