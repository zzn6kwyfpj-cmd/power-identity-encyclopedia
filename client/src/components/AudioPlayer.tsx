import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

interface AudioPlayerProps {
  src?: string;
  title: string;
  subtitle?: string;
  type: "spoken" | "music";
  placeholder?: boolean;
}

export function AudioPlayer({ src, title, subtitle, type, placeholder = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);

  const accentColor = type === "spoken" ? "#d4af37" : "#6b3fa0";
  const icon = type === "spoken" ? "🎙" : "♪";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };

    const handleLoaded = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current || placeholder) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration || placeholder) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{
      background: "#0f1923",
      border: `1px solid ${accentColor}30`,
      borderLeft: `4px solid ${accentColor}`,
      padding: "20px 24px",
      marginBottom: 16,
    }}>
      {src && <audio ref={audioRef} src={src} preload="metadata" />}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 44, height: 44,
          background: `${accentColor}15`,
          border: `1px solid ${accentColor}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0,
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontFamily: "Cinzel, serif", color: accentColor, fontSize: 12, letterSpacing: "0.05em" }}>{title}</div>
          {subtitle && <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#64748b", fontSize: 12, marginTop: 2 }}>{subtitle}</div>}
        </div>
      </div>

      {placeholder ? (
        /* Placeholder state — no audio uploaded yet */
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <div style={{ fontFamily: "Cormorant Garamond, serif", color: "#475569", fontSize: 13, fontStyle: "italic", marginBottom: 8 }}>
            No audio uploaded yet
          </div>
          <div style={{ fontFamily: "Cinzel, serif", color: "#334155", fontSize: 9, letterSpacing: "0.2em" }}>
            UPLOAD AN AUDIO FILE TO ACTIVATE THIS PLAYER
          </div>
        </div>
      ) : (
        <>
          {/* Progress Bar */}
          <div
            onClick={handleSeek}
            style={{
              height: 4,
              background: "rgba(212,175,55,0.1)",
              borderRadius: 2,
              cursor: "pointer",
              marginBottom: 12,
              position: "relative",
            }}
          >
            <div style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(to right, ${accentColor}, ${accentColor}cc)`,
              borderRadius: 2,
              transition: "width 0.1s linear",
            }} />
          </div>

          {/* Controls Row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              style={{
                width: 36, height: 36,
                background: accentColor,
                border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {isPlaying
                ? <Pause size={14} style={{ color: "#0a1118" }} />
                : <Play size={14} style={{ color: "#0a1118", marginLeft: 2 }} />
              }
            </button>

            {/* Time */}
            <div style={{ fontFamily: "Cinzel, serif", color: "#64748b", fontSize: 10, letterSpacing: "0.05em", flexShrink: 0 }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Volume */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" }}>
              <button onClick={toggleMute} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#64748b", padding: 0 }}>
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolume}
                style={{ width: 60, accentColor }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
