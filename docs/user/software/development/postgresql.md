---
title: PostgreSQL
summary: A quick guide to using Postgres on Solus
---

# PostgreSQL server

[PostgreSQL](https://www.postgresql.org/) is an open source object-relational database system. The `postgresql` package in Solus includes the PostgreSQL library, client and server.

## Usage

PostgreSQL can be installed either from the Software Center or via terminal:

```bash
sudo eopkg install postgresql
```

Management of the server can be done using Systemd:

```bash
sudo systemctl enable postgresql # Start the server on boot
sudo systemctl start postgresql  # Start the server now
sudo systemctl stop postgresql   # Stop the server
```

It is possible to connect to the database using the PostgreSQL user:

```bash
sudo -u postgres psql
```

Note that all local connections are trusted and can access all databases by default. This can be changed in `/var/db/pgsql/data/pg_hba.conf`, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html) for more details.

## Updating to 17

Because PostgreSQL is included as a single package, the only way to perform a major upgrade of PostgreSQL is via a backup/restore. The procedure below describes the upgrade process as it applies to Solus. See the [PostgreSQL documentation](https://www.postgresql.org/docs/17/upgrading.html#UPGRADING-VIA-PGDUMPALL) for more details.

1.  If you have already updated PostgreSQL, downgrade PostgreSQL back to 16.4:

```bash
sudo eopkg it https://cdn.getsol.us/repo/shannon/p/postgresql/postgresql-16.4-51-1-x86_64.eopkg \
              https://cdn.getsol.us/repo/shannon/p/postgresql/postgresql-libpq-16.4-51-1-x86_64.eopkg 
```

2.  (Re)start PostgreSQL:

```bash
sudo systemctl restart postgresql
```

3.  Create a backup of all current data:

```bash
sudo -u postgres pg_dumpall -f /tmp/backup.sql
```

The location of the backup may be one of your choosing, but keep in mind that the `postgres` user needs to have write permissions on the given location.

4.  Stop PostgreSQL:

```bash
sudo systemctl stop postgresql
```

5.  Rename the old data directory. This directory contains the old configuration and the original database, but requires significant disk space.

```bash
sudo mv /var/db/pgsql/data /var/db/pgsql/data.old
```

6.  Create a new data directory:

```bash
sudo mkdir /var/db/pgsql/data
sudo chown postgres: /var/db/pgsql/data
```

7.  Upgrade PostgreSQL:

```bash
sudo eopkg upgrade
```

8.  Start PostgreSQL:

```bash
sudo systemctl start postgresql
```

9.  Restore the data:

```bash
sudo -u postgres psql < /tmp/backup.sql
```

10. (optional) Update the configuration files in `/var/db/pgsql/data` based on the configuration in `/var/db/pgsql/data.old`. Restart PostgreSQL afterwards.

11. Verify that the migration was successful and your data is there.

12. Remove the backup and data dump:

```bash
sudo rm -r /var/db/pgsql/data.old /tmp/backup.sql
```
