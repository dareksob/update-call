# update-call
An command line tool written in node. To watch on file (pattern) updates and call other command line tools.

## Install
Install this command line tool with npm (node 8.11.1 testet)

```
npm i --global github:dareksob/update-call
```


## How to use

Start with simple example, by watching on updates in current folder
````
update-call * echo "File has been changed"
````

Now all file update/change/renaming will be catch and call command `echo "File has been changed`

### Using Pattern

Use a regular expression pattern to execute your call by this files.

Example for js files only:
````
update-call .js$ echo "your js has been changed"
````



### Optional parameter %0

With the parameter `%0` you get all changed files as collection inside your command

````
update-call * echo "Files:" %0
````

Will output on updates: `Files: a.txt b.txt c.txt`



