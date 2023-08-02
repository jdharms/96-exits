---
title: "My Second Post"
date: 2023-07-26 12:00
tags: "two three four"
summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sit veniam rem iure dolorum molestias harum, enim aspernatur obcaecati nihil amet vero dolor deserunt, error incidunt doloremque quas dolorem voluptas."
---

This configuration specifies a single document type called Post. These documents are expected to be Markdown files that live within a posts directory in your project.

Any data objects generated from these files will contain the fields specified above, along with a body field that contains the raw and HTML content of the file. The url field is a special computed field that gets automatically added to all post documents, based on meta properties from the source file.