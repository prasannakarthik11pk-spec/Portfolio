import { marqueeWords } from '../data/portfolio';

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span className="marquee-item" key={`${word}-${i}`}>
            {word}
            <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}
