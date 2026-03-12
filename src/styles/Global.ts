import { css } from '@linaria/core';

export const globals = css`
  :global() {
    *,
    *::after,
    *::before {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Tahoma 11', sans-serif;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    :root,
    html[data-theme='light'] {
      color-scheme: light;
      /* Ragnarok Online–style light palette */
      --primary: #3a5f98; /* window title / main border */
      --secondary: #e6e6e6; /* window background */

      --text: #000;
      --header_text: #ffffff;

      --warning_header_bg: #3a5f98;
      --warning_header_text: #ffffff;

      --scrollbar_bg: #d4d7e3;
      --scrollbar_thumb: #3a5f98;

      --mvpCard_id: #1f1f1f;
      --mvpCard_name: #1f3f7a;
      --mvpCard_bg: #e6e6e6;
      --mvpCard_text: #1f1f1f;
      --mvpCard_killButton: #b3262e; /* RO red button */
      --mvpCard_editButton: #3a5f98;

      --mvpCard_controls_showMap: #3a5f98;
      --mvpCard_controls_edit: #2f7fa8;
      --mvpCard_controls_delete: #b3262e;

      --timers_passed: #b3262e;
      --timers_normal: #1f1f1f;
      --timers_respawning: #2f7fa8;

      --switch_bg: #3a5f98;
      --switch_handle: #f6f8fa;

      --modal_bg: #e6e6e6;
      --modal_text: #1f1f1f;
      --modal_hl: #1f3f7a;
      --modal_name: #1f3f7a;
      --modal_time: #1f3f7a;
      --modal_button: #3a5f98;

      --modal_datePicker_border: #3a5f98;

      --modal_serverSelect_bg: #d4d7e3;
      --modal_serverSelect_bgActive: #3a5f98;
      --modal_serverSelect_text: #000;
      --modal_serverSelect_textActive: #ffffff;
      --modal_serverSelect_border: #3a5f98;

      --modal_changeMap_border: #3a5f98;
      --modal_changeMap_text: #000;
      --modal_changeMap_selectedMapBorder: #3a5f98;

      --filterSearch_bg: #ffffff;
      --filterSearch_border: #3a5f98;
      --filterSearch_text: #000;
      --filterSearch_border_focus: #1f3f7a;

      --languagePicker_bg: #d4d7e3;
      --languagePicker_border: #3a5f98;
      --languagePicker_text: #1f1f1f;

      --footer_text: #000;
      --footer_link: #1f3f7a;

      --pulse_color: #d4d7e3;

      color: var(--text);
    }

    html[data-theme='dark'] {
      color-scheme: dark;
      /* Dark variant inspired by RO but subdued */
      --primary: #253a5c;
      --secondary: #1e1f26;

      --text: #f5f5f5;
      --header_text: #ffffff;

      --warning_header_bg: #3a5f98;
      --warning_header_text: #ffffff;

      --scrollbar_bg: #1e1f26;
      --scrollbar_thumb: #3a5f98;

      --mvpCard_id: #f5f5f5;
      --mvpCard_name: #ffffff;
      --mvpCard_bg: #252633;
      --mvpCard_text: #f5f5f5;
      --mvpCard_killButton: #b3262e;
      --mvpCard_editButton: #3a5f98;
      --mvpCard_controls_showMap: #3a5f98;
      --mvpCard_controls_edit: #2f7fa8;
      --mvpCard_controls_delete: #b3262e;

      --timers_passed: #ff6b6b;
      --timers_normal: #f5f5f5;
      --timers_respawning: #7fb7ff;

      --switch_bg: #3a5f98;
      --switch_handle: #f6f8fa;

      --modal_bg: #252633;
      --modal_text: #f5f5f5;
      --modal_hl: #ffffff;
      --modal_name: #7fb7ff;
      --modal_time: #7fb7ff;
      --modal_button: #3a5f98;

      --modal_datePicker_border: #7fb7ff;

      --modal_serverSelect_bg: #2f3140;
      --modal_serverSelect_bgActive: #3a5f98;
      --modal_serverSelect_text: #f5f5f5;
      --modal_serverSelect_textActive: #ffffff;
      --modal_serverSelect_border: transparent;

      --modal_changeMap_border: #7fb7ff;
      --modal_changeMap_text: #f5f5f5;
      --modal_changeMap_selectedMapBorder: #7fb7ff;

      --filterSearch_bg: #252633;
      --filterSearch_border: #1b1c1d;
      --filterSearch_text: #f5f5f5;
      --filterSearch_border_focus: #7fb7ff;

      --languagePicker_bg: #2f3140;
      --languagePicker_border: #1b1c1d;
      --languagePicker_text: #f5f5f5;

      --footer_text: #f5f5f5;
      --footer_link: #7fb7ff;

      --pulse_color: #303244;

      color: var(--text);
    }

    html {
      font-size: 62.5%;
    }

    body,
    button,
    input,
    textarea {
      font-size: 1.6rem;
    }

    a {
      text-decoration: none;
    }

    button,
    input {
      border: 0;
    }

    button {
      cursor: pointer;
    }

    *:not(body, html)::-webkit-scrollbar-track {
      background-color: var(--scrollbar_bg);
    }

    *:not(body, html)::-webkit-scrollbar {
      width: 1.6rem;

      @media (max-width: ${1000 / 16}em) {
        width: 1.2rem;
      }
    }

    *:not(body, html)::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 4px solid transparent;
      background-clip: content-box;
      background-color: var(--scrollbar_thumb);

      @media (max-width: ${1000 / 16}em) {
        border-radius: 10px;
      }
    }
  }
`;
