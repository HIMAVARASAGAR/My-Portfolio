import { surnamePaths, surnameWidth } from '../data/namePaths';
export default function NameMark() {
  return <h1 className="hero-name name-mark" aria-label="Himavara Sagar">
    <span className="name-first" aria-hidden="true">{Array.from('Himavara').map((letter, i) => <span className="name-letter" key={i}>{letter}</span>)}</span>
    <span className="hero-surname name-signature" aria-hidden="true">
      <svg viewBox={`0 0 ${surnameWidth} 1050`} className="surname-vector" fill="none">
        {surnamePaths.map((glyph, i) => <g key={i} transform={`translate(${glyph.x + 25},775) scale(1,-1)`}><path className="signature-glyph" d={glyph.d} pathLength="1" fill="currentColor" stroke="currentColor" strokeWidth="1.5" /></g>)}
      </svg>
      <span className="signature-period">.</span>
      <svg className="signature-underline" viewBox="0 0 500 50" fill="none"><path pathLength="1" d="M8 35C100 12 280 12 488 22M75 44C185 24 355 30 415 36" /></svg>
    </span>
  </h1>;
}
