import { useEffect, useRef, useState } from "react";
import { WifiOff, RefreshCw } from "lucide-react";

interface Dot {
  id: number;
  x: number;
  y: number;
  connected: boolean;
}

interface Line {
  from: number;
  to: number;
}

function ConnectDotsGame() {
  const [dots] = useState<Dot[]>(() => {
    const positions = [
      { x: 20, y: 20 }, { x: 50, y: 10 }, { x: 80, y: 25 },
      { x: 90, y: 55 }, { x: 70, y: 80 }, { x: 40, y: 85 },
      { x: 10, y: 65 }, { x: 30, y: 45 }, { x: 60, y: 50 },
      { x: 50, y: 40 },
    ];
    return positions.map((p, i) => ({ id: i, x: p.x, y: p.y, connected: false }));
  });

  const [lines, setLines] = useState<Line[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [connectedIds, setConnectedIds] = useState<Set<number>>(new Set());
  const [complete, setComplete] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleDotClick = (id: number) => {
    if (complete) return;

    if (selected === null) {
      setSelected(id);
    } else if (selected === id) {
      setSelected(null);
    } else {
      const alreadyExists = lines.some(
        (l) => (l.from === selected && l.to === id) || (l.from === id && l.to === selected)
      );
      if (!alreadyExists) {
        const newLines = [...lines, { from: selected, to: id }];
        setLines(newLines);
        setConnectedIds((prev) => new Set([...prev, selected, id]));
        if (newLines.length >= dots.length - 1) {
          setComplete(true);
        }
      }
      setSelected(null);
    }
  };

  const reset = () => {
    setLines([]);
    setSelected(null);
    setConnectedIds(new Set());
    setComplete(false);
  };

  const getDotPos = (id: number) => {
    const dot = dots[id];
    const svg = svgRef.current;
    if (!svg) return { cx: 0, cy: 0 };
    const w = svg.clientWidth || 300;
    const h = svg.clientHeight || 220;
    return { cx: (dot.x / 100) * w, cy: (dot.y / 100) * h };
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-6 select-none">
      <p className="text-center text-sm text-white/60 mb-3">
        {complete
          ? "You connected all the dots! 🎉"
          : selected !== null
            ? "Now click another dot to connect"
            : "Click a dot to start connecting"}
      </p>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5" style={{ height: 220 }}>
        <svg
          ref={svgRef}
          width="100%"
          height="220"
          className="absolute inset-0"
        >
          {/* Lines */}
          {lines.map((l, i) => {
            const a = getDotPos(l.from);
            const b = getDotPos(l.to);
            return (
              <line
                key={i}
                x1={a.cx} y1={a.cy}
                x2={b.cx} y2={b.cy}
                stroke="rgba(45,212,191,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}

          {/* Dots */}
          {dots.map((dot) => {
            const { cx, cy } = getDotPos(dot.id);
            const isSelected = selected === dot.id;
            const isConnected = connectedIds.has(dot.id);

            return (
              <g key={dot.id} onClick={() => handleDotClick(dot.id)} style={{ cursor: "pointer" }}>
                <circle
                  cx={cx} cy={cy} r={18}
                  fill="transparent"
                />
                <circle
                  cx={cx} cy={cy}
                  r={isSelected ? 9 : 7}
                  fill={isSelected ? "hsl(175,80%,50%)" : isConnected ? "hsl(175,60%,45%)" : "rgba(255,255,255,0.3)"}
                  stroke={isSelected ? "hsl(175,80%,70%)" : "rgba(255,255,255,0.2)"}
                  strokeWidth="1.5"
                  style={{ transition: "r 0.15s ease, fill 0.15s ease" }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {complete && (
        <button
          onClick={reset}
          className="mt-4 mx-auto flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors border border-white/20 rounded-full px-4 py-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Play again
        </button>
      )}
    </div>
  );
}

export function OfflineOverlay() {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline = () => setOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 py-12"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #111827 60%, #0d1f2d 100%)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-sm w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
          <WifiOff className="w-8 h-8 text-teal-400" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 font-display">You're offline</h1>
        <p className="text-white/50 text-sm mb-1">
          No internet connection detected.
        </p>
        <p className="text-white/40 text-xs mb-2">
          While you wait, connect the dots below!
        </p>

        <ConnectDotsGame />

        <p className="mt-6 text-xs text-white/30">
          This page will reload automatically when you reconnect.
        </p>
      </div>
    </div>
  );
}
