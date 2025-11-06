
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export type LanguageCode = 'en' | 'ta' | 'te' | 'kn' | 'ml';

export interface Language {
  code: LanguageCode;
  name: string;
}
