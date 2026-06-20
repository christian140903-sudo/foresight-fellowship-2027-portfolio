# Model Routing And Audio Boundary

## What this evidence shows

The system design uses model/provider choice as an engineering variable: local LLM when available, Gemini fallback when needed, specialized notebook agents for modalities, and keyword routing for task assignment.

## Original excerpt - provider fallback

Source label: `KI_WORKFLOW_GENESIS_SYSTEM / NOTEBOOKS / code and debug agents`

```text
Verbesserte LLMProvider Integration:
- Automatische Backend-Erkennung (auto)
- Fallback auf Gemini wenn LLMProvider nicht verfuegbar
- Unterstuetzt: vLLM, llama.cpp, Gemini API
```

```python
LLM_PROVIDER_PATHS = [
    '/content',
    '/content/drive/MyDrive',
    os.path.dirname(os.path.abspath('.')),
]

for path in LLM_PROVIDER_PATHS:
    if path not in sys.path:
        sys.path.insert(0, path)
    try:
        from llm_provider import LLMProvider
        USE_LLM_PROVIDER = True
        break
    except ImportError:
        continue
```

## Original excerpt - audio agent

Source label: `KI_WORKFLOW_GENESIS_SYSTEM / NOTEBOOKS / 17_AUDIO_AGENT.ipynb`

```text
Intelligente Audio-Verarbeitung mit Transkription und Analyse

- Transkription - Speech-to-Text mit Whisper
- Audio-Zusammenfassung - KI-gesteuerte Zusammenfassung des Inhalts
- Integration mit OpenAI Whisper (lokal) und optionalem Gemini fuer Analyse.
```

```text
Erforderliche Pakete fuer Audio-Verarbeitung:
- openai-whisper
- faster-whisper
- pydub
- soundfile
- librosa
- torch
- torchaudio
```

## Engineering signal

- Task routing is treated as infrastructure.
- Model fallback avoids single-provider fragility.
- Audio is handled as a specialized pipeline, not as a generic text prompt.
- The boundary is clear: transcription and analysis are supported; production voice identity, consent and public-use constraints require separate handling.
