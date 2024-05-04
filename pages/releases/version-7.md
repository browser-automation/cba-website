---
title: Version 7.0
weight: 4
edit: releases/version-7.md
---

- [Implemented new clipboard object that holds data during chrome process](/clipboard)
- `<$past>` placeholder got deprecated, instead <$clipboard> new placeholder implemented for [change action](/change)
- changed [copy action logic](/copy) now copy action write data into clipboard object - `clipboard["copy"]`
- [new clipboard function implemented for accessing clipboard object](/clipboard)
- Fixed bug with project renaming
- Several improvements implemented