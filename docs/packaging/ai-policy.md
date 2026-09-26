---
title: AI Policy
summary: AI Policy for contributions and communications
---

# AI Policy

AI tooling is increasingly part of the software development landscape. This document outlines our expectations for transparency, accountability, and quality when AI is involved in contributions.

Much of this document is inspired by the [Budgie Desktop AI policy](https://docs.buddiesofbudgie.org/organization/ai-policy), which itself takes inspiration from the Linux kernel and Fedora policies, and others.

## Why this matters

Solus is used by people around the world as their daily computing environment. Every change has the potential to affect the experience of countless users. We take that responsibility seriously, and contributors, whether using AI tools or not, must do the same.

As a curated operating system, the Solus team takes pride in its work. Writing software and maintaining an Operating System is pragmatic by nature. It has to work, be maintainable, and be easy to reason about. But, we also treat this all as a craft. We would rather move deliberately than move fast and break things. That care and intentionality is something we want to preserve in every contribution.

## Our stance

Solus follows a **human-centric development** model. It is our position that only humans can be **authors** and ultimately be held accountable. _People_ develop for, and deliver, the Solus experience to other _people_, whereas "AI" / LLMs are merely tools used to facilitate our objectives.

We recognize that AI tools can be valuable. They can help explore ideas, work with the author to draft or explore technical implementations, and accelerate development.

This policy does not endorse or discourage any particular model or provider. Contributors are free to make their own informed choices about which tools they use.

## Code and packaging contributions

### Scope of contributions

Solus consists of numerous repositories covering everything from packages, tooling, and more. The guidelines and requirements outlined in this section apply universally across all of our repositories. The expectations for AI usage, accountability, and testing remain the same.

### Testing requirements

All contributions must be tested before submission. When AI tools are involved, this is especially important, as AI-generated code can be subtly wrong in ways that look correct at first glance.

- **Non-trivial AI-assisted code** must be built, installed, and tested by the contributor
- **Substantial changes** (refactors, new features, behavioral changes) require rigorous, thorough testing
- The contributor must verify the changes work as intended on Solus

What counts as "trivial"?

"Trivial" is intentionally loosely defined. Typo fixes, grammar corrections, comment updates are considered trivial. If you're unsure whether your change qualifies, err on the side of testing it. When in doubt, build and install.

### Attribution

When AI tools assisted with **code changes** (writing, modifying, or generating code), add an `Assisted-by LLM` trailer to the commit. This is in addition to the requirements outlined in our Contributing documentation:

```text
package-name: Update to x.x.x

**Summary**
- Change Log - https://packagewebsite.com/changelog-x.x.x

Assisted-by: LLM
Signed-off-by: Your Name <your.email@example.com>
```

#### Format

```text
Assisted-by: LLM
```

This follows the [Linux kernel's precedent](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst) for tool attribution in commit trailers.

#### When attribution is required

- AI wrote or generated code that ended up in the commit
- AI substantially modified or refactored existing code
- AI generated an implementation that the contributor then adapted

#### When attribution is NOT required

- AI was used for **research only** - asking questions, understanding APIs, exploring approaches - but the human wrote all the code
- AI performed purely **mechanical tasks** like formatting, running commands, or committing
- AI was used to help **write documentation** for issues or pull requests (not committed code)

:::note

The distinction is about code in the repository. If you used AI to understand how GTK layer shell works and then wrote the implementation yourself, no trailer is needed. If AI generated the implementation and you reviewed/adapted it, include the trailer.

:::

### Enforcement

Intentional obfuscation of AI tooling usage is grounds for rejection and may result in being blocked from future contributions.

We are not interested in policing every keystroke. The goal is honest, transparent collaboration. If you used AI to help write code, say so. It's that simple.

### Pull request guidance

:::note

All Pull Requests must be submitted by the developer, not by an AI bot

:::

When submitting a pull request that includes AI-assisted code:

- Ensure all relevant commits include the `Assisted-by` trailer and align with our Contributing documentation
- Your test plan should reflect that you actually built, installed, and verified the changes
- Supplemental comments on the PR with AI prompt/planning information are welcome and encouraged for research and learnings, but not mandatory

:::note

Sharing AI context

If you used an AI agent for planning or implementation, sharing that context as a **PR comment** can be valuable for reviewers and for the project's collective learning. However, AI planning documents should **not** be committed to the source repository. Share them as PR comments instead.

:::

## Blog posts and written content

The attribution requirements in this policy are specific to source code contributions, but our commitment to human-authored work extends fully to our written communications.

For blog posts, release announcements, and other project communications, the use of AI tools is strictly limited to **translation** and **formatting**. AI tools must **not** be used to generate content, draft narratives, or write the actual copy.

Content that is generated by AI tooling even partially is never acceptable for our blog or official communications. Readers should always trust that a blog post or any written content published by Solus was authored entirely by a human. The voice, narrative, and perspective of our project must remain authentically our own.

## This policy applies equally

This policy is tool-agnostic. It applies to Claude, Gemini, Copilot, ChatGPT, locally-hosted models, and any other current or future models. The expectations are the same regardless of which tool you use.

## Living document

This policy is subject to change as the AI landscape and our own experience with these tools evolve. Contributors are expected to be mindful of updates to this policy and to periodically revisit it to ensure their practices remain in alignment.
