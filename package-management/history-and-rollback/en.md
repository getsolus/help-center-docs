+++
title = "History and Software Rollback"
+++
# History and Software Rollback

Solus provides a history and rollback feature via its package manager, eopkg. This feature allows you to see when your repository was last 
updated, actions such as installation, removal, and upgrading of software. 

Our rollback feature allows you to essentially rewind your system's software back to a previous state, assuming you or our repository has the versions in question.

## History

You can see the history from eopkg by using:

``` bash
sudo eopkg history
```

## Rollback

To rollback your system, first use the above history command to check what the transaction / operation number was. Then, we use the following command:

``` bash
sudo eopkg history -t number
```

The number, in this case, is the operation before the one you want to change. So if the number was `100`, then you would use `99`.