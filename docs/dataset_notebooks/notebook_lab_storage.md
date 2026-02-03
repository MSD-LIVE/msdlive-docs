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

<cds-tabs trigger-content="Select an item" value="deleted">
    <cds-tab id="tab-deleted" target="panel-deleted" value="deleted">What gets deleted</cds-tab>
    <cds-tab id="tab-protected" target="panel-protected" value="protected">What's protected</cds-tab>
    <cds-tab id="tab-warning" target="panel-warning" value="warning">Advance warning</cds-tab>
</cds-tabs>

<div class="tabs-wrapper">
    <div id="panel-deleted" role="tabpanel" aria-labelledby="tab-deleted" hidden>
        Temporary artifacts (.tmp, .log, .cache, .bak), intermediate data (.csv, .json, .pkl, .zip, etc.), any file over 100 MB, and items named “temp”, “cache”, or “backup”.
    </div>

    <div id="panel-protected" role="tabpanel" aria-labelledby="tab-protected" hidden>
        Configuration directories (.jupyter, .ssh, .git, etc.), recently accessed notebooks, files touched within 7 days, and dataset mounts at /data.
    </div>

    <div id="panel-warning" role="tabpanel" aria-labelledby="tab-warning" hidden>
        <ol>
            <li>Quota-breach emails prompt cleanup.</li>
            <li>A notice arrives 3 days before deletion.</li>
            <li>Opening or editing a file before that deadline resets its protection window.</li>
        </ol>
    </div>
</div>

!!! tip "Retention Highlights"
    Only files idle for 7 days are candidates. Touching a file restarts its timer, and mounted dataset content under `/data` is always preserved.

## Best practices

- Push updates via the Pull Request button before ending a session.
- Keep notebooks active or finish work within a week.
- Routinely prune checkpoints, caches, and bulky intermediates.
