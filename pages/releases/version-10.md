---
title: Version 10.0(MV3)
permalink: new_10-0
weight: 1
edit: releases/varsion-10.md
---

Current release introduces multiple breaking changes, those changes was due to the
[new compliance rules introduced by the Chrome Platform](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3). There are
multiple limitations introduced by the MV3, which are described in the [MV3 documentation](/mv3). See [list of all changes here](https://github.com/browser-automation/cba/releases/tag/10.0.0):
- CBA is now [MV3 compliant](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3), meaning you still able to use it with newer Chrome versions.
- [bg-inject](/bg-inject) - command is deprecated, Chrome platform no more
  supports injecting user script into Background page.
  - If your automation highly relies on bg-inject, please let me know by [filing an issue](https://github.com/browser-automation/cba/issues), I will try add new
    [bg-function](/bg-function) command for those commands that suppose to be
    injected in the background. I am also happy to accept PRs for this.
- [cs-inject](/inject-cs) and [inject](/inject) functions now are same, they
  both are loading scripts into the page Main contextScript. This is another
  limitation introduced by the new [Manifest version 3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)
  extensions.
- Background pages are no more persistence and they will always be reloaded when
  you execute action, or open CBA popup. Which means the clipboard content might
  be lost on followup execution if that happens [unless current issue is fixed](https://github.com/browser-automation/cba/issues/119).