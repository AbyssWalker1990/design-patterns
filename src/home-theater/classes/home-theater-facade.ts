import { AmplifierInterface } from "../interfaces/amplifier.interface";
import { PopcornPopperInterface } from "../interfaces/popcorn-popper.interface";
import { ProjectorInterface } from "../interfaces/projector.interface";
import { ScreenInterface } from "../interfaces/screen.interface";
import { StreamingPlayerInterface } from "../interfaces/streaming-player.interface";
import { TheaterLightsInterface } from "../interfaces/theater-lights";
import { TunerInterface } from "../interfaces/tuner.interface";

export class HomeTheaterFacade {
  constructor(
    private amplifier: AmplifierInterface,
    private tuner: TunerInterface,
    private streamingPlayer: StreamingPlayerInterface,
    private projector: ProjectorInterface,
    private screen: ScreenInterface,
    private theaterLights: TheaterLightsInterface,
    private popcornPopper: PopcornPopperInterface
  ) {}

  public watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.popcornPopper.on();
    this.popcornPopper.pop();

    this.theaterLights.dim(10);

    this.screen.down();

    this.projector.on();
    this.projector.wideScreenMode();

    this.amplifier.on();
    this.amplifier.setStreamingPlayer(this.streamingPlayer);
    this.amplifier.setSurroundSound();
    this.amplifier.setVolume(5);

    this.streamingPlayer.on();
    this.streamingPlayer.play(movie);
  }

  public endMovie(): void {
    console.log("Shutting movie theater down...");
    this.popcornPopper.off();

    this.theaterLights.on();

    this.screen.up();

    this.projector.off();

    this.amplifier.off();

    this.streamingPlayer.stop();
    this.streamingPlayer.off();
  }
}
