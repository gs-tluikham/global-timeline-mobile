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
- Flat activity feed with 8px gaps; tap a company or relationship name to filter by it
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
| Milestone | Description | Milestone type (dropdown) |

All types share Company / Relationship, Subject, Activity date + time, Attachments, and Tasks.

Form rules:
- Company / Relationship comes first. Activity type stays disabled until one is picked; companies allow every type, and each relationship allows its own subset (for example, EMEA Expansion allows Call, Meeting, and Update). Changing the entity clears a type that is no longer allowed.
- Apply template uses the selected activity type's template and is disabled once notes have content.
- Duration is a plain number input (minutes). Call outcome and Milestone type are dropdowns.
- Internal attendees and CC are one flat list of users.
- External attendees and To are disabled until an entity is picked. A company shows its Company persons; a relationship shows Relationship persons first, then the parent Company persons.
- Each task has a title, an assignee (any user, default you), and a due date.
- Attachments are added from the Attachments section or the editor's paperclip, and appear in the activity detail.

## Responsive behaviour

| | Mobile (< 768px) | Desktop |
|---|---|---|
| Pickers | Bottom sheets | Anchored popovers |
| Detail / Composer | Full screen | Right drawer (composer is 2-column ≥ 900px) |
| Add Activity | Floating labeled pill (bottom right) | Header button |

## Data

Fictional companies (Northwind Traders, Globex Corporation, Initech, Acme Robotics, Bluefin Analytics, Pinecrest Health, Lumen Freight), relationships, customer contacts, and teammates. The same records power the feed, the Entity and People search, and the composer pickers.
