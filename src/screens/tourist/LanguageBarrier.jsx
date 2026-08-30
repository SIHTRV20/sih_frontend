import React, { useState } from "react";
import { Globe, Copy, Volume2, Send, MessageCircle, ArrowRight } from "lucide-react";
import { SectionHeader, Card } from "../../components/ui";
import { C } from "../../theme";

export default function LanguageBarrier() {
  const [selectedLanguage, setSelectedLanguage] = useState("hindi");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translations, setTranslations] = useState([
    { id: 1, english: "Hello", translated: "नमस्ते", language: "Hindi" },
    { id: 2, english: "Thank you", translated: "धन्यवाद", language: "Hindi" },
    { id: 3, english: "Where is the bathroom?", translated: "शौचालय कहाँ है?", language: "Hindi" },
    { id: 4, english: "How much?", translated: "कितना?", language: "Hindi" },
    { id: 5, english: "Excuse me", translated: "क्षमा करें", language: "Hindi" },
  ]);

  const languages = [
    { id: "hindi", name: "Hindi", emoji: "🇮🇳" },
    { id: "spanish", name: "Spanish", emoji: "🇪🇸" },
    { id: "french", name: "French", emoji: "🇫🇷" },
    { id: "german", name: "German", emoji: "🇩🇪" },
    { id: "japanese", name: "Japanese", emoji: "🇯🇵" },
    { id: "korean", name: "Korean", emoji: "🇰🇷" },
    { id: "mandarin", name: "Mandarin", emoji: "🇨🇳" },
  ];

  const handleTranslate = () => {
    if (textToTranslate.trim()) {
      setTranslatedText(`[Translated to ${languages.find(l => l.id === selectedLanguage).name}]`);
      setTranslations([
        { id: Date.now(), english: textToTranslate, translated: translatedText, language: languages.find(l => l.id === selectedLanguage).name },
        ...translations,
      ]);
      setTextToTranslate("");
      setTranslatedText("");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const currentLang = languages.find(l => l.id === selectedLanguage);

  return (
    <div>
      <SectionHeader eyebrow="Communication" title="Language Barrier" />

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Quick Phrases</div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLanguage(lang.id)}
              className="rounded-lg border-2 px-3 py-3 transition-all text-[12px] font-medium flex items-center gap-2 justify-center"
              style={{
                borderColor: selectedLanguage === lang.id ? C.blue : C.border,
                background: selectedLanguage === lang.id ? C.blue + "11" : "transparent",
                color: selectedLanguage === lang.id ? C.blue : C.text,
              }}
            >
              <span className="text-lg">{lang.emoji}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Translate Text</div>
        <textarea
          placeholder="Enter text to translate..."
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
          className="mb-3 w-full rounded-lg border p-3 text-[13px]"
          style={{ borderColor: C.border, background: C.bg, color: C.text }}
          rows="3"
        />
        <button
          onClick={handleTranslate}
          className="flex items-center gap-2 w-full justify-center rounded-lg px-3 py-2 text-[13px] font-medium text-white"
          style={{ background: C.blue }}
        >
          <Send size={14} /> Translate to {currentLang.name}
        </button>
      </Card>

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Saved Translations</div>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {translations.length === 0 ? (
            <div className="py-6 text-center text-[13px]" style={{ color: C.muted }}>No translations yet</div>
          ) : (
            translations.map((t) => (
              <div key={t.id} className="rounded-lg border p-3" style={{ borderColor: C.border }}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="text-[12px]" style={{ color: C.muted }}>English</div>
                    <div className="text-[13px] font-medium mb-2" style={{ color: C.text }}>{t.english}</div>
                    <div className="text-[12px] mb-1" style={{ color: C.muted }}>{t.language}</div>
                    <div className="text-[13px] font-medium" style={{ color: C.blue }}>{t.translated}</div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => copyToClipboard(t.translated)}
                      className="p-2 rounded hover:bg-gray-100"
                      style={{ color: C.muted }}
                    >
                      <Copy size={14} />
                    </button>
                    <button
                      className="p-2 rounded hover:bg-gray-100"
                      style={{ color: C.muted }}
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      <Card>
        <div className="text-[14px] font-medium mb-3" style={{ color: C.text }}>Emergency Phrases</div>
        <div className="space-y-2">
          {[
            { en: "Help!", hi: "मदद!" },
            { en: "I need a doctor", hi: "मुझे डॉक्टर चाहिए" },
            { en: "Call the police", hi: "पुलिस को कॉल करें" },
            { en: "Do you speak English?", hi: "क्या आप अंग्रेजी बोलते हैं?" },
          ].map((phrase, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded" style={{ background: C.bg }}>
              <div>
                <div className="text-[12px]" style={{ color: C.muted }}>{phrase.en}</div>
                <div className="text-[13px] font-medium" style={{ color: C.text }}>{phrase.hi}</div>
              </div>
              <button className="p-1" style={{ color: C.blue }}>
                <Volume2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
