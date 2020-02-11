import UIfx from "uifx";
import ditSound from "./dit.mp3";
import dahSound from "./dah.mp3";

export const dit = new UIfx(ditSound, {
  volume: 0.8, // number between 0.0 ~ 1.0
  throttleMs: 100
});

export const dah = new UIfx(dahSound, {
  volume: 0.8, // number between 0.0 ~ 1.0
  throttleMs: 100
});
