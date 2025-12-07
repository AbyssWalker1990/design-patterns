import { Amplifier } from "./classes/amplifier";
import { HomeTheaterFacade } from "./classes/home-theater-facade";
import { PopcornPopper } from "./classes/popcorn-popper";
import { Projector } from "./classes/projector";
import { StreamingPlayer } from "./classes/streaming-player";
import { TheaterLights } from "./classes/theater-lights";
import { Tuner } from "./classes/tuner";
import { Screen } from "./classes/screen";

const amplifier = new Amplifier();
const tuner = new Tuner();
const streamingPlayer = new StreamingPlayer();
const projector = new Projector();
const screen = new Screen();
const theaterLights = new TheaterLights();
const popcornPopper = new PopcornPopper();

const homeTheaterFacade = new HomeTheaterFacade(
  amplifier,
  tuner,
  streamingPlayer,
  projector,
  screen,
  theaterLights,
  popcornPopper
);

homeTheaterFacade.watchMovie("Jurassic Park");
homeTheaterFacade.endMovie();
