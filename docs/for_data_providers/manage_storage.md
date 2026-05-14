# Manage Notebook Lab Files

This guidance applies only to files in the Notebook Lab environment launched by MSD-LIVE.

## File Quota

- Limit: 50 GB per user per dataset
- Dataset files mounted under `/data` (and symlinked in your home folder as `data`) are excluded from the quota
- MSD-LIVE monitors usage daily and sends email alerts if the quota is exceeded
- Manage usage by cleaning up old files and intermediate outputs

## Automatic File Cleanup

Files older than 7 days are automatically deleted to maintain system performance.

### What Gets Deleted

- Temporary files (`.tmp`, `.log`, `.cache`, `.bak`)
- Data files (`.csv`, `.json`, `.pkl`, `.zip`, and similar intermediates)
- Large files over 100 MB
- Files with `temp`, `cache`, or `backup` in the name

### What Is Protected

- Configuration directories (`.jupyter`, `.ssh`, `.git`, and similar)
- Recently accessed Jupyter notebooks
- Any file accessed within the last 7 days
- Dataset data mounted at `/data` (never deleted)

### Advance Warning

1. MSD-LIVE sends an email notification 3 days before deletion.
2. Open or edit a file to protect it for another 7 days.

## Best Practices

- Use the Pull Request button to push notebook updates back to your GitHub repository.
- Complete notebook development work within 1 week when possible.
- Regularly remove stale checkpoints, caches, and large intermediate files.
