# Global Timeline — Mobile Web Prototype

Clickable, mobile-first simplification of Global Timeline. Vanilla HTML/CSS/JS with fictional in-memory data — not wired to `gs-ui-timeline` APIs yet.

## Run

```bash
cd prototypes/global-timeline-mobile
python3 -m http.server 5179
```

Open http://localhost:5179 (use a phone or DevTools device mode; it also adapts to desktop).

## Scope

**Included**
- Views picker (select only — no create/edit)
- Quick filters: Activity Type (multi-select) and Activity Date (presets + custom range)
- Scoped search: Content (filters + highlights text), Entity (Company / Relationship), People (Person / User)
- Feed grouped by day; tap a company or relationship name to filter by it
- Activity detail with comments and @mentions
- Add Activity composer whose fields change per activity type
- Drafts: closing a filled composer auto-saves; select + delete with undo; Email & plugin filter

**Deferred**
- Advanced Filters, Create View, global header search, real APIs, Horizon components

## Composer fields by type

| Type | Notes label | Extra fields |
|---|---|---|
| Call | Call notes | Duration, Outcome, Internal / External attendees |
| Meeting | Meeting notes | Duration, Location, Internal / External attendees |
| Email | Email body | To, CC |
| Update | Notes | — |
| Milestone | Description | Milestone type (prefills subject) |

All types share Company / Relationship, Subject, Activity date + time, Tasks, and Apply template.

## Responsive behaviour

| | Mobile (< 768px) | Desktop |
|---|---|---|
| Pickers | Bottom sheets | Anchored popovers |
| Detail / Composer | Full screen | Right drawer (composer is 2-column ≥ 900px) |
| Add Activity | Floating action button | Header button |

## Data

Fictional companies (Northwind Traders, Globex Corporation, Initech, Acme Robotics, Bluefin Analytics, Pinecrest Health, Lumen Freight), relationships, customer contacts, and teammates. The same records power the feed, the Entity and People search, and the composer pickers.
