---
title: bg-inject
permalink: bg-inject
weight: 3
edit: documentation/actions/bg-inject.md
---

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
