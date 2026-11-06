# mr-host-contract

A test fixture for a host API contract run: Node with Vitest, and a `CI` workflow on `pull_request` and `merge_group`.

`CI` fails on demand:

- `FAIL_CI` at the root fails it on every run.
- `FAIL_QUEUE` at the root fails it only in the merge queue, so a queued PR leaves the queue and stays open.

`main` takes changes through the merge queue, with one approval, linear history and the `test` check.
