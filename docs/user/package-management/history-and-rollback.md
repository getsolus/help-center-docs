---
title: History and Software Rollback
summary: History and Software Rollback
---

# History and software rollback in Solus

Solus offers a feature to view your history of software changes and revert your system to previous versions. 

You can use this feature if you have issues after installing packages or system updates, and you need to return to a working state.

:::warning[Important]

The rollback operation only works if:

- The Solus repository has the version of the package you need.
- You have a local copy of the package.

:::

## History of software changes

- To see your history of software changes, open a terminal and execute:

    ```bash
    eopkg history
    ```

    The terminal displays a list of all the software changes in your system.

    ![eopkg history output](./eopkg-history-output.png)

## Rollback

1. Disable any [local repository](https://help.getsol.us/docs/packaging/advanced-config/local-repository#disabling-the-local-solbuild-repository-in-eopkg) you have.

    Local repositories can cause errors during rollbacks.

1. Open a terminal.

1. Check the operation history.

    ```bash
    sudo eopkg history
    ```

1. Note the number of the operation you want to undo.

1. Do the rollback

    1. Use the following command:

    ```bash
    sudo eopkg history -t NUMBER
    ```

    Replace `NUMBER` with the operation number immediately before the one you want to undo.

    For example, if you want to undo operation 100, use 99 as the number.
