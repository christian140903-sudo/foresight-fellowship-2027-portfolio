# Original Excerpt - Cortex Memory Engine

Source label: `MIGUEL-BRAIN-MERGED / tools.md`

## Original excerpt

```text
# Cortex System - Miguels Gedaechtnis-Engine

Cortex stores/indexes/finds semantic knowledge.
Without Cortex Miguel forgets after session.
With Cortex accumulates knowledge over 120+ sessions.
cortex_recall() VOR Datei-Lesen. IMMER. 10x effizienter.
```

```text
Cortex (Teil des Nexus Core MCP Servers)
|-- Storage: SQLite + FTS5
|-- Indexing: TF-IDF Vektoren fuer semantische Suche
|-- Categories: pattern | error | solution | best-practice | architecture | project
|-- Tags
|-- Source
`-- API: MCP Tools (cortex_recall, cortex_learn, cortex_suggest, etc.)
```

```text
cortex_recall(query)
1. tokenize query
2. compute TF-IDF vector
3. cosine similarity
4. top-k results
```

## Engineering signal

- Memory is treated as infrastructure, not chat history.
- Retrieval is designed before file reading.
- Knowledge is typed into categories that matter for engineering reuse.
- The system explicitly distinguishes recall, learning, suggestions and evaluation.

