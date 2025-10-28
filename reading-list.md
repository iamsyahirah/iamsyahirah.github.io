---
layout: default
title: Reading List
permalink: /reading-list/
---

# Reading List

{% comment %}
Sort by date (newest first). Books without date will be handled after.
{% endcomment %}
{% assign with_date = site.data.books | where_exp: "b", "b.date" | sort: "date" | reverse %}
{% assign no_date  = site.data.books | where_exp: "b", "b.date == nil" %}

{% assign current_year  = "" %}
{% assign current_month = "" %}

{% for b in with_date %}
  {% assign y = b.date | date: "%Y" %}
  {% assign m = b.date | date: "%B" %}

  {% if y != current_year %}
  ## {{ y }}
  {% assign current_year = y %}
  {% assign current_month = "" %}
  {% endif %}

  {% if m != current_month %}
  ### {{ m }}
  {% assign current_month = m %}
  {% endif %}

- **{{ b.title }}** — {{ b.author }}{% if b.publisher %} ({{ b.publisher }}{% if b.year %}, {{ b.year }}{% endif %}){% elsif b.year %} ({{ b.year }}){% endif %}
{% endfor %}

{% if no_date and no_date.size > 0 %}
## No date
{% for b in no_date %}
- **{{ b.title }}** — {{ b.author }}{% if b.publisher %} ({{ b.publisher }}{% if b.year %}, {{ b.year }}{% endif %}){% elsif b.year %} ({{ b.year }}){% endif %}
{% endfor %}
{% endif %}
