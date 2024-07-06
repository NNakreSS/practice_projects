import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import emojiList from "../emojiList.json";
import EmojiResults from "../EmojiResults";
import filterEmoji from "../filterEmoji";
import App from "../App";

describe("Emoji search testing...", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("Header rendering test", () => {
    const header = screen.getByText(/Emoji Search/i);
    const images = screen.getAllByRole("img");
    expect(header).toBeInTheDocument(); // header texti document içerisinde render edili mi
    expect(images[0]); // hedae içerisinde 1. görsel var mı
    expect(images[1]); // header içerisinde 2. görsel var mı
  });

  test("First emojis render", () => {
    const firstEmojis = emojiList.slice(0, 19); // ilk 20 emojiyi bir listeye alıyoruz bu ilk sayfada render edilen ilk 20 emoji
    firstEmojis.map((emoji) =>
      expect(screen.getByText(emoji.title)).toBeInTheDocument()
    ); // ilk 20 emojinin ekranda olup olmadığına bakıyoruz.
  });

  test("search Filter emojis", () => {
    const filterSearch = "dev";
    const filterList = filterEmoji(filterSearch, 20);
    render(<EmojiResults emojiData={filterList} />);
    filterList.map((emoji) =>
      expect(screen.getByText(emoji.title)).toBeInTheDocument()
    ); // filtrelenen emojinin ekranda olup olmadığına bakıyoruz.
  });

  test("Click and copy emoji", () => {
    const button = screen.getAllByTestId("test-copy-emoji")[0];
    userEvent.click(button);
    expect(button).toHaveAttribute('data-clipboard-text', "💯");
  });
});
