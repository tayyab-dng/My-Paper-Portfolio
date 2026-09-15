import React from 'react';

/**
 * AvroKO visual artwork - Golden glowing honeycomb lantern in moody art-deco interior
 */
export function HoneycombLanternArtwork() {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#181310] border border-ink/10">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#120e0b] via-[#241a13] to-[#0d161c]" />
      
      {/* Art Deco Arch & Velvet Drape */}
      <div className="absolute -left-6 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#5a2c16] to-transparent rounded-r-[100%] opacity-80" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#0a1217]" />
      
      {/* Table Plinth */}
      <div className="absolute bottom-0 inset-x-8 h-12 bg-gradient-to-t from-[#6e2213] to-[#9b351d] rounded-t-sm" />

      {/* Golden Cylindrical Honeycomb Lamp */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-28 flex flex-col items-center">
        {/* Brass handle */}
        <div className="w-10 h-7 border-2 border-[#e6b360] rounded-t-full -mb-1" />
        {/* Brass top cap */}
        <div className="w-14 h-3 bg-[#e6b360] rounded-t-sm shadow-sm" />
        {/* Glowing Honeycomb Mesh Core */}
        <div className="relative w-12 h-20 bg-gradient-to-b from-[#ffd276] via-[#ffaa33] to-[#d87216] rounded-sm shadow-[0_0_35px_rgba(255,180,60,0.85)] flex items-center justify-center overflow-hidden">
          {/* Honeycomb grid pattern */}
          <div 
            className="absolute inset-0 opacity-45"
            style={{
              backgroundImage: `radial-gradient(circle at center, #2b1404 2px, transparent 3px)`,
              backgroundSize: '7px 7px'
            }}
          />
          {/* Bright filament glow */}
          <div className="w-4 h-12 bg-white/90 blur-[2px] rounded-full" />
        </div>
        {/* Brass bottom base */}
        <div className="w-14 h-3 bg-[#d99f48] rounded-b-sm" />
      </div>
    </div>
  );
}

/**
 * WOW Concept visual artwork - Futuristic vibrant blue concept showroom
 */
export function WowConceptArtwork() {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#578fc9] border border-ink/10">
      {/* Perspective room walls */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4d86c4] via-[#6ba2dc] to-[#98c5f0]" />

      {/* Left shelving grid */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-[#3c74b0]/40 grid grid-rows-4 gap-1 p-1">
        <div className="border-b border-white/40" />
        <div className="border-b border-white/40" />
        <div className="border-b border-white/40" />
      </div>

      {/* Right shelving grid */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#3c74b0]/40 grid grid-rows-4 gap-1 p-1">
        <div className="border-b border-white/40" />
        <div className="border-b border-white/40" />
        <div className="border-b border-white/40" />
      </div>

      {/* Central Modern Display Pedestal */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#bad9f7] rounded-t-md shadow-lg border-t-2 border-white/50 flex flex-col items-center">
        {/* Display Items on Top */}
        <div className="flex gap-2 -mt-4">
          <div className="w-3 h-5 bg-[#1b2533] rounded-xs" />
          <div className="w-4 h-6 bg-[#2a3c50] rounded-xs" />
          <div className="w-3 h-4 bg-[#1b2533] rounded-xs" />
        </div>
        {/* Column Pillar Accent */}
        <div className="w-12 h-full bg-[#8fbbe6]/60 mt-2" />
      </div>

      {/* Background Pixel Column Sculpture */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-16 bg-gradient-to-b from-[#70b379] to-[#3b8744] opacity-80 rounded-sm" />
    </div>
  );
}

/**
 * Unexpected Time visual artwork - Surreal oil painting with glowing eye
 */
export function UnexpectedTimeArtwork() {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#16273b] border border-ink/10">
      {/* Starry Night Sky Swirls */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1c2d] via-[#1a385c] to-[#254d7e]">
        {/* Painterly brush strokes */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffea78]/30 via-transparent to-transparent" />
      </div>

      {/* Character Profile with Hat */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-36 flex flex-col items-center">
        {/* Dark Fedora/Brim Hat */}
        <div className="w-32 h-10 bg-[#1e3427] rounded-t-full relative z-10 shadow-md">
          <div className="w-40 h-3 bg-[#132219] -ml-4 mt-7 rounded-full" />
        </div>

        {/* Sculpted Face */}
        <div className="relative w-24 h-24 bg-[#b56b85] -mt-1 rounded-b-xl overflow-hidden flex items-center justify-center">
          {/* Beard / Shadow */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-[#7a3b50]" />

          {/* Glowing Cybernetic / Gold Iris Eye */}
          <div className="absolute top-4 right-6 w-5 h-5 bg-[#142316] rounded-full flex items-center justify-center border border-[#8ce336]">
            <div className="w-2.5 h-2.5 bg-[#cbff3a] rounded-full shadow-[0_0_10px_#a8ff00]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Niccolo with Star Earring Avatar (Left Column Illustration)
 */
export function NiccoloStarAvatar() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] mx-auto overflow-hidden bg-[#8e7667] border border-ink/15 shadow-sm">
      {/* Warm illustrated skin background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8f7465] via-[#a88a77] to-[#735a4d]" />

      {/* Brown Beanie Hat */}
      <div className="absolute -top-4 -left-6 w-48 h-48 bg-[#4a3628] rounded-full transform -rotate-12 border-b-4 border-[#33241a]" />

      {/* Face Contour & Jaw */}
      <div className="absolute top-16 left-12 w-48 h-56 bg-[#d99f82] rounded-3xl transform rotate-3">
        {/* Cheek shading */}
        <div className="absolute top-8 left-4 w-28 h-28 bg-[#c4876b] rounded-full blur-[4px] opacity-70" />

        {/* Stubble Beard */}
        <div className="absolute bottom-6 left-2 right-6 h-16 bg-[#523d33]/50 rounded-b-2xl" />

        {/* Ear */}
        <div className="absolute top-10 -left-6 w-12 h-20 bg-[#cf9377] rounded-full border border-[#8f5740]" />

        {/* Big Yellow Five-Pointed Star Earring / Patch */}
        <div className="absolute top-8 left-1 z-20 w-16 h-16 drop-shadow-md">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#d4ab3b] stroke-[#99741e] stroke-[3]">
            <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
          </svg>
        </div>
      </div>

      {/* Dark Jacket Shoulder */}
      <div className="absolute -bottom-6 -left-8 -right-8 h-28 bg-[#1f1a18] rounded-t-[50%]" />
    </div>
  );
}

/**
 * Niccolo Close-Up Eyes & Forehead Portrait (Right Column Illustration)
 */
export function NiccoloPortraitFace() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-[#a68c7c] border border-ink/20">
      {/* Skin undertone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8c7161] via-[#aa8e7d] to-[#997966]" />

      {/* Thick Wavy Dark Brown Hair */}
      <div className="absolute -top-12 inset-x-0 h-48 flex justify-around">
        <div className="w-32 h-44 bg-[#231815] rounded-b-full transform -rotate-12" />
        <div className="w-36 h-48 bg-[#1b120f] rounded-b-full transform rotate-6" />
        <div className="w-40 h-46 bg-[#261a16] rounded-b-full transform -rotate-6" />
        <div className="w-36 h-44 bg-[#1e1411] rounded-b-full transform rotate-12" />
      </div>

      {/* Forehead & Wrinkle Lines */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-48 h-4 border-b border-[#5e4133]/60 rounded-full" />
      <div className="absolute top-34 left-1/2 -translate-x-1/2 w-36 h-3 border-b border-[#5e4133]/40 rounded-full" />

      {/* The Iconic Striking Eyes */}
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-full max-w-[580px] px-8 flex justify-between items-center">
        {/* Left Eye */}
        <div className="relative w-28 sm:w-36 h-16 sm:h-20 bg-[#f4ebe1] rounded-[70%_30%_65%_35%] border-t-4 border-[#261713] flex items-center justify-center overflow-hidden shadow-inner">
          {/* Eyeball iris */}
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#1f1513] rounded-full flex items-center justify-center">
            {/* Pupil */}
            <div className="w-6 h-6 bg-[#000] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full -ml-1 -mt-1" />
            </div>
          </div>
          {/* Lower lid crease */}
          <div className="absolute bottom-0 inset-x-0 h-2 bg-[#6b4737]/40" />
        </div>

        {/* Nose Bridge */}
        <div className="w-12 h-24 border-l-2 border-[#694738]/50 border-r-2 border-[#694738]/30 rounded-b-xl mt-4" />

        {/* Right Eye */}
        <div className="relative w-28 sm:w-36 h-16 sm:h-20 bg-[#f4ebe1] rounded-[30%_70%_35%_65%] border-t-4 border-[#261713] flex items-center justify-center overflow-hidden shadow-inner">
          {/* Eyeball iris */}
          <div className="w-14 sm:w-16 h-14 sm:h-16 bg-[#1f1513] rounded-full flex items-center justify-center">
            {/* Pupil */}
            <div className="w-6 h-6 bg-[#000] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full -ml-1 -mt-1" />
            </div>
          </div>
          {/* Lower lid crease */}
          <div className="absolute bottom-0 inset-x-0 h-2 bg-[#6b4737]/40" />
        </div>
      </div>

      {/* Nose Base & Mustache Shading at bottom edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 flex flex-col items-center">
        {/* Nostrils */}
        <div className="flex gap-8 mb-2">
          <div className="w-4 h-3 bg-[#3d2319] rounded-full" />
          <div className="w-4 h-3 bg-[#3d2319] rounded-full" />
        </div>
        {/* Mustache tips */}
        <div className="w-40 h-6 bg-[#261713]/80 rounded-t-full" />
      </div>
    </div>
  );
}

/**
 * Niccolo Anatomical Cutaway Head (Showing Design Toolkit Inside Brain)
 */
export function NiccoloCutawayHead() {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[340px] mx-auto overflow-hidden bg-[#786154] border border-ink/20 shadow-sm">
      {/* Base skin tone */}
      <div className="absolute inset-0 bg-[#7c6356]" />

      {/* Right half: Realistic hair & forehead */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#543b31] overflow-hidden">
        <div className="w-48 h-64 bg-[#211512] rounded-full -mr-16 -mt-12" />
        <div className="w-28 h-28 bg-[#a88270] rounded-xl mt-12 -ml-4" />
        <div className="w-16 h-8 bg-[#1f1310] rounded-full mt-4 -ml-2" />
      </div>

      {/* Left half: Mechanical / Design Interface Brain Interior */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#5d463b] border-r-2 border-[#3b2b24] p-3 flex flex-col justify-between">
        {/* Typography Window "Aa" */}
        <div className="w-full bg-[#46332a] border border-[#2b1f1a] rounded p-2 flex flex-col items-center">
          <span className="font-serif font-bold text-2xl text-[#e8ded3]">Aa</span>
          <div className="w-full h-1 bg-[#2b1f1a] mt-1" />
        </div>

        {/* Bezier Vector Curve graph */}
        <div className="w-full h-16 bg-[#46332a] border border-[#2b1f1a] rounded p-1 relative">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            <path d="M 10 50 C 30 10, 70 50, 90 15" fill="none" stroke="#e8ded3" strokeWidth="2" />
            <circle cx="10" cy="50" r="3" fill="#c03f13" />
            <circle cx="90" cy="15" r="3" fill="#c03f13" />
            <line x1="10" y1="50" x2="30" y2="10" stroke="#a09080" strokeDasharray="2,2" strokeWidth="1" />
            <circle cx="30" cy="10" r="2" fill="#fff" />
          </svg>
        </div>

        {/* Stylus Pen & Speech Bubble */}
        <div className="flex items-center justify-around">
          {/* Stylus Pen */}
          <div className="w-2 h-14 bg-[#e8ded3] rounded-full transform rotate-45 border border-[#2b1f1a]" />
          {/* Dialogue bubble with 3 dots */}
          <div className="w-10 h-8 bg-[#8f4738] rounded-xl flex items-center justify-center gap-1 shadow-sm">
            <div className="w-1.5 h-1.5 bg-[#2b1f1a] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#2b1f1a] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#2b1f1a] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Authentic Vintage Perforated Postage Stamp
 */
export function PostageStamp() {
  return (
    <div className="relative w-44 sm:w-56 md:w-64 p-3 bg-[#e4e0d8] border border-ink/20 shadow-md transform rotate-1">
      {/* Stamp inner frame */}
      <div className="border border-dashed border-ink/30 p-3.5 bg-[#ece8e1] flex flex-col items-center">
        {/* Radiant Sunrise Arc */}
        <div className="w-full flex flex-col items-center mb-2">
          <svg viewBox="0 0 160 80" className="w-28 sm:w-36 h-14 sm:h-18">
            {/* Sun rays */}
            <g stroke="#e2572b" strokeWidth="3" strokeLinecap="round">
              <line x1="80" y1="75" x2="80" y2="10" />
              <line x1="80" y1="75" x2="105" y2="15" />
              <line x1="80" y1="75" x2="128" y2="28" />
              <line x1="80" y1="75" x2="145" y2="48" />
              <line x1="80" y1="75" x2="152" y2="72" />
              <line x1="80" y1="75" x2="55" y2="15" />
              <line x1="80" y1="75" x2="32" y2="28" />
              <line x1="80" y1="75" x2="15" y2="48" />
              <line x1="80" y1="75" x2="8" y2="72" />
            </g>
            {/* Horizon bar */}
            <line x1="0" y1="76" x2="160" y2="76" stroke="#e2572b" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Hand-drawn ink signature "NM" */}
        <div className="w-full my-1 flex justify-center">
          <svg viewBox="0 0 120 40" className="w-24 h-8 stroke-ink fill-none stroke-[1.8] stroke-linecap-round">
            <path d="M 10 32 L 20 8 L 35 32 L 48 10 L 60 30 L 72 18 L 88 28 L 105 24" />
          </svg>
        </div>

        {/* Typewriter Metatags */}
        <div className="w-full border-t border-ink/20 pt-2 text-center font-mono text-[9px] sm:text-[10px] tracking-wider text-ink/80 uppercase space-y-0.5">
          <p>NAME: Niccolo Miranda</p>
          <p>DATE: 12/10/1993</p>
        </div>
      </div>
    </div>
  );
}
