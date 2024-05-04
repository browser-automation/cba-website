---
title: inject-cs
permalink: inject-cs
weight: 2
edit: documentation/actions/inject-cs.md
---

# cs-inject is works similar to inject since CBA version 10.0

Since [Manifest Version 3](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security#use-external-libraries) it's not allowed to evaluate user script in the context of the extension, meaning CBA users can no more use `cs-inject` command as they used to. Previously `cs-inject` was allowing users to inject script into the content script of the extension where it was following Extensions content security policy. Now `cs-inject` and `inject` functions are same, they both are loading scripts into the page Main context. This is another limitation introduced by the new [Manifest version 3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3) rules for Browser extensions. This behavior may change after platforms implement [userScripts.execute()](https://github.com/w3c/webextensions/pull/540).

Learn more about [MV3 compliance changes](/mv3).

## cs-inject in CBA version 9.0 and less

Inject is the Action that Injects javascript code into content script during
project workflow, also you can use Jquery. It uses javascript `eval()` function
to inject your code. so here you can write your javascript code using functions
and variables, just notice only one thing that extensions create contect script
for each Iframe.

<div data-example="cs-inject">

```
$("body").html("Hello World");
```
</div> 

## ~~async/await~~

**Note:** Since CBA version 10.0, `async/await` is not supported in the `cs-inject`.

You can also use async/await in the `cs-inject` that way you can wait for an
async function execution before proceeding with the next action.

<div data-example="cs-inject">

```
await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 300);
});
```
</div> 