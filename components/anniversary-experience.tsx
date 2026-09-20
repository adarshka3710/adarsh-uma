"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { memories, type Memory } from "@/data/memories";
import {
  copy,
  names,
  relationship,
  site,
  type PersonName,
} from "@/data/relationship";

type IconName =
  | "heart"
  | "arrow"
  | "music"
  | "pause"
  | "volume"
  | "mute"
  | "close"
  | "pin"
  | "spark"
  | "star"
  | "envelope";

function Icon({
  name,
  size = 20,
  filled = false,
}: {
  name: IconName;
  size?: number;
  filled?: boolean;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "heart")
    return (
      <svg {...common}>
        <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    );
  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  if (name === "music")
    return (
      <svg {...common}>
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </svg>
    );
  if (name === "pause")
    return (
      <svg {...common}>
        <path d="M9 5v14M15 5v14" />
      </svg>
    );
  if (name === "volume")
    return (
      <svg {...common}>
        <path d="M11 5 6 9H3v6h3l5 4V5ZM15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" />
      </svg>
    );
  if (name === "mute")
    return (
      <svg {...common}>
        <path d="M11 5 6 9H3v6h3l5 4V5ZM16 9l5 6M21 9l-5 6" />
      </svg>
    );
  if (name === "close")
    return (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M12 21s6-5.1 6-12A6 6 0 0 0 6 9c0 6.9 6 12 6 12Z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    );
  if (name === "star")
    return (
      <svg {...common}>
        <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.6-4.4 6.3-.9L12 2.8Z" />
      </svg>
    );
  if (name === "envelope")
    return (
      <svg {...common}>
        <path d="M3.5 6.5h17v12h-17zM4 7l8 6 8-6" />
        <path d="m4 18 5.2-6M20 18l-5.2-6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  children,
  note,
  light = false,
}: {
  children: React.ReactNode;
  note?: string;
  light?: boolean;
}) {
  return (
    <header className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <h2>{children}</h2>
      {note && <p>{note}</p>}
    </header>
  );
}

function Intro({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`intro ${opened ? "intro--opening" : ""}`} aria-label="Anniversary introduction">
      <div className="intro-grain" />
      <div className="intro-orbit intro-orbit--one" />
      <div className="intro-orbit intro-orbit--two" />
      <div className="intro-copy" aria-live="polite">
        {copy.intro.lines.map((line, index) => (
          <p className={`intro-line intro-line--${index + 1}`} key={line}>
            {line}
          </p>
        ))}
        <div className="intro-title">
          <span>{copy.intro.title}</span>
          <Icon name="heart" size={22} filled />
        </div>
        <p className="intro-names">{site.coupleLabel}</p>
      </div>
      <button
        className="envelope-button"
        onClick={() => {
          setOpened(true);
          window.setTimeout(onOpen, 950);
        }}
      >
        <span className="envelope-mark">
          <Icon name="heart" size={18} filled />
        </span>
        <span>{copy.intro.openLetter}</span>
      </button>
      <button className="intro-skip" onClick={onOpen}>
        {copy.intro.skip}
      </button>
    </div>
  );
}

function Hero() {
  const startStory = () =>
    document.querySelector("#our-story")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero" id="top">
      <div className="hero-noise" />
      <div className="hero-frame">
        <div className="hero-date">{site.heroDate}</div>
        <h1>
          {copy.hero.lines.map((line, index) => (
            <span className={index === 2 ? "hero-emphasis" : undefined} key={line}>
              {line}
            </span>
          ))}
        </h1>
        <div className="hero-couple">
          {names.him} <Icon name="heart" size={26} filled /> {names.her}
        </div>
        <p className="hero-note">
          {copy.hero.note[0]}
          <br />
          {copy.hero.note[1]}
        </p>
        <button className="story-button" onClick={startStory}>
          <Icon name="envelope" />
          <span>{copy.hero.cta}</span>
          <Icon name="arrow" />
        </button>
      </div>
      <div className="film-perforations film-perforations--top" />
      <div className="film-perforations film-perforations--bottom" />
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section story-section" id="our-story">
      <Reveal>
        <SectionHeading note={copy.timeline.note}>
          {copy.timeline.title}
        </SectionHeading>
      </Reveal>
      <div className="timeline">
        <div className="timeline-line" aria-hidden />
        {relationship.timeline.map((item, index) => (
          <article className="timeline-entry reveal" key={item.year}>
            <div className="timeline-marker">
              <span>{item.year}</span>
              <small>YEAR</small>
            </div>
            <div className="timeline-photo">
              <Image
                src={item.image}
                alt={`Year ${item.year} memory`}
                width={900}
                height={1100}
                sizes="(max-width: 700px) 80vw, 36vw"
              />
              <span>{item.date}</span>
            </div>
            <div className="timeline-copy">
              <h3>{item.label}</h3>
              <p>{item.story}</p>
              <blockquote>{item.emotionalMemory}</blockquote>
              <span className="scribble">{item.funnyCaption}</span>
            </div>
            <span className="frame-number">0{index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemoryDialog({
  memory,
  onClose,
}: {
  memory: Memory;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prior = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
          ),
        ).filter((element) => !element.hasAttribute("disabled"));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.body.classList.add("no-scroll");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
      prior?.focus();
    };
  }, [onClose]);
  return (
    <div className="memory-dialog-backdrop" onMouseDown={onClose}>
      <div
        className="memory-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="memory-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="dialog-close" onClick={onClose} aria-label="Close memory">
          <Icon name="close" />
        </button>
        <div className="dialog-image">
          <Image
            src={memory.image}
            alt={memory.title}
            width={1200}
            height={1600}
            sizes="(max-width: 800px) 92vw, 50vw"
          />
        </div>
        <div className="dialog-copy">
          <div className="dialog-meta">
            <span>{memory.date}</span>
            {memory.location && (
              <span>
                <Icon name="pin" size={15} /> {memory.location}
              </span>
            )}
          </div>
          <h3 id="memory-title">{memory.title}</h3>
          <p>{memory.description}</p>
          {memory.emotionalMessage && <blockquote>{memory.emotionalMessage}</blockquote>}
          {memory.funnyCaption && <span className="scribble">{memory.funnyCaption}</span>}
          {memory.placeholder && (
            <p className="replace-note">{copy.gallery.photoSoon}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function MemoryGallery() {
  const [selected, setSelected] = useState<Memory | null>(null);
  return (
    <section className="gallery-section story-section" id="memories">
      <Reveal>
        <SectionHeading note={copy.gallery.note}>
          {copy.gallery.title}
        </SectionHeading>
      </Reveal>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <button
            className={`polaroid reveal polaroid--${(index % 3) + 1}`}
            key={memory.id}
            onClick={() => setSelected(memory)}
          >
            <span className="polaroid-image">
              <Image
                src={memory.image}
                alt={memory.title}
                width={1200}
                height={1600}
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 28vw"
              />
            </span>
            <span className="polaroid-caption">
              <strong>{memory.title}</strong>
              <small>{memory.funnyCaption}</small>
              {memory.placeholder && <em>{copy.gallery.photoSoon}</em>}
            </span>
          </button>
        ))}
      </div>
      {selected && <MemoryDialog memory={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function FunnyFacts() {
  const [answers, setAnswers] = useState<Record<number, PersonName>>({});
  return (
    <section className="facts-section story-section" id="facts">
      <Reveal>
        <SectionHeading note={copy.facts.note}>
          {copy.facts.title}
        </SectionHeading>
      </Reveal>
      <div className="facts-list">
        {relationship.facts.map((fact, index) => {
          const guess = answers[index];
          const answered = Boolean(guess);
          const tied = fact.him === fact.her;
          const winner = tied ? "Tie" : fact.him > fact.her ? names.him : names.her;
          return (
            <article
              className={`fact-card${answered ? " fact-card--answered" : ""}`}
              key={fact.question}
            >
              <p className="fact-count">Case {String(index + 1).padStart(2, "0")}</p>
              <h3>{fact.question}</h3>
              {!answered ? (
                <div className="fact-choices">
                  <button type="button" onClick={() => setAnswers((value) => ({ ...value, [index]: names.him }))}>
                    {names.him}
                  </button>
                  <span>{copy.facts.or}</span>
                  <button type="button" onClick={() => setAnswers((value) => ({ ...value, [index]: names.her }))}>
                    {names.her}
                  </button>
                </div>
              ) : (
                <div className="fact-result" aria-live="polite">
                  <div>
                    <span>{names.him}</span>
                    <div className="fact-track" aria-hidden>
                      <span style={{ "--pct": `${fact.him}%` } as React.CSSProperties} />
                    </div>
                    <b>{fact.him}%</b>
                  </div>
                  <div>
                    <span>{names.her}</span>
                    <div className="fact-track" aria-hidden>
                      <span style={{ "--pct": `${fact.her}%` } as React.CSSProperties} />
                    </div>
                    <b>{fact.her}%</b>
                  </div>
                  <p>
                    {copy.facts.guessPrefix} <strong>{guess}</strong>. {copy.facts.resultPrefix}{" "}
                    <strong>{winner}</strong>
                    {guess === winner ? copy.facts.knew : tied ? "." : copy.facts.disagree}
                    <br />
                    {fact.verdict}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DistanceSection({ onMissYou }: { onMissYou: () => void }) {
  return (
    <section className="distance-section story-section" id="distance">
      <div className="distance-stars" aria-hidden />
      <Reveal>
        <SectionHeading light note={copy.distance.note}>
          {copy.distance.titleLines[0]}
          <br />
          {copy.distance.titleLines[1]}
        </SectionHeading>
      </Reveal>
      <div className="distance-map reveal">
        <div className="place place--left">
          <Icon name="pin" />
          <span>{names.him}</span>
          <small>{relationship.distance.himPlace}</small>
        </div>
        <div className="connection">
          <i />
          <span>{relationship.distance.kilometers.toLocaleString()} km</span>
        </div>
        <div className="place place--right">
          <Icon name="pin" />
          <span>{names.her}</span>
          <small>{relationship.distance.herPlace}</small>
        </div>
      </div>
      <div className="distance-copy reveal">
        <p>{copy.distance.lead}</p>
        <ul>
          {copy.distance.misses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <blockquote>{copy.distance.quote}</blockquote>
      </div>
      <div className="chat-window reveal">
        <div className="chat-top">
          <span>{names.her}</span>
          <small>{copy.distance.chatStatus}</small>
        </div>
        <div className="chat-body">
          {relationship.chat.map((message, index) => (
            <div
              className={`chat-message ${message.sender === names.him ? "chat-message--sent" : "chat-message--received"}`}
              style={{ "--chat-delay": `${index * 450}ms` } as React.CSSProperties}
              key={`${message.sender}-${message.text}`}
            >
              <small>{message.sender}</small>
              <p>{message.text}</p>
            </div>
          ))}
          <div className="typing">
            <i />
            <i />
            <i />
            <span>{copy.distance.typing}</span>
          </div>
          <p className="chat-punchline">{copy.distance.punchline}</p>
        </div>
      </div>
      <button className="miss-you-button" onClick={onMissYou}>
        <Icon name="heart" filled />
        {copy.distance.missYouButton}
      </button>
    </section>
  );
}

function LoveReasons() {
  return (
    <section className="love-section story-section">
      <Reveal>
        <SectionHeading note={copy.love.note}>
          {copy.love.title}
        </SectionHeading>
      </Reveal>
      <div className="love-list">
        {relationship.loveReasons.map((reason, index) => (
          <article className="love-line reveal" key={reason}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{reason}</p>
            <Icon name="heart" size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}

function LoveLetter() {
  const fullText = relationship.letter.join("\n\n");
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setStarted(true), { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!started || visible >= fullText.length) return;
    const timer = window.setTimeout(() => setVisible((value) => Math.min(value + 3, fullText.length)), 18);
    return () => window.clearTimeout(timer);
  }, [started, visible, fullText.length]);
  const complete = visible >= fullText.length;
  return (
    <section className="letter-section story-section" ref={sectionRef}>
      <div className="letter-glow" />
      <Reveal>
        <SectionHeading light>{copy.letter.title}</SectionHeading>
      </Reveal>
      <div className="letter-paper reveal">
        <span className="letter-date">{site.displayDate}</span>
        <p className="typed-letter">{fullText.slice(0, visible)}{!complete && <i className="caret" />}</p>
        {!complete && (
          <button onClick={() => setVisible(fullText.length)}>{copy.letter.readAll}</button>
        )}
      </div>
    </section>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 1300;
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

function NumbersAndMovie() {
  return (
    <>
      <section className="numbers-section story-section">
        <Reveal>
          <SectionHeading note={copy.numbers.note}>{copy.numbers.title}</SectionHeading>
        </Reveal>
        <div className="number-grid">
          {copy.numbers.items.map((item) =>
            item.kind === "count" ? (
              <div key={item.label}>
                <Counter value={item.value} suffix={item.suffix} />
                <p>{item.label}</p>
              </div>
            ) : (
              <div key={item.label}>
                <span className={item.value === "∞" ? "infinity" : undefined}>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ),
          )}
        </div>
        <p className="still-counting">{copy.numbers.stillCounting}</p>
      </section>
      <section className="movie-section story-section" id="movie">
        <div className="movie-grain" />
        <div className="movie-poster reveal">
          <h2>
            {copy.movie.titleLines[0]}
            <br />
            {copy.movie.titleLines[1]}
          </h2>
          <div className="movie-cast">
            <span>{names.him}</span>
            <i>&</i>
            <span>{names.her}</span>
          </div>
          <p className="movie-genres">{copy.movie.genres}</p>
          <div className="movie-roles">
            <p>
              <strong>{names.him}</strong>
              <br />
              {copy.movie.himRole}
            </p>
            <p>
              <strong>{names.her}</strong>
              <br />
              {copy.movie.herRole}
            </p>
          </div>
          <div className="movie-rating" aria-label="Five stars">
            {Array.from({ length: 5 }, (_, index) => (
              <Icon name="star" filled key={index} />
            ))}
          </div>
          <p className="movie-runtime">{copy.movie.runtime}</p>
        </div>
      </section>
    </>
  );
}

function FutureIcon({ index }: { index: number }) {
  const paths = [
    <path key="trip" d="m3 14 7-2 4-8 2 1-2 7 6 3-1 2-7-2-4 5-1-1 2-5-5-1Z" />,
    <path key="date" d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" />,
    <path key="home" d="m3 11 9-7 9 7v9h-6v-6H9v6H3Z" />,
    <path key="adventure" d="M5 19 19 5M9 5h10v10" />,
    <path key="memory" d="M4 5h16v14H4zM8 9h.01M4 16l4-4 3 3 2-2 7 6" />,
    <path key="us" d="M8.2 8.3c-3.5 0-3.5 7.4 0 7.4 3.4 0 4.4-7.4 7.6-7.4 3.5 0 3.5 7.4 0 7.4-3.2 0-4.2-7.4-7.6-7.4Z" />,
  ];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {paths[index % paths.length]}
    </svg>
  );
}

function FutureSection() {
  return (
    <section className="future-section story-section" id="future">
      <Reveal>
        <SectionHeading note={copy.future.note}>{copy.future.title}</SectionHeading>
      </Reveal>
      <div className="future-track">
        {relationship.futureCards.map((card, index) => (
          <article className="future-card reveal" key={card.title}>
            <span className="future-symbol">
              <FutureIcon index={index} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.note}</p>
          </article>
        ))}
      </div>
      <p className="future-promise">
        {copy.future.promise[0]}
        <br />
        {copy.future.promise[1]}
      </p>
    </section>
  );
}

function Finale({ onHeart }: { onHeart: () => void }) {
  return (
    <section className="finale story-section">
      <div className="finale-film" aria-hidden>
        {memories.slice(0, 5).map((memory) => (
          <Image
            key={memory.id}
            src={memory.image}
            alt=""
            width={180}
            height={220}
            style={{ objectFit: "cover" }}
          />
        ))}
      </div>
      <div className="finale-copy reveal">
        {copy.finale.countdown.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <strong>{copy.finale.you}</strong>
      </div>
      <div className="finale-message reveal">
        <p>{copy.finale.greeting}</p>
        <h2>{copy.finale.headline}</h2>
        <span>{site.displayDate}</span>
        <p>
          {copy.finale.body[0]}
          <br />
          {copy.finale.body[1]}
        </p>
        <blockquote>{copy.finale.quote}</blockquote>
        <p>{copy.finale.toast}</p>
        <h3>
          {copy.finale.closingLines[0]}
          <br />
          {copy.finale.closingLines[1]}
        </h3>
        <span className="signature">{copy.finale.signature}</span>
      </div>
      <button className="final-heart" onClick={onHeart} aria-label="Reveal the final message">
        <Icon name="heart" size={80} filled />
        <span>{copy.finale.oneLastThing}</span>
      </button>
    </section>
  );
}

function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [error, setError] = useState(false);
  useEffect(() => {
    const saved = window.sessionStorage.getItem("anniversary-music");
    if (saved === "muted") queueMicrotask(() => setMuted(true));
  }, []);
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
      setError(false);
    } catch {
      setError(true);
    }
  };
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    audioRef.current.muted = muted;
    window.sessionStorage.setItem("anniversary-music", muted ? "muted" : playing ? "playing" : "paused");
  }, [volume, muted, playing]);
  return (
    <div className={`music-control ${playing ? "music-control--playing" : ""}`}>
      <audio
        ref={audioRef}
        src={relationship.audio.src}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onError={() => setError(true)}
      />
      <button onClick={toggle} aria-label={playing ? copy.music.pause : copy.music.play}>
        <span className="music-icon"><Icon name={playing ? "pause" : "music"} /></span>
        <span>
          <strong>{relationship.audio.title}</strong>
          <small>
            {error ? copy.music.missing : playing ? copy.music.playing : copy.music.play}
          </small>
        </span>
        {playing && <i className="sound-wave"><b /><b /><b /></i>}
      </button>
      <div className="volume-tools">
        <button onClick={() => setMuted((value) => !value)} aria-label={muted ? copy.music.unmute : copy.music.mute}>
          <Icon name={muted ? "mute" : "volume"} size={17} />
        </button>
        <input
          aria-label="Music volume"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
        />
      </div>
    </div>
  );
}

function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="love-toast" role="status">
      <Icon name="heart" filled />
      <span>{message}</span>
    </div>
  );
}

function SurpriseOverlay({
  mode,
  onClose,
}: {
  mode: "secret" | "final";
  onClose: () => void;
}) {
  return (
    <div className={`surprise-overlay surprise-overlay--${mode}`} role="dialog" aria-modal="true">
      <button onClick={onClose} aria-label="Close surprise"><Icon name="close" /></button>
      <div className="heart-burst" aria-hidden>{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</div>
      {mode === "secret" ? (
        <div>{relationship.secretMessages.map((line) => <p key={line}>{line}</p>)}</div>
      ) : (
        <div>
          <Icon name="heart" size={110} filled />
          <p>{copy.surprise.finalLine}</p>
          <strong>{copy.surprise.finalStrong}</strong>
        </div>
      )}
    </div>
  );
}

export default function AnniversaryExperience() {
  const [introVisible, setIntroVisible] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [surprise, setSurprise] = useState<"secret" | "final" | null>(null);
  const [randomMemory, setRandomMemory] = useState<Memory | null>(null);
  const toastTimer = useRef<number | null>(null);
  useEffect(() => {
    document.documentElement.classList.add("js");
    const visited = window.sessionStorage.getItem("anniversary-intro-seen");
    const previewParams = new URLSearchParams(window.location.search);
    const previewSkip = previewParams.has("skipIntro");
    if (previewSkip) document.documentElement.classList.add("preview-all");
    if (visited || previewSkip) queueMicrotask(() => setIntroVisible(false));
    const previewSection = previewParams.get("section");
    if (previewSection) {
      document.documentElement.dataset.previewSection = previewSection;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          entry.target.setAttribute("data-visible", "true");
        }),
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [introVisible]);
  const closeIntro = useCallback(() => {
    window.sessionStorage.setItem("anniversary-intro-seen", "true");
    setIntroVisible(false);
  }, []);
  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3400);
  }, []);
  const missYou = () => {
    const message = relationship.missYouMessages[Math.floor(Math.random() * relationship.missYouMessages.length)];
    showToast(message);
  };
  const oneMoreMemory = () => {
    const next = memories[Math.floor(Math.random() * memories.length)];
    setRandomMemory(next);
  };
  const pageClass = useMemo(() => (introVisible ? "anniversary-page anniversary-page--locked" : "anniversary-page"), [introVisible]);
  return (
    <main className={pageClass}>
      {introVisible && <Intro onOpen={closeIntro} />}
      <Hero />
      <Timeline />
      <MemoryGallery />
      <FunnyFacts />
      <DistanceSection onMissYou={missYou} />
      <LoveReasons />
      <LoveLetter />
      <NumbersAndMovie />
      <FutureSection />
      <Finale onHeart={() => setSurprise("final")} />
      <div className="floating-actions">
        <button onClick={oneMoreMemory}>
          <Icon name="spark" /> {copy.actions.oneMoreMemory}
        </button>
        <button className="secret-trigger" onClick={() => setSurprise("secret")} aria-label={copy.actions.secret}>
          <Icon name="heart" size={13} filled />
        </button>
      </div>
      <MusicControl />
      <Toast message={toast} />
      {randomMemory && <MemoryDialog memory={randomMemory} onClose={() => setRandomMemory(null)} />}
      {surprise && <SurpriseOverlay mode={surprise} onClose={() => setSurprise(null)} />}
    </main>
  );
}
