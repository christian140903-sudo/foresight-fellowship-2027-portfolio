# Christian Bucher - Foresight Evidence Audit Trail

This repository is the Foresight-facing evidence audit trail: selected original excerpts from the systems, notebooks, architecture notes, research blueprints and formal project material behind Christian Bucher's portfolio. It exists so a technical reviewer can inspect mechanism, source shape and claim boundary directly instead of relying on polished summary copy alone.

## Evidence map

| Area | Folder | What the excerpts show |
|---|---|---|
| Autowatcher v7.0 | `01_autowatcher_v7_zero_cost_compute_bypass` | A Colab/Drive-based agent execution system using task JSON, notebook agents, Papermill, memory, retry, scheduler, notifications and cost tracking. |
| Miguel Core | `02_miguel_core_memory_and_tools` | Memory, tool access, MCP-style interfaces and knowledge retrieval architecture. |
| Remote control | `03_remote_control_openclaw_whatsapp` | WhatsApp/OpenClaw-style remote control flow and quality-loop handoff logic. |
| Routing and boundaries | `04_model_routing_and_audio_boundary` | Model/provider fallback, agent routing and audio-agent boundaries. |
| AI for Science | `05_ai_for_science_ecsa_amr` | Probabilistic AMR / collateral-sensitivity architecture with uncertainty and validation framing. |
| Quantum red-team | `06_exon_quantum_red_team` | A falsification-oriented EXON / quantum communication case study with explicit no-signaling boundaries. |
| Formalization/IP | `07_pct_ip_formalization` | A PCT-style probabilistic state-space model for AMR evolution and decision support. |

## Reviewer route

1. Start with `00_SOURCE_INDEX.md`.
2. Open `01_autowatcher_v7_zero_cost_compute_bypass/README.md`.
3. Then inspect Miguel Core, OpenClaw/WhatsApp, AMR/ECSA and EXON.
4. End with `99_claim_boundaries_and_redactions.md`.

## Redaction policy

Private local paths, phone numbers, credentials, account names and API keys are excluded. Some excerpts are normalized for public reading; technical structure, naming and intent are preserved.
