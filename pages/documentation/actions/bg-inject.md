---
title: bg-inject
permalink: bg-inject
weight: 3
edit: documentation/actions/bg-inject.md
---

# bg-inject is deprecated since CBA version 10.0

Since [Manifest Version 3](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security#remove-execution-of-strings) it's
not allowed to evaluate script in the context of the extension, meaning CBA users can no more use `bg-inject` command. Previously `bg-inject` was used for injecting script into the background page of the extension where you can also access browser api and create very flexible and powerful Automation.
Currently only extension hosted code can be executed in the context of the background page and the only way to do it is by using [bg-function](/bg-function) command. I am happy to accept commands you have used with `bg-inject` and add them to the `bg-function` command, so please let me know by
[filing an issue](https://github.com/browser-automation/cba/issues) or feel free to creating a PR. Please let me know about your use-cases that you can
no more support with the new MV3 compliance rules, I will try helping you there.

Learn more about [MV3 compliance changes](/mv3).

## bg-inject in CBA version 9.0 and less

`bg-inject` provides ability of injecting script into backroung page of the
extension where you can also access browser api.

<div data-example="bg-inject">

```
browser.tabs.create({url: "https://example.org"});
```
</div>

## Clipboard

It's handy to use [clipboard](/clipboard) object to pass data from the page to
the `bg-inject` actions.

<div data-example="copy">

```
#page-url
```
</div>

<div data-example="bg-inject">

```
browser.tabs.create({url: clipboard["copy"]});
```
</div>

## actionToPlay

`actionToPlay` function is used for jumping to another action.

<div data-example="bg-inject">

```
if (clipboard["jumpToFirstAction"])
{
  actionToPlay(1);
}
```
</div>

## async/await

You can also use async/await in the `bg-inject` that way you can wait for an
async function execution before proceeding with the next action.

<div data-example="bg-inject">

```
const [tab] = await browser.tabs.query({active: true});
await browser.tabs.remove(tab.id);
```
</div>
