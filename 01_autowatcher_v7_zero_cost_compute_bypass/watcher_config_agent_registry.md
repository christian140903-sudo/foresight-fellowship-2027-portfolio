# Original Excerpt - Watcher Config And 22-Agent Registry

Source label: `Collabs 2 / KI_WORKFLOW_GENESIS_SYSTEM / WATCHER_AUTORUN.ipynb`

## What the excerpt proves

The watcher was configured as a long-running orchestrator with explicit limits, agent registration, cost/budget settings, scheduling and notifications. It was not a static collection of prompts.

```python
WATCHER_CONFIG = {
    'version': '7.0',
    'check_interval': 10,
    'max_runtime_hours': 24,
    'max_parallel': MAX_WORKERS,
    'daily_budget_usd': 10.0,
    'enable_scheduler': True,
    'enable_notifications': True,
    'enable_git_commits': True,
    'agents': {
        'master_conductor': f'{AGENTS_PATH}/00_MASTER_CONDUCTOR.ipynb',
        'code_analyzer': f'{AGENTS_PATH}/01_CODE_ANALYZER_AGENT.ipynb',
        'code_generator': f'{AGENTS_PATH}/02_CODE_GENERATOR_AGENT.ipynb',
        'debugger': f'{AGENTS_PATH}/03_DEBUGGER_AGENT.ipynb',
        'optimizer': f'{AGENTS_PATH}/04_OPTIMIZER_AGENT.ipynb',
        'ml_trainer': f'{AGENTS_PATH}/05_ML_TRAINER_AGENT.ipynb',
        'data_processor': f'{AGENTS_PATH}/06_DATA_PROCESSOR_AGENT.ipynb',
        'api_builder': f'{AGENTS_PATH}/07_API_BUILDER_AGENT.ipynb',
        'test_generator': f'{AGENTS_PATH}/08_TEST_GENERATOR_AGENT.ipynb',
        'doc_generator': f'{AGENTS_PATH}/09_DOC_GENERATOR_AGENT.ipynb',
        'local_llm': f'{AGENTS_PATH}/10_LOCAL_LLM_SETUP.ipynb',
        'llm_benchmark': f'{AGENTS_PATH}/11_LLM_BENCHMARK.ipynb',
        'rag_system': f'{AGENTS_PATH}/12_RAG_SYSTEM.ipynb',
        'research_agent': f'{AGENTS_PATH}/13_RESEARCH_AGENT.ipynb',
        'summarizer': f'{AGENTS_PATH}/14_SUMMARIZER_AGENT.ipynb',
        'translator': f'{AGENTS_PATH}/15_TRANSLATOR_AGENT.ipynb',
        'vision_agent': f'{AGENTS_PATH}/16_VISION_AGENT.ipynb',
        'audio_agent': f'{AGENTS_PATH}/17_AUDIO_AGENT.ipynb',
        'memory_agent': f'{AGENTS_PATH}/18_MEMORY_AGENT.ipynb',
        'parallel_executor': f'{AGENTS_PATH}/19_PARALLEL_EXECUTOR.ipynb',
        'self_improvement': f'{AGENTS_PATH}/20_SELF_IMPROVEMENT_AGENT.ipynb',
        'web_ui': f'{AGENTS_PATH}/21_GRADIO_WEB_UI.ipynb'
    }
}
```

## Engineering signal

- The registry separates task intent from execution notebook.
- Parallelism and runtime length are explicit.
- Budget and reliability layers are represented in configuration.
- Specialized agents include code, debug, ML, data, API, testing, docs, RAG, vision, audio, memory and self-improvement.

