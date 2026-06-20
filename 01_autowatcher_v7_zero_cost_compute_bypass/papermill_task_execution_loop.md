# Original Excerpt - Papermill Task Execution Loop

Source label: `Collabs 2 / KI_WORKFLOW_GENESIS_SYSTEM / WATCHER_AUTORUN.ipynb`

## What the excerpt proves

Tasks were not manually copied into notebooks. The watcher loads a task file, selects an agent, injects task parameters and executes a notebook as an isolated run artifact.

```python
import papermill as pm

def load_task(task_file: str) -> dict:
    """Laedt Task aus JSON oder YAML."""
    with open(task_file, 'r', encoding='utf-8') as f:
        if task_file.endswith('.yaml') or task_file.endswith('.yml'):
            return yaml.safe_load(f)
        return json.load(f)

def select_agent(task: dict) -> str:
    """Waehlt passenden Agent basierend auf Task."""
    agent = task.get('agent', '').lower()
    if agent and agent in WATCHER_CONFIG['agents']:
        return agent

    description = task.get('description', '').lower()
    for keyword, mapped_agent in AGENT_KEYWORDS.items():
        if keyword in description:
            return mapped_agent

    return 'master_conductor'
```

```python
parameters = {
    'TASK_INPUT': task_input,
    'TASK_DESCRIPTION': task_description,
    'TASK_CONFIG': json.dumps(task_config, ensure_ascii=False),
    'OUTPUT_PATH': results_path
}

pm.execute_notebook(
    agent_notebook,
    output_notebook,
    parameters=parameters,
    kernel_name='python3'
)
```

```python
result = {
    'task_name': task_name,
    'status': 'SUCCESS',
    'execution_time_seconds': round(execution_time, 2),
    'output_notebook': output_notebook,
    'timestamp': timestamp,
    'agent_used': agent_name,
    'quality_score': quality_score,
    'estimated_cost_usd': estimated_cost,
    'rag_documents_used': len(rag_context_str.split('---')) if rag_context_str else 0
}
```

## Engineering signal

- JSON/YAML tasks become the system API.
- Papermill turns notebooks into parameterized workers.
- Result notebooks and status JSON preserve auditability.
- Cost, quality and RAG-document counts are stored with the run.

