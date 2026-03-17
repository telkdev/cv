# AI-Assisted Development Learning Plan

A structured plan for mastering AI tooling with Claude for frontend engineering workflows.

## Phase 1: Foundations (Weeks 1-2)

### Prompt Engineering Basics
- [ ] Understand how LLMs process instructions (system prompts, user prompts, context windows)
- [ ] Learn prompt structure: role, context, task, constraints, output format
- [ ] Practice few-shot prompting (providing examples to guide output)
- [ ] Master chain-of-thought prompting for complex reasoning tasks
- [ ] Learn when to be specific vs. when to leave room for the model to reason

### Claude Fundamentals
- [ ] Explore Claude's capabilities and limitations (knowledge cutoff, context window sizes)
- [ ] Understand token usage: how input/output tokens are counted
- [ ] Learn the difference between Claude models (Haiku, Sonnet, Opus) and when to use each
- [ ] Practice using the Claude API directly (curl, SDK)

## Phase 2: Claude Code & Development Workflows (Weeks 3-4)

### Claude Code CLI
- [ ] Install and configure Claude Code
- [ ] Learn slash commands (/help, /compact, /clear, /model, etc.)
- [ ] Set up CLAUDE.md files (global, project-level) for persistent instructions
- [ ] Configure permissions and settings (settings.json, settings.local.json)
- [ ] Practice code generation, refactoring, and debugging workflows
- [ ] Learn to use /compact and context management for long sessions

### Token Optimization
- [ ] Understand context window costs and how to minimize token usage
- [ ] Use CLAUDE.md to avoid repeating project context every session
- [ ] Learn when to start new conversations vs. continue existing ones
- [ ] Practice writing concise, high-signal prompts (less tokens in, better tokens out)
- [ ] Use /compact to compress context when approaching limits
- [ ] Scope tool permissions to avoid unnecessary reads/searches

## Phase 3: Skills & Automation (Weeks 5-6)

### Custom Skills
- [ ] Understand the skill system (custom slash commands)
- [ ] Create project-specific skills for repetitive tasks (component generation, test scaffolding)
- [ ] Build skills for code review, commit message generation, PR descriptions
- [ ] Share skills across projects via global configuration

### Hooks & Automation
- [ ] Set up pre/post hooks for tool calls (e.g., auto-lint after file edits)
- [ ] Create hooks for notifications, logging, or custom validation
- [ ] Automate repetitive development workflows (test-on-save, format-on-edit)

### MCP Servers
- [ ] Understand Model Context Protocol (MCP) and how servers extend Claude's capabilities
- [ ] Set up useful MCP servers (Playwright for browser testing, Supabase for DB, etc.)
- [ ] Learn to use context7 for up-to-date library documentation
- [ ] Explore building custom MCP servers for project-specific integrations

## Phase 4: Agents & Advanced Patterns (Weeks 7-8)

### Agent Workflows
- [ ] Understand how Claude Code uses sub-agents for parallel work
- [ ] Learn agent types: Explore, Plan, general-purpose, specialized agents
- [ ] Practice delegating complex tasks to agents (research, multi-file refactoring)
- [ ] Use background agents for non-blocking parallel work

### Claude Agent SDK
- [ ] Set up the Agent SDK (@anthropic-ai/claude-agent-sdk)
- [ ] Build a simple agent that can use tools (file I/O, web search)
- [ ] Implement multi-step workflows with agent orchestration
- [ ] Add guardrails and error handling to agent pipelines

### Advanced Prompt Patterns
- [ ] System prompt engineering for consistent agent behavior
- [ ] Structured output with JSON mode and tool use
- [ ] Implementing retry logic and fallback strategies
- [ ] Prompt caching for repeated operations (cost reduction)

## Phase 5: Production AI Integration (Weeks 9-10)

### AI in CI/CD
- [ ] Use Claude for automated code review in PRs
- [ ] Generate test cases from code changes
- [ ] Automate changelog and release notes generation
- [ ] Set up AI-powered documentation updates

### Best Practices & Patterns
- [ ] **Context management**: Keep prompts focused, avoid dumping entire codebases
- [ ] **Iterative refinement**: Start simple, add constraints incrementally
- [ ] **Verification**: Always verify AI-generated code (tests, type checks, manual review)
- [ ] **Version control**: Commit AI-generated changes in small, reviewable chunks
- [ ] **Security**: Never pass secrets/credentials to AI, review generated code for vulnerabilities
- [ ] **Cost awareness**: Monitor token usage, use cheaper models for simple tasks, cache where possible
- [ ] **Determinism**: Use temperature=0 for reproducible outputs in automation
- [ ] **Fallback strategies**: Design workflows that degrade gracefully if AI is unavailable

## Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic API Reference](https://docs.anthropic.com/en/api)
- [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk)
- [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)
