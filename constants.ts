
import { Language, LanguageCode } from './types';

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ்' }, // Tamil
  { code: 'te', name: 'తెలుగు' }, // Telugu
  { code: 'kn', name: 'ಕನ್ನಡ' }, // Kannada
  { code: 'ml', name: 'മലയാളം' }, // Malayalam
];

type TranslationKeys = 'title' | 'greeting' | 'placeholder' | 'send' | 'error';

export const TRANSLATIONS: Record<LanguageCode, Record<TranslationKeys, string>> = {
  en: {
    title: 'AI Career Mentor',
    greeting: 'Hello! I am your AI Career Mentor. How can I assist you today in planning your career path?',
    placeholder: 'Ask about career paths, skills, or mock interviews...',
    send: 'Send',
    error: 'Sorry, I encountered an error. Please try again.'
  },
  ta: {
    title: 'AI தொழில் ஆலோசகர்',
    greeting: 'வணக்கம்! நான் உங்கள் AI தொழில் ஆலோசகர். உங்கள் தொழில் வாழ்க்கையைத் திட்டமிடுவதில் இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    placeholder: 'தொழில் பாதைகள், திறன்கள் அல்லது மாதிரி நேர்காணல்கள் பற்றி கேளுங்கள்...',
    send: 'அனுப்பு',
    error: 'மன்னிக்கவும், ஒரு பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.'
  },
  te: {
    title: 'AI కెరీర్ మెంటర్',
    greeting: 'నమస్కారం! నేను మీ AI కెరీర్ మెంటర్. మీ కెరీర్ మార్గాన్ని ప్లాన్ చేయడంలో ఈ రోజు నేను మీకు ఎలా సహాయపడగలను?',
    placeholder: 'కెరీర్ మార్గాలు, నైపుణ్యాలు లేదా మాక్ ఇంటర్వ్యూల గురించి అడగండి...',
    send: 'పంపు',
    error: 'క్షమించండి, నేను ఒక లోపాన్ని ఎదుర్కొన్నాను. దయచేసి మళ్ళీ ప్రయత్నించండి.'
  },
  kn: {
    title: 'AI ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶಕ',
    greeting: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶಕ. ನಿಮ್ಮ ವೃತ್ತಿಜೀವನದ ಮಾರ್ಗವನ್ನು ಯೋಜಿಸಲು ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    placeholder: 'ವೃತ್ತಿ ಮಾರ್ಗಗಳು, ಕೌಶಲ್ಯಗಳು, ಅಥವಾ ಅಣಕು ಸಂದರ್ಶನಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
    send: 'ಕಳುಹಿಸು',
    error: 'ಕ್ಷಮಿಸಿ, ನಾನು ದೋಷವನ್ನು ಎದುರಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
  },
  ml: {
    title: 'AI കരിയർ മെന്റർ',
    greeting: 'നമസ്കാരം! ഞാൻ നിങ്ങളുടെ AI കരിയർ മെന്ററാണ്. നിങ്ങളുടെ കരിയർ പാത ആസൂത്രണം ചെയ്യുന്നതിൽ ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?',
    placeholder: 'കരിയർ പാതകൾ, കഴിവുകൾ, അല്ലെങ്കിൽ മോക്ക് ഇന്റർവ്യൂകളെക്കുറിച്ച് ചോദിക്കുക...',
    send: 'അയയ്ക്കുക',
    error: 'ക്ഷമിക്കണം, ഒരു പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.'
  }
};
