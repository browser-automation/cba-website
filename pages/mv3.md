---
title: Manifest version 3
edit: mv3.md
---

Starting from [version 10](/new_10-0) CBA is now [MV3 compliant](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3), meaning you still able to use it with newer Chrome versions. But there are multiple limitations.

## Limitations

- Extensions are no more allowed to execute arbitrary code in the background page, which means that CBA can no more support [bg-inject](/bg-inject) command:
- Background pages are no more persistence and from time to time the clipboard value may be lost, we will be fixing it with current [issue](https://github.com/browser-automation/cba/issues/119).
- [cs-inject](/inject-cs) and [inject](/inject) functions now are same, they both are loading scripts into the page Main contextScript.

### bg-inject

Since [Manifest Version 3](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security#remove-execution-of-strings) it's
not allowed to evaluate script in the context of the extension, meaning CBA users can no more use `bg-inject` command. Previously `bg-inject` was used for injecting script into the background page of the extension where you can also access browser api and create very flexible and powerful Automation.
Currently only extension hosted code can be executed in the context of the background page and the only way to do it is by using [bg-function](/bg-function) command. I am happy to accept commands you have used with `bg-inject` and add them to the `bg-function` command, so please let me know by
[filing an issue](https://github.com/browser-automation/cba/issues) or feel free to creating a PR. Please let me know about your use-cases that you can
no more support with the new MV3 compliance rules, I will try helping you there.

### cs-inject

Since [Manifest Version 3](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security#use-external-libraries) it's not allowed to evaluate user script in the context of the extension, meaning CBA users can no more use `cs-inject` command as they used to. Previously `cs-inject` was allowing users to inject script into the content script of the extension where it was following Extensions content security policy. Now `cs-inject` and `inject` functions are same, they both are loading scripts into the page Main context. This is another limitation introduced by the new [Manifest version 3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3) rules for Browser extensions. This behavior may change after platforms implement [userScripts.execute()](https://github.com/w3c/webextensions/pull/540).
