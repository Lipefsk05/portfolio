<!--
Status: draft, reviewed by Felipe on 2026-07-10.
Not wired into any page yet — portfolio/ site restructuring is deferred (see
mind/carreira/carreira.md, Backlog). This file is the source of truth for now;
copy/adapt from here into a page, a LinkedIn article, or a repo README as needed.

Update this whenever Domo, Dindin, Café Labs Forge, or Café Labs itself changes
materially (new feature, Forge goes open source, landing pages ship, etc.).
-->

# Café Labs: Two Live Products, Then the Team That Builds the Next Ones

*Case study — product engineering at Café Labs*

Café Labs is a three-founder studio. Everything shipped so far — Domo, Dindin, and
the agent system built on top of them — was built end to end by one of the three:
Felipe. This is how that individual stack discipline turned into Café Labs Forge, a
Claude Code agent team that now runs the same playbook on its own.

**Stack:** Flutter · Firebase · Riverpod · Claude Code Subagents
**Built end-to-end by:** Felipe

---

## The constraint

Café Labs runs on a Build → Measure → Learn loop: turn a hypothesis into a working
product fast, put it in front of real usage, then decide whether to kill it or push
further — no long business plan in between. Café Labs has three founders, but so far
the engineering has run through one of them, end to end. Carrying that loop alone
only works under a hard rule: **every technical decision has to be cheap to make and
cheap to reverse.**

In practice that meant picking one stack and refusing to relitigate it per project.
Two products shipped on it before that decision got questioned again.

## Product 01 — Domo

*Live · Android + Web*
Stack: `flutter_riverpod` · `go_router` · Firebase Auth + Firestore · `freezed`

Household management for families and shared homes. A household is created and
joined with a 6-character code; members are approved, assigned a role, or removed by
whoever runs the house. The core loop is the pantry: every item carries one of three
states — *have it*, *out of it*, *in the cart* — and the shopping list is just a
filtered view of that same data. Checking an item off in the cart updates the pantry
in one batch, so the list and the shelf never drift out of sync.

## Product 02 — Dindin

*Live · Web + Android + Windows*
Stack: `flutter_riverpod` · `go_router` · `fl_chart` · Firebase Auth + Firestore

Personal finance through envelope budgeting — *caixinhas*. Income lands, gets
allocated across categories, and every expense draws down its own envelope rather
than a single account balance. Firestore is partitioned per user
(`users/{uid}/categories`, `incomes`, `allocations`, `expenses`), which keeps the
security rules and the data model the same shape. A JSON export/import in Settings
doubles as manual backup and account migration. Deployed to
[dindin-cafelabs.web.app](https://dindin-cafelabs.web.app).

## The pattern

Domo and Dindin solve unrelated problems but read like siblings in the code: same
state layer, same router, same auth flow, same free-tier Firebase project shape.
That wasn't convergent evolution — it was the constraint working as intended. One
Flutter/Dart skill set covers phone, web, and desktop; one Firebase free tier covers
backend for a product with no revenue yet; one state pattern (Riverpod) means context
carries over from one codebase to the next instead of resetting.

> The stack stopped being a per-project decision and became a default — which is
> exactly what freed up the actual decision-making for the next thing.

## The accelerant — Café Labs Forge

A validated stack answers *how* to build. It doesn't run the brainstorm, design the
flows, or write the Firestore rules. That work still went through the same sequence
by hand on every product — so it got turned into a team.

Café Labs Forge is a multi-agent system built on **Claude Code subagents**: one
orchestrator plus seven specialists, each running in its own isolated context window
with its own system prompt, tool access, and model. The orchestrator activates the
moment a new product idea shows up in conversation, runs the same intake a human
co-founder would — idea, problem, audience, platform, timeline, budget — and
delegates only to the specialists the scope actually needs.

```
Felipe: "tive uma ideia pra um app…"
  │
  ▼
forge-orquestrador  (opus — owns architecture & delegation)
  │
  ├──▶ forge-product       problem / audience / MVP scope
  ├──▶ forge-design        flows, wireframes, visual identity
  ├──▶ forge-mobile        Flutter implementation
  ├──▶ forge-backend       (opus — data & infra)
  ├──▶ forge-frontend-web  web implementation
  ├──▶ forge-devops        CI/CD, environments
  └──▶ forge-qa            test plan, MVP coverage
```

Model choice is deliberate, not uniform. Every specialist runs on a cheaper, faster
model except two: the orchestrator, because deciding a project's whole architecture
and who builds what is rare per project and worth the stronger reasoning; and the
backend/cloud architect, because data-model and infrastructure calls are the most
expensive ones to reverse once a product has real users. Cost discipline — the same
instinct that produced the shared Flutter/Firebase stack — is encoded directly into
which agent gets which model.

### What each specialist owns

| Agent | Scope | Model |
|---|---|---|
| Orchestrator | Intake, architecture, delegation | `opus` |
| Product / Brainstorm | Problem, audience, MVP scope, market risk | `sonnet` |
| Design (UX/UI) | Flows, wireframes, visual identity | `sonnet` |
| Mobile | Flutter + Riverpod implementation | `sonnet` |
| Backend / Cloud Architect | Data model, security rules, infra trade-offs | `opus` |
| Frontend Web | Web implementation | `sonnet` |
| DevOps / Infra | CI/CD, environments, release | `sonnet` |
| QA / Testing | Test plan, minimum viable coverage | `sonnet` |

The backend specialist treats Firebase free tier as the validated default — it's
what Domo and Dindin both run on — but it isn't hard-coded to it. Supabase, a
self-hosted Postgres, or a paid tier all stay on the table; the agent's job is to
name the free/self-hosted-vs-paid trade-off explicitly before committing, the same
way a human architect would.

## Where this goes

Domo and Dindin proved the stack. The Forge proved the process could be delegated
without losing the judgment behind it. The next step is packaging the Forge itself
as a public, documented reference implementation — a small AI product team that any
solo builder running Claude Code can point at their own next idea, not just Café
Labs'.

---

*Café Labs — Testar. Construir. Validar.*
