# Original Excerpt - Genesis Manifest And Local Runner

Source label: `Collabs 2 / KI_WORKFLOW_GENESIS_SYSTEM / SYSTEM_MANIFEST.md`

## Original system identity excerpt

```text
SYSTEM_NAME: KI_WORKFLOW_GENESIS_SYSTEM
SYSTEM_TYPE: PERSISTENTE_KI_ARBEITSUMGEBUNG
```

```text
Dieser Ordner ist:
- eine persistente Arbeitsumgebung
- eine Langzeit-Gedaechtnisstruktur
- eine Steuerungs- und Orientierungsbasis fuer KI-Workflows
- ein Qualitaets- und Entwicklungsrahmen
```

```text
Zukuenftige KI-Workflow-Instanzen kennen vorherige Kontexte nicht automatisch.
Sie sollen diesen Ordner als primaere Orientierungsquelle verwenden.
Der Ordner muss daher:
- selbsterklaerend
- rekonstruierbar
- inkrementell erweiterbar
- fehlertolerant
- fuer autonome KI-Weiterarbeit geeignet
sein.
```

Source label: `Collabs 2 / KI_WORKFLOW_GENESIS_SYSTEM / LOCAL_RUNNER / README.md`

## Local runner excerpt

```bash
python3 run_local.py
python3 run_local.py --agent CODE_GENERATOR
python3 run_local.py --agent CODE_GENERATOR --input "Erstelle einen JSON Parser"
python3 run_local.py --workflow "Analysiere meinen Code auf Qualitaet"
```

```text
MASTER_CONDUCTOR
CODE_GENERATOR
CODE_ANALYZER
CODE_REVIEWER
TEST_GENERATOR
SELF_MONITOR
BLIND_SPOT_DETECTOR
REFACTORING_ENGINE
PERFORMANCE_PROFILER
BEST_PRACTICE_SCOUT
```

## Engineering signal

The design is explicitly context-preserving: it assumes future agent sessions start cold and need a reconstructable operating memory. The local runner shows the same system idea was not locked to Colab only.

