# Remote Control - OpenClaw And WhatsApp Handoff

## What this evidence shows

The system turns mobile messages into bounded agent work orders. A phone message enters through WhatsApp/OpenClaw, becomes structured intent, routes into a local agent stack, delegates tool-rich execution to a worker layer and returns only after a quality gate accepts the result.

```mermaid
%%{init: {"theme": "base", "themeVariables": {"background": "#020617", "primaryColor": "#111827", "primaryTextColor": "#f8fafc", "primaryBorderColor": "#f8fafc", "secondaryColor": "#0f172a", "tertiaryColor": "#1f2937", "lineColor": "#f8fafc", "fontFamily": "Inter, ui-sans-serif, system-ui", "actorBkg": "#111827", "actorTextColor": "#f8fafc", "actorBorder": "#f8fafc", "signalColor": "#f8fafc", "signalTextColor": "#f8fafc", "activationBkgColor": "#1f2937", "activationBorderColor": "#f8fafc"}}}%%
sequenceDiagram
    participant Phone as "Phone / WhatsApp"
    participant OpenClaw as "OpenClaw webhook"
    participant Agent as "MiguelAgent"
    participant Work as "Worker / model router"
    participant Tools as "Tools + models"
    participant QA as "Quality loop"

    Phone->>OpenClaw: inbound message
    OpenClaw->>Phone: quick acknowledgement
    OpenClaw->>Agent: web-inbound event
    Agent->>Work: structured work order
    Work->>Tools: execute with available tools/models
    Tools->>QA: return candidate result
    QA->>Agent: accepted result
    Agent->>OpenClaw: final response
    OpenClaw->>Phone: WhatsApp reply
```

## Original excerpt

Source label: `MIGUEL-BRAIN-MERGED / tools.md`

```text
# OpenClaw Reference - Miguels Haende

OpenClaw ist nicht ein Tool. Es sind Miguels HAENDE.
```

```text
OpenClaw Server (:18789)
|-- Browser Engine - Headless Chromium via REST API
|-- Agent Mode - Autonome Browser-Aufgaben
|-- Message System - WhatsApp, Telegram, Discord Integration
|-- Session Management - Cookies, Login-States, Contexts
`-- Config - ~/.openclaw/openclaw.json
```

```text
WhatsApp flow:
1. WA message inbound -> OpenClaw webhook
2. Ack in 2s via Ollama "Miguel ist dran."
3. EXOVIUM watcher recognizes web-inbound
4. MiguelAgent understands message (Gemini Flash -> JSON)
5. Work Order -> EXOVIUM smart model routing
6. Result -> Quality Loop (max 3x)
7. OpenClaw sends WA reply when satisfied
```

## Redactions

Phone numbers, local machine details and private config paths were not published.

## Engineering signal

This is a concrete remote-operations loop: mobile input, webhook capture, intent parsing, model/tool orchestration, quality gate and return message.
