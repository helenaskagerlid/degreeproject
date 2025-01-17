import { useState } from "react";
import * as Tone from "tone";
import "./changeVoiceStyles.scss";

export const ChangeVoiceComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [player, setPlayer] = useState<Tone.Player | null>(null);
  const [recorder, setRecorder] = useState<Tone.Recorder | null>(null);
  const [mic, setMic] = useState<Tone.UserMedia | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const applyEffect = () => {
    if (player && selectedEffect) {
      switch (selectedEffect) {
        case "chipmunk":
          player.playbackRate = 1.7;
          break;
        case "mountaintroll":
          player.playbackRate = 0.6;
          break;
        default:
          player.playbackRate = 1.0;
      }
      player.start();
      setIsPlaying(true);

      player.onstop = () => setIsPlaying(false);
    }
  };

  const stopPlayback = () => {
    if (player) {
      player.stop();
      setIsPlaying(false);
    }
  };

  return (
    <section className="change-voice-section">
      <div className="recorder">
        <button
          className="start-btn btn"
          onClick={startRecording}
          disabled={isRecording}
        >
          Start recording
        </button>

        <button
          className="stop-btn btn"
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop recording
        </button>
      </div>
      <div className="is-recording-wrapper">
        {isRecording && (
          <>
            <div className="recording-indicator" />
            <p>REC</p>
          </>
        )}
      </div>

      {player && (
        <div className="effect-controls">
          <label htmlFor="effect-selector">Select effect:</label>
          <select
            id="effect-selector"
            value={selectedEffect || ""}
            onChange={(e) => setSelectedEffect(e.target.value)}
          >
            <option value="" disabled>
              Choose an effect
            </option>
            <option value="chipmunk">Chipmunk</option>
            <option value="mountaintroll">Mountaintroll</option>
          </select>
          <button
            className="btn effect-btn"
            onClick={applyEffect}
            disabled={!selectedEffect || isPlaying}
          >
            Play with effect
          </button>
          <button
            className="btn effect-btn"
            onClick={stopPlayback}
            disabled={!isPlaying}
          >
            Stop
          </button>
        </div>
      )}
    </section>
  );
};
