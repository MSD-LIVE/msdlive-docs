# Notebook Lab Storage

Reference information for managing storage in your Notebook Lab environment.

## Quick Reference

| Item | Details |
| --- | --- |
| Storage quota | 50 GB per user per dataset |
| Auto-deletion window | Files inactive for 7 days |
| Exclusions | Dataset mounts at `/data`, config dirs (.jupyter, .ssh, .git, etc.) |
| Notifications | Email alert if quota exceeded + 3-day warning before cleanup |

## Manage Your Home Directory

!!! important

    Keep your home directory under 50 GB; anything untouched for 7 days is removed automatically.

## Storage Quota

Each dataset workspace includes 50 GB of personal storage. Files mounted from `/data` (and their home-folder symlinks) never count toward the limit. MSD-LIVE checks usage daily, emails when you exceed quota, and expects you to archive or delete stale artifacts.

## Automated Cleanup

=== "What gets deleted"
Temporary artifacts (.tmp, .log, .cache, .bak), intermediate data (.csv, .json, .pkl, .zip, etc.), any file over 100 MB, and items named “temp”, “cache”, or “backup”.

=== "What's protected"
Configuration directories (.jupyter, .ssh, .git, etc.), recently accessed notebooks, files touched within 7 days, and dataset mounts at /data.

=== "Advance warning"
1. Quota-breach emails prompt cleanup.
2. A notice arrives 3 days before deletion.
3. Opening or editing a file before that deadline resets its protection window.

!!! tip "Retention Highlights"
    Only files idle for 7 days are candidates. Touching a file restarts its timer, and mounted dataset content under `/data` is always preserved.

## Best practices

- Push updates via the Pull Request button before ending a session.
- Keep notebooks active or finish work within a week.
- Routinely prune checkpoints, caches, and bulky intermediates.
