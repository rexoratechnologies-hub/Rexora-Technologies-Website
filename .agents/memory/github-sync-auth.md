---
name: GitHub sync authentication
description: How to handle this workspace's GitHub authentication boundary during repository synchronization.
---

When the configured HTTPS Git remote rejects credentials, the attached GitHub connector can use the Git Database API to publish the local commit without rewriting history. Preserve the exact local commit SHA by creating the tree from the expected remote parent, normalizing the commit message to LF line endings, retaining its trailing newline, and checking the generated tree and commit SHAs before updating the branch ref with `force: false`.

**Why:** The Git CLI remote and Replit's attached GitHub OAuth connection use separate authentication paths; the connector succeeded where the CLI push could not.

**How to apply:** Verify the remote branch still equals the local commit's parent before any write, stop on any tree or commit SHA mismatch, then re-read the remote ref and compare it with local `HEAD`.