"use client";
import React, { useState } from "react";

const themes = [
  { name: "Dark", bg: "from-gray-900 via-blue-900 to-purple-900", accent: "blue-600" },
  { name: "Light", bg: "from-white via-blue-100 to-purple-100", accent: "purple-600" },
  { name: "Emerald", bg: "from-emerald-700 via-emerald-800 to-cyan-900", accent: "emerald-400" },
];

const fonts = [
  { name: "Modern Sans", class: "font-sans" },
  { name: "Classic Serif", class: "font-serif" },
  { name: "Mono", class: "font-mono" },
];

export default function ConfigPanel({
  onChange,
}: {
  onChange: (config: { theme: string; font: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(0);
  const [font, setFont] = useState(0);

  const handleChange = (t: number, f: number) => {
    setTheme(t);
    setFont(f);
    onChange({ theme: themes[t].bg, font: fonts[f].class });
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open config panel"
      >
        <span className="text-2xl">⚙️</span>
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 z-50 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-6 w-80 animate-fade-in-up border border-blue-200 dark:border-blue-900">
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Site Appearance</h3>
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Theme</div>
            <div className="flex gap-2">
              {themes.map((t, i) => (
                <button
                  key={t.name}
                  className={`px-3 py-1 rounded-full border-2 ${theme === i ? 'border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border-gray-300 dark:border-gray-700'} text-sm font-medium`}
                  onClick={() => handleChange(i, font)}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Font</div>
            <div className="flex gap-2">
              {fonts.map((f, i) => (
                <button
                  key={f.name}
                  className={`px-3 py-1 rounded-full border-2 ${font === i ? 'border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border-gray-300 dark:border-gray-700'} text-sm font-medium`}
                  onClick={() => handleChange(theme, i)}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
