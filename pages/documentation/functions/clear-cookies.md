---
title: Clear cookies
permalink: clear-cookies-func
edit: documentation/functions/clear-cookies.md
---

### Action:

bg-function

### Script:

```
<$function=removeCookie>
<$attr=facebook>
```

### Description:

The function is designed to clear browser cookie that match corresponding attribute, in this case the function will remove each cookie which set by domain which contain "facebook" in the domain name, you can use any regular expression for the attribute.

For example if you will use the attribute mentioned below then CBA will delete all cookies during the project workflow: 

```
<$function=removeCookie>
<$attr=.*>
```
