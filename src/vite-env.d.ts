// src/vite-env.d.ts
/// <reference types="vite/client" />

interface Window {
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}

type SpeechRecognition = any;
type SpeechRecognitionEvent = any;
