import { useState } from "react";
import * as Tone from "tone";

export const ChangeVoiceComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [player, setPlayer] = useState<Tone.Player | null>(null);
  const [recorder, setRecorder] = useState<Tone.Recorder | null>(null);
  const [mic, setMic] = useState<Tone.UserMedia | null>(null);

  const startRecording = async () => {
    const micInstance = new Tone.UserMedia();
    await micInstance.open();
    const recorderInstance = new Tone.Recorder();
    micInstance.connect(recorderInstance);

    recorderInstance.start();
    setIsRecording(true);
    setMic(micInstance);
    setRecorder(recorderInstance);
  };

  const stopRecording = async () => {
    if (recorder && mic) {
      const recording = await recorder.stop();
      mic.disconnect();
      setIsRecording(false);
      setMic(null);
      setRecorder(null);
      setPlayer(
        new Tone.Player(URL.createObjectURL(recording)).toDestination()
      );
    }
  };

  const playChipmunk = () => {
    if (player) {
      player.playbackRate = 1.7;
      player.start();
    }
  };

  const playMountaintroll = () => {
    if (player) {
      player.playbackRate = 0.6;
      player.start();
    }
  };

  return (
    <section>
      <button className="btn" onClick={startRecording} disabled={isRecording}>
        Start recording
      </button>
      <button className="btn" onClick={stopRecording} disabled={!isRecording}>
        Stop recording
      </button>
      <button className="btn" onClick={playChipmunk} disabled={!player}>
        Chipmunk
      </button>
      <button className="btn" onClick={playMountaintroll} disabled={!player}>
        Mountaintroll
      </button>
    </section>
  );
};
