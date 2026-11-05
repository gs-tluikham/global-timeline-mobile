(() => {
  "use strict";

  /* ───────── Icons ───────── */
  const ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    chevronDown: '<polyline points="6 9 12 15 18 9"/>',
    chevronLeft: '<polyline points="15 18 9 12 15 6"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"/><polyline points="21 3 21 8 16 8"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    more: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    bold: '<path d="M6 4h8a4 4 0 0 1 0 8H6z"/><path d="M6 12h9a4 4 0 0 1 0 8H6z"/>',
    italic: '<line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/>',
    underline: '<path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
    listOrdered: '<line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    at: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    circle: '<circle cx="12" cy="12" r="9"/>',
    template: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  };
  const svg = (name, size = 18) =>
    `<svg class="i" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ───────── Helpers ───────── */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const isDesktop = () => window.matchMedia("(min-width: 768px)").matches;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stripHtml = (html) => {
    const d = document.createElement("div");
    d.innerHTML = (html || "").replace(/<\/(p|li|div|h[1-6])>|<br\s*\/?>/gi, (m) => `${m} `);
    return (d.textContent || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  };
  const uid = (p) => p + Math.random().toString(36).slice(2, 9);
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const HOUR = 36e5;
  const DAY = 864e5;
  const ago = (days, hours = 0, mins = 0) => Date.now() - days * DAY - hours * HOUR - mins * 6e4;

  /* ───────── Fictional data ───────── */
  const ME = "u1";

  const USERS = [
    { id: "u1", name: "Maya Chen", email: "maya.chen@gainsight.com", title: "Customer Success Manager" },
    { id: "u2", name: "Daniel Ortiz", email: "daniel.ortiz@gainsight.com", title: "Account Executive" },
    { id: "u3", name: "Priya Raman", email: "priya.raman@gainsight.com", title: "Solutions Consultant" },
    { id: "u4", name: "Kenji Watanabe", email: "kenji.watanabe@gainsight.com", title: "Director, Customer Success" },
    { id: "u5", name: "System Administrator", email: "admin@gainsight.com", title: "Automation", system: true },
  ].map((u) => ({ ...u, kind: "User" }));

  const COMPANIES = [
    { id: "co1", name: "Northwind Traders", csm: "u1" },
    { id: "co2", name: "Globex Corporation", csm: "u2" },
    { id: "co3", name: "Initech", csm: "u3" },
    { id: "co4", name: "Acme Robotics", csm: "u1" },
    { id: "co5", name: "Bluefin Analytics", csm: "u2" },
    { id: "co6", name: "Pinecrest Health", csm: "u3" },
    { id: "co7", name: "Lumen Freight", csm: "u1" },
  ];

  const RELATIONSHIPS = [
    { id: "re1", name: "Data Platform", companyId: "co1", relType: "Product", activityTypes: ["Call", "Meeting", "Email", "Update"] },
    { id: "re2", name: "EMEA Expansion", companyId: "co2", relType: "Region", activityTypes: ["Call", "Meeting", "Update"] },
    { id: "re3", name: "Fleet Ops", companyId: "co4", relType: "Product", activityTypes: ["Call", "Meeting", "Update", "Milestone"] },
    { id: "re4", name: "Patient Portal", companyId: "co6", relType: "Product", activityTypes: ["Call", "Email", "Update"] },
  ];

  const PERSONS = [
    { id: "p1", name: "Jordan Blake", email: "jordan.blake@northwind.example", title: "VP Operations", companyId: "co1" },
    { id: "p8", name: "Hannah Lee", email: "hannah.lee@northwind.example", title: "IT Manager", companyId: "co1" },
    { id: "p2", name: "Elena Petrova", email: "elena.petrova@globex.example", title: "Head of IT", companyId: "co2" },
    { id: "p3", name: "Sam Whitaker", email: "sam.whitaker@initech.example", title: "Director, Finance Systems", companyId: "co3" },
    { id: "p4", name: "Aisha Khan", email: "aisha.khan@acmerobotics.example", title: "COO", companyId: "co4" },
    { id: "p5", name: "Leo Martins", email: "leo.martins@bluefin.example", title: "Data Lead", companyId: "co5" },
    { id: "p6", name: "Grace Okafor", email: "grace.okafor@pinecrest.example", title: "CIO", companyId: "co6" },
    { id: "p7", name: "Tomás Rivera", email: "tomas.rivera@lumenfreight.example", title: "Operations Manager", companyId: "co7" },
    { id: "p9", name: "Priyanka Das", email: "priyanka.das@northwind.example", title: "Data Platform Owner", companyId: "co1", relationshipId: "re1" },
    { id: "p10", name: "Marcus Weber", email: "marcus.weber@globex.example", title: "EMEA Program Lead", companyId: "co2", relationshipId: "re2" },
    { id: "p11", name: "Owen Fischer", email: "owen.fischer@acmerobotics.example", title: "Fleet Ops Manager", companyId: "co4", relationshipId: "re3" },
    { id: "p12", name: "Lina Haddad", email: "lina.haddad@pinecrest.example", title: "Portal Product Manager", companyId: "co6", relationshipId: "re4" },
  ].map((p) => ({ ...p, kind: "Person" }));

  const PEOPLE = [...USERS, ...PERSONS];
  const personById = Object.fromEntries(PEOPLE.map((p) => [p.id, p]));
  const companyById = Object.fromEntries(COMPANIES.map((c) => [c.id, c]));
  const relById = Object.fromEntries(RELATIONSHIPS.map((r) => [r.id, r]));

  const mention = (id) => `<span class="mention" data-person="${id}" contenteditable="false">@${esc(personById[id].name)}</span>`;

  const TYPES = {
    Call: {
      label: "Call", icon: "phone", fg: "#1765f2", bg: "#e7f0ff",
      notes: "Call notes", placeholder: "What was discussed? Type @ to mention a teammate",
      details: ["duration", "outcome", "internal", "external"],
      template: "<p><b>Purpose</b></p><ul><li><br></li></ul><p><b>Discussion</b></p><ul><li><br></li></ul><p><b>Next steps</b></p><ul><li><br></li></ul>",
    },
    Meeting: {
      label: "Meeting", icon: "users", fg: "#0f9d63", bg: "#e2f6ec",
      notes: "Meeting notes", placeholder: "Agenda, decisions, next steps…",
      details: ["duration", "location", "internal", "external"],
      template: "<p><b>Agenda</b></p><ul><li><br></li></ul><p><b>Decisions</b></p><ul><li><br></li></ul><p><b>Action items</b></p><ul><li><br></li></ul>",
    },
    Email: {
      label: "Email", icon: "mail", fg: "#b86e00", bg: "#fff3dc",
      notes: "Email body", placeholder: "Write or paste the email…",
      details: ["to", "cc"],
      template: "<p>Hi ,</p><p><br></p><p>Best,<br>Maya</p>",
    },
    Update: {
      label: "Update", icon: "message", fg: "#d6336c", bg: "#fde8ef",
      notes: "Notes", placeholder: "Share an update. Type @ to mention a teammate",
      details: [],
      template: "<p><b>What changed</b></p><p><br></p><p><b>Impact</b></p><p><br></p>",
    },
    Milestone: {
      label: "Milestone", icon: "flag", fg: "#7048e8", bg: "#efe9fd",
      notes: "Description", placeholder: "What was achieved?",
      details: ["milestoneType"],
      template: "<p><b>Milestone</b></p><p><br></p><p><b>Who was involved</b></p><p><br></p>",
    },
  };
  const TYPE_KEYS = Object.keys(TYPES);
  const NO_TYPE = { label: "", icon: "file", fg: "#4e5a6b", bg: "#eef1f5", notes: "Notes", placeholder: "Enter notes and @mention users", details: [], template: "" };
  const typeCfg = (t) => TYPES[t] || NO_TYPE;
  const OUTCOMES = ["Connected", "Left voicemail", "No answer", "Rescheduled"];
  const MILESTONES = ["Kickoff", "Onboarding complete", "Go-live", "QBR", "Renewal", "Expansion", "Risk flagged"];

  function allowedTypes(entityId) {
    if (!entityId) return [];
    const rel = relById[entityId];
    return rel ? rel.activityTypes : TYPE_KEYS;
  }

  let ACTIVITIES = [
    {
      id: "a1", type: "Call", entityId: "re1", authorId: "u1", date: ago(0, 2),
      subject: "Renewal pricing walkthrough",
      notes: `<p>Walked Jordan through the renewal pricing sample for the Data Platform add-on. They want a multi-year option and a usage cap.</p><p>${mention("u2")} to share a revised quote by Friday.</p>`,
      duration: 30, outcome: "Connected", internal: ["u1", "u2"], external: ["p1", "p8"],
      tasks: [{ id: "t1", title: "Send revised multi-year quote", due: "", done: false }],
      comments: [
        { id: "c1", authorId: "u2", text: "On it — looping in finance for the multi-year discount.", date: ago(0, 1, 20) },
        { id: "c2", authorId: "u1", text: "Thanks @Daniel Ortiz. Jordan prefers a call over email for the walkthrough.", date: ago(0, 1) },
      ],
    },
    {
      id: "a2", type: "Milestone", entityId: "re3", authorId: "u5", date: ago(0, 5),
      subject: "Fleet Ops go-live completed",
      notes: "<p>Fleet Ops workspace is live for 120 users across three depots.</p>",
      milestoneType: "Go-live", comments: [],
    },
    {
      id: "a3", type: "Meeting", entityId: "re2", authorId: "u2", date: ago(1, 3),
      subject: "EMEA expansion kickoff",
      notes: "<p>Agreed on a phased rollout: UK in Q1, DACH in Q2. Shared a sample success plan with Elena.</p>",
      duration: 60, location: "Zoom", internal: ["u2", "u3"], external: ["p2"],
      comments: [{ id: "c3", authorId: "u4", text: "Great start. Let’s review the DACH staffing plan next week.", date: ago(1, 1) }],
    },
    {
      id: "a4", type: "Email", entityId: "co3", authorId: "u3", date: ago(1, 6),
      subject: "Follow-up: invoice reconciliation",
      notes: "<p>Hi Sam,</p><p>Attaching the sample reconciliation report we discussed. Let me know if the cost-center mapping looks right.</p><p>Best,<br>Priya</p>",
      to: ["p3"], cc: ["u3"], comments: [],
    },
    {
      id: "a5", type: "Update", entityId: "co5", authorId: "u2", date: ago(3, 2),
      subject: "Champion is changing roles",
      notes: `<p>Leo Martins is moving to a new role next month. We need to identify a new executive sponsor. ${mention("u4")} can you help with an intro?</p>`,
      comments: [{ id: "c4", authorId: "u4", text: "Yes — I know their CTO. Will reach out.", date: ago(3) }],
    },
    {
      id: "a6", type: "Call", entityId: "re4", authorId: "u3", date: ago(5, 4),
      subject: "Patient Portal adoption check-in",
      notes: "<p>Left a voicemail for Grace about the portal adoption dip. Will retry Thursday.</p>",
      duration: 5, outcome: "Left voicemail", internal: ["u3"], external: ["p6"], comments: [],
    },
    {
      id: "a7", type: "Meeting", entityId: "co1", authorId: "u1", date: ago(12, 2),
      subject: "Quarterly business review",
      notes: "<p>Reviewed adoption, support trends, and the expansion roadmap. Jordan asked for a sample ROI summary for their board.</p>",
      duration: 90, location: "Northwind HQ, Seattle", internal: ["u1", "u4"], external: ["p1", "p8"],
      comments: [],
    },
    {
      id: "a8", type: "Update", entityId: "co7", authorId: "u1", date: ago(15, 5),
      subject: "Usage dip in October",
      notes: "<p>Weekly active users dropped 18%. Drafted a sample outreach plan for Tomás focused on the new dispatch workflow.</p>",
      comments: [],
    },
    {
      id: "a9", type: "Email", entityId: "co4", authorId: "u1", date: ago(21, 3),
      subject: "Training session recap",
      notes: "<p>Hi Aisha, thanks for hosting the training. Recording and sample exercises are attached.</p>",
      to: ["p4"], cc: [], comments: [],
    },
    {
      id: "a10", type: "Milestone", entityId: "co2", authorId: "u5", date: ago(40, 2),
      subject: "Renewal signed — 2 years",
      notes: "<p>Globex renewed for two years with a 12% uplift.</p>",
      milestoneType: "Renewal", comments: [],
    },
  ];

  let DRAFTS = [
    {
      draftId: "d1", type: "Email", entityId: "co2", updatedAt: ago(0, 1), source: "Email to Timeline",
      subject: "November product update — what’s new", notes: "<p>Hi Elena, sharing a few highlights from this month’s release…</p>",
      to: ["p2"], cc: [], internal: [], external: [], tasks: [],
    },
    {
      draftId: "d2", type: "Call", entityId: "co7", updatedAt: ago(0, 3),
      subject: "", notes: "<p>Tomás mentioned a budget freeze until January.</p>",
      duration: "15", outcome: "Connected", internal: ["u1"], external: ["p7"], to: [], cc: [], tasks: [],
    },
    {
      draftId: "d3", type: "Meeting", entityId: "re3", updatedAt: ago(1, 2),
      subject: "Fleet Ops roadmap review", notes: "",
      duration: "45", location: "Google Meet", internal: ["u1"], external: ["p4"], to: [], cc: [], tasks: [],
    },
    {
      draftId: "d4", type: "Update", entityId: "co3", updatedAt: ago(5), source: "Outlook plugin",
      subject: "Exec sponsor intro", notes: `<p>Need an intro to the new CFO via ${mention("p3")}.</p>`,
      internal: [], external: [], to: [], cc: [], tasks: [],
    },
    {
      draftId: "d5", type: "Email", entityId: "co6", updatedAt: ago(9), source: "Gmail plugin",
      subject: "Re: Portal SSO issue", notes: "<p>Hi Grace, following up on the SSO ticket…</p>",
      to: ["p6"], cc: ["u3"], internal: [], external: [], tasks: [],
    },
  ];

  const VIEWS = [
    { id: "default", name: "Default View", section: "" },
    { id: "v1", name: "Calls & Meetings", section: "Admin defined views", types: ["Call", "Meeting"] },
    { id: "v2", name: "Customer Milestones", section: "Admin defined views", types: ["Milestone"] },
    { id: "v3", name: "Customer Emails", section: "Admin defined views", types: ["Email"] },
    { id: "v4", name: "My last 30 days", section: "Custom views", date: "last30" },
    { id: "v5", name: "Updates this week", section: "Custom views", types: ["Update"], date: "thisweek" },
  ];

  const DATE_PRESETS = [
    { id: "anytime", label: "Anytime" },
    { id: "today", label: "Today" },
    { id: "yesterday", label: "Yesterday" },
    { id: "thisweek", label: "This week" },
    { id: "last7", label: "Last 7 days" },
    { id: "last30", label: "Last 30 days" },
    { id: "custom", label: "Custom range" },
  ];

  const SCOPES = {
    content: { label: "Content", icon: "message", placeholder: "Search subjects and notes", desc: "Find text inside activities" },
    entity: { label: "Entity", icon: "building", placeholder: "Search companies or relationships", desc: "Companies and relationships" },
    people: { label: "People", icon: "users", placeholder: "Search persons or users", desc: "Customer contacts and teammates" },
  };

  const state = {
    viewId: "default",
    types: new Set(TYPE_KEYS),
    date: { preset: "anytime", start: "", end: "" },
    scope: "content",
    query: "",
    token: null,
    draftsSeg: "all",
    draftsQuery: "",
    selectMode: false,
    selected: new Set(),
    lastLoggedId: null,
  };

  /* ───────── Formatting ───────── */
  const PALETTE = [
    ["#e0ecff", "#1d4ed8"], ["#dcfce7", "#15803d"], ["#fef3c7", "#b45309"], ["#fce7f3", "#be185d"],
    ["#ede9fe", "#6d28d9"], ["#e0f2fe", "#0369a1"], ["#ffe4e6", "#be123c"], ["#f1f5f9", "#334155"],
  ];
  const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  function avatar(p, size = 24) {
    if (typeof p === "string") p = personById[p];
    if (!p) return "";
    const [bg, fg] = PALETTE[hash(p.name) % PALETTE.length];
    return `<span class="avatar" style="--s:${size}px;background:${bg};color:${fg}" aria-hidden="true">${esc(initials(p.name))}</span>`;
  }

  function typeIcon(type, size = "md") {
    const t = typeCfg(type);
    return `<span class="type-icon ${size === "sm" ? "type-icon--sm" : ""}" style="--tc:${t.fg};--tb:${t.bg}" aria-hidden="true">${svg(t.icon, size === "sm" ? 14 : 16)}</span>`;
  }

  const sameYear = (t) => new Date(t).getFullYear() === new Date().getFullYear();
  const fmtTime = (t) => new Date(t).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const fmtDate = (t) => new Date(t).toLocaleDateString([], { month: "short", day: "numeric", ...(sameYear(t) ? {} : { year: "numeric" }) });
  const fmtFull = (t) => `${new Date(t).toLocaleDateString([], { weekday: "short", month: "short", day: "numeric", year: "numeric" })} at ${fmtTime(t)}`;

  function dayDiff(t) {
    const a = new Date(); a.setHours(0, 0, 0, 0);
    const b = new Date(t); b.setHours(0, 0, 0, 0);
    return Math.round((a - b) / DAY);
  }
  function shortStamp(t) {
    const d = dayDiff(t);
    if (d === 0) return fmtTime(t);
    if (d === 1) return "Yesterday";
    return fmtDate(t);
  }
  function relTime(t) {
    const m = Math.round((Date.now() - t) / 6e4);
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.round(m / 60);
    if (h < 24 && dayDiff(t) === 0) return `${h}h ago`;
    return shortStamp(t);
  }
  const pad = (n) => String(n).padStart(2, "0");
  const toDateInput = (t) => { const d = new Date(t); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
  const toTimeInput = (t) => { const d = new Date(t); return `${pad(d.getHours())}:${pad(d.getMinutes())}`; };

  function entityInfo(id) {
    if (!id) return null;
    if (companyById[id]) {
      const c = companyById[id];
      return { id, kind: "Company", badge: "C", name: c.name, companyId: c.id, companyName: c.name, relName: null, label: c.name };
    }
    const r = relById[id];
    if (!r) return null;
    const c = companyById[r.companyId];
    return { id, kind: "Relationship", badge: "R", name: r.name, companyId: c.id, companyName: c.name, relName: r.name, label: `${c.name} › ${r.name}` };
  }

  const contentQuery = () => (state.scope === "content" ? state.query.trim() : "");

  function hl(text, q = contentQuery()) {
    if (!q) return esc(text);
    return String(text).split(new RegExp(`(${reEsc(q)})`, "gi")).map((p, i) => (i % 2 ? `<mark>${esc(p)}</mark>` : esc(p))).join("");
  }

  function highlightDom(root, q) {
    if (!root || !q) return;
    const test = new RegExp(reEsc(q), "i");
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      if (!test.test(n.nodeValue)) return;
      const tmp = document.createElement("span");
      tmp.innerHTML = hl(n.nodeValue, q);
      n.replaceWith(...tmp.childNodes);
    });
  }

  function excerpt(text, q) {
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 70) return text;
    return "…" + text.slice(Math.max(0, i - 40));
  }

  function renderMentionsInText(text) {
    let out = esc(text);
    [...PEOPLE].sort((a, b) => b.name.length - a.name.length).forEach((p) => {
      out = out.split(`@${esc(p.name)}`).join(`<span class="mention">@${esc(p.name)}</span>`);
    });
    return out;
  }

  function typeMeta(a) {
    switch (a.type) {
      case "Call": return [a.duration && `${a.duration} min`, a.outcome].filter(Boolean).join(" · ");
      case "Meeting": {
        const n = (a.internal?.length || 0) + (a.external?.length || 0);
        return [a.duration && `${a.duration} min`, n && `${n} attendees`].filter(Boolean).join(" · ");
      }
      case "Email": return a.to?.length ? `To ${personById[a.to[0]].name}${a.to.length > 1 ? ` +${a.to.length - 1}` : ""}` : "";
      case "Milestone": return a.milestoneType || "";
      default: return "";
    }
  }

  /* ───────── Toast ───────── */
  function toast(msg, opts = {}) {
    const el = $("#toast");
    el.innerHTML = `<span>${esc(msg)}</span>${opts.action ? `<button type="button" class="toast__action">${esc(opts.action)}</button>` : ""}`;
    el.hidden = false;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    if (opts.action) {
      el.querySelector(".toast__action").addEventListener("click", () => { opts.onAction(); el.hidden = true; });
    }
    clearTimeout(toast.t);
    toast.t = setTimeout(() => { el.hidden = true; }, opts.action ? 5000 : 2400);
  }

  /* ───────── Sheet (bottom sheet on mobile, popover on desktop) ───────── */
  let sheetOpen = false;

  function openSheet({ title = "", body = "", footer = "", anchor = null, width = 320, dialog = false, onMount }) {
    closeSheet();
    const desktop = isDesktop();
    const mode = dialog ? "sheet--dialog" : desktop && anchor ? "sheet--popover" : "";
    const showHeader = title && (!desktop || dialog || !anchor);
    const root = $("#sheet-root");
    root.innerHTML = `
      <div class="sheet ${mode}">
        <div class="sheet__backdrop" data-sheet-close></div>
        <div class="sheet__panel" role="dialog" aria-modal="true" aria-label="${esc(title)}">
          ${!desktop && !dialog ? '<div class="sheet__grabber"></div>' : ""}
          ${showHeader ? `<div class="sheet__header"><h2>${esc(title)}</h2><button type="button" class="icon-btn" data-sheet-close aria-label="Close">${svg("x", 18)}</button></div>` : ""}
          <div class="sheet__body">${body}</div>
          ${footer ? `<div class="sheet__footer">${footer}</div>` : ""}
        </div>
      </div>`;
    const panel = $(".sheet__panel", root);
    if (mode === "sheet--popover") {
      const r = anchor.getBoundingClientRect();
      const w = Math.min(width, window.innerWidth - 24);
      panel.style.width = `${w}px`;
      panel.style.left = `${Math.max(12, Math.min(r.left, window.innerWidth - w - 12))}px`;
      panel.style.top = `${r.bottom + 6}px`;
      panel.style.maxHeight = `${Math.max(240, window.innerHeight - r.bottom - 24)}px`;
    }
    $$("[data-sheet-close]", root).forEach((el) => el.addEventListener("click", closeSheet));
    sheetOpen = true;
    onMount && onMount(panel);
    const first = panel.querySelector("input:not([type=date])");
    if (first && desktop) first.focus();
  }

  function closeSheet() {
    $("#sheet-root").innerHTML = "";
    sheetOpen = false;
  }

  function checkbox(checked, ind = false) {
    return `<span class="checkbox ${checked ? "is-checked" : ""} ${ind && !checked ? "is-ind" : ""}">${checked ? svg("check", 13) : ind ? '<span class="checkbox__dash"></span>' : ""}</span>`;
  }

  /* ───────── Panel (full screen on mobile, drawer on desktop) ───────── */
  let panelRequestClose = null;

  function openPanel(html, { variant, onMount, onRequestClose }) {
    const root = $("#panel-root");
    root.innerHTML = `<div class="panel panel--${variant}"><div class="panel__backdrop" data-panel-close></div><div class="panel__sheet" role="dialog" aria-modal="true">${html}</div></div>`;
    document.body.classList.add("no-scroll");
    panelRequestClose = onRequestClose || closePanel;
    $$("[data-panel-close]", root).forEach((el) => el.addEventListener("click", () => panelRequestClose()));
    onMount && onMount($(".panel__sheet", root));
  }

  function closePanel() {
    $("#panel-root").innerHTML = "";
    document.body.classList.remove("no-scroll");
    panelRequestClose = null;
  }

  /* ───────── Filtering ───────── */
  function dateRange() {
    const p = state.date.preset;
    if (p === "anytime") return null;
    const sod = (t) => { const x = new Date(t); x.setHours(0, 0, 0, 0); return x.getTime(); };
    const today = sod(Date.now());
    const end = today + DAY - 1;
    switch (p) {
      case "today": return [today, end];
      case "yesterday": return [today - DAY, today - 1];
      case "thisweek": return [today - new Date(today).getDay() * DAY, end];
      case "last7": return [today - 6 * DAY, end];
      case "last30": return [today - 29 * DAY, end];
      case "custom": {
        const s = state.date.start ? sod(`${state.date.start}T00:00`) : -Infinity;
        const e = state.date.end ? sod(`${state.date.end}T00:00`) + DAY - 1 : Infinity;
        return [s, e];
      }
      default: return null;
    }
  }

  function involvedIds(a) {
    return [a.authorId, ...(a.internal || []), ...(a.external || []), ...(a.to || []), ...(a.cc || [])];
  }

  function matches(a) {
    if (!state.types.has(a.type)) return false;
    const r = dateRange();
    if (r && (a.date < r[0] || a.date > r[1])) return false;
    const q = contentQuery().toLowerCase();
    if (q && !`${a.subject} ${stripHtml(a.notes)}`.toLowerCase().includes(q)) return false;
    if (state.token?.kind === "entity") {
      const t = state.token.id;
      const e = entityInfo(a.entityId);
      if (companyById[t] ? e.companyId !== t : a.entityId !== t) return false;
    }
    if (state.token?.kind === "person") {
      const id = state.token.id;
      const inNotes = (a.notes || "").includes(`data-person="${id}"`);
      const inComments = a.comments.some((c) => c.authorId === id || c.text.includes(`@${personById[id].name}`));
      if (!involvedIds(a).includes(id) && !inNotes && !inComments) return false;
    }
    return true;
  }

  /* ───────── Header + chips ───────── */
  function renderHeader() {
    $("#view-label").textContent = VIEWS.find((v) => v.id === state.viewId).name;
    const n = DRAFTS.length;
    $("#drafts-count").textContent = String(n);
    $("#drafts-count").hidden = n === 0;
  }

  function typesLabel() {
    const n = state.types.size;
    if (n === TYPE_KEYS.length) return "All";
    if (n <= 2) return [...state.types].map((t) => TYPES[t].label).join(", ");
    return `${n} types`;
  }

  function dateLabel() {
    const { preset, start, end } = state.date;
    if (preset === "custom") {
      const f = (s) => (s ? fmtDate(new Date(`${s}T00:00`).getTime()) : "…");
      return `${f(start)} – ${f(end)}`;
    }
    return preset === "anytime" ? "Anytime" : DATE_PRESETS.find((p) => p.id === preset).label;
  }

  function renderChips() {
    const typeActive = state.types.size !== TYPE_KEYS.length;
    const dateActive = state.date.preset !== "anytime";
    $("#chips").innerHTML = `
      <button type="button" class="chip ${typeActive ? "is-active" : ""}" data-chip="type" aria-haspopup="dialog">
        ${svg("layers", 14)}<span>Type</span><strong>${esc(typesLabel())}</strong>${svg("chevronDown", 14)}
      </button>
      <button type="button" class="chip ${dateActive ? "is-active" : ""}" data-chip="date" aria-haspopup="dialog">
        ${svg("calendar", 14)}<span>Date</span><strong>${esc(dateLabel())}</strong>${svg("chevronDown", 14)}
      </button>
      ${typeActive || dateActive ? '<button type="button" class="chip chip--clear" data-chip="clear">Clear</button>' : ""}`;
  }

  /* ───────── Feed ───────── */
  function cardHtml(a) {
    const e = entityInfo(a.entityId);
    const author = personById[a.authorId];
    const q = contentQuery();
    const meta = typeMeta(a);
    const snippet = excerpt(stripHtml(a.notes), q);
    return `
      <article class="item ${a.id === state.lastLoggedId ? "is-new" : ""}" data-id="${a.id}" tabindex="0" aria-label="${esc(TYPES[a.type].label)}: ${esc(a.subject)}">
        ${typeIcon(a.type)}
        <div class="item__main">
          <div class="item__top">
            <div class="item__crumbs">
              <span class="ent-badge">${e.badge}</span>
              <button type="button" class="item__entity" data-entity-link="${e.companyId}">${esc(e.companyName)}</button>
              ${e.relName ? `<span class="item__sep">›</span><button type="button" class="item__rel" data-entity-link="${e.id}">${esc(e.relName)}</button>` : ""}
            </div>
            <time class="item__time" datetime="${new Date(a.date).toISOString()}">${esc(shortStamp(a.date))}</time>
          </div>
          <h3 class="item__subject">${hl(a.subject)}</h3>
          ${snippet ? `<p class="item__snippet">${hl(snippet)}</p>` : ""}
          <div class="item__foot">
            <span class="item__author">${avatar(author, 20)}<span>${esc(author.name)}</span></span>
            <span aria-hidden="true">·</span>
            <span class="item__meta">${esc(TYPES[a.type].label)}${meta ? ` · ${esc(meta)}` : ""}</span>
            <button type="button" class="item__comments" data-open-comments="${a.id}" aria-label="${a.comments.length} comments">
              ${svg("message", 14)}${a.comments.length ? a.comments.length : ""}
            </button>
          </div>
        </div>
      </article>`;
  }

  function isFeedFiltered() {
    return !!(
      contentQuery() ||
      state.token ||
      state.types.size !== TYPE_KEYS.length ||
      state.date.preset !== "anytime"
    );
  }

  function feedSummary(count) {
    if (!isFeedFiltered()) return "";
    const q = contentQuery();
    if (q) return `${count} result${count === 1 ? "" : "s"} for <b>“${esc(q)}”</b>`;
    if (state.token?.kind === "entity") return `${count} activit${count === 1 ? "y" : "ies"} for <b>${esc(entityInfo(state.token.id).label)}</b>`;
    if (state.token?.kind === "person") return `${count} activit${count === 1 ? "y" : "ies"} involving <b>${esc(personById[state.token.id].name)}</b>`;
    return `${count} activit${count === 1 ? "y" : "ies"}`;
  }

  function renderFeed() {
    const list = ACTIVITIES.filter(matches).sort((a, b) => b.date - a.date);
    const feed = $("#feed");
    if (!list.length) {
      feed.innerHTML = `
        <div class="empty">
          <div class="empty__icon">${svg("search", 22)}</div>
          <h2>No activities found</h2>
          <p>Try a different search, date range, or activity type.</p>
          <button type="button" class="btn btn--outline" data-reset-all>Clear all filters</button>
        </div>`;
      return;
    }
    const summary = feedSummary(list.length);
    feed.innerHTML =
      (summary ? `<div class="feed__summary">${summary}</div>` : "") +
      `<div class="feed__list">${list.map(cardHtml).join("")}</div>`;
    if (state.lastLoggedId) setTimeout(() => { state.lastLoggedId = null; }, 2500);
  }

  function resetFilters() {
    state.viewId = "default";
    state.types = new Set(TYPE_KEYS);
    state.date = { preset: "anytime", start: "", end: "" };
    state.query = "";
    state.token = null;
    $("#search-input").value = "";
    renderAll();
  }

  function renderAll() {
    renderHeader();
    renderSearch();
    renderChips();
    renderFeed();
  }

  /* ───────── Search ───────── */
  const searchInput = $("#search-input");
  let resultItems = [];
  let activeIdx = -1;

  function renderSearch() {
    const s = SCOPES[state.scope];
    $("#scope-label").textContent = s.label;
    searchInput.placeholder = s.placeholder;
    const slot = $("#search-token-slot");
    if (state.token) {
      const t = state.token;
      let lead, label;
      if (t.kind === "entity") {
        const e = entityInfo(t.id);
        lead = `<span class="ent-icon">${svg(e.kind === "Company" ? "building" : "layers", 13)}</span>`;
        label = e.label;
      } else {
        lead = avatar(t.id, 22);
        label = personById[t.id].name;
      }
      slot.innerHTML = `<span class="search-token">${lead}<span class="search-token__label">${esc(label)}</span></span>`;
      searchInput.hidden = true;
    } else {
      slot.innerHTML = "";
      searchInput.hidden = false;
    }
    $("#search-clear").hidden = !(state.query || state.token);
  }

  function resultRow(i, lead, title, sub, tag) {
    return `<button type="button" class="result" role="option" data-result="${i}">${lead}<span class="result__text"><span class="result__title">${title}</span><span class="result__sub">${sub}</span></span>${tag ? `<span class="result__tag">${tag}</span>` : ""}</button>`;
  }

  function renderResults() {
    const box = $("#search-results");
    if (state.scope === "content" || state.token || document.activeElement !== searchInput) {
      box.hidden = true;
      return;
    }
    const q = state.query.trim().toLowerCase();
    const items = [];
    let html = "";

    if (state.scope === "entity") {
      const cos = COMPANIES.filter((c) => !q || c.name.toLowerCase().includes(q)).slice(0, q ? 8 : 4);
      const rels = RELATIONSHIPS.filter((r) => !q || `${r.name} ${companyById[r.companyId].name}`.toLowerCase().includes(q)).slice(0, q ? 8 : 3);
      if (cos.length) {
        html += `<div class="results__group">${q ? "Companies" : "Suggested companies"}</div>`;
        cos.forEach((c) => {
          items.push({ kind: "entity", id: c.id });
          html += resultRow(items.length - 1, `<span class="ent-icon">${svg("building", 16)}</span>`, hl(c.name, q), `CSM · ${esc(personById[c.csm].name)}`, "Company");
        });
      }
      if (rels.length) {
        html += `<div class="results__group">Relationships</div>`;
        rels.forEach((r) => {
          items.push({ kind: "entity", id: r.id });
          html += resultRow(items.length - 1, `<span class="ent-icon">${svg("layers", 16)}</span>`, hl(r.name, q), esc(companyById[r.companyId].name), "Relationship");
        });
      }
    } else {
      const match = (p) => !q || `${p.name} ${p.email} ${p.companyId ? companyById[p.companyId].name : ""}`.toLowerCase().includes(q);
      const persons = PERSONS.filter(match).slice(0, q ? 8 : 4);
      const users = USERS.filter((u) => !u.system).filter(match).slice(0, q ? 6 : 3);
      if (persons.length) {
        html += `<div class="results__group">Persons</div>`;
        persons.forEach((p) => {
          items.push({ kind: "person", id: p.id });
          html += resultRow(items.length - 1, avatar(p, 32), hl(p.name, q), `${esc(p.title)} · ${esc(companyById[p.companyId].name)}`, "Person");
        });
      }
      if (users.length) {
        html += `<div class="results__group">Users</div>`;
        users.forEach((u) => {
          items.push({ kind: "person", id: u.id });
          html += resultRow(items.length - 1, avatar(u, 32), hl(u.name + (u.id === ME ? " (you)" : ""), q), esc(u.email), "User");
        });
      }
    }

    if (!items.length) html = `<div class="results__empty">No matches for “${esc(state.query)}”</div>`;
    else if (isDesktop()) html += `<div class="results__hint"><kbd>↑</kbd><kbd>↓</kbd> navigate <kbd>↵</kbd> select <kbd>esc</kbd> close</div>`;

    resultItems = items;
    activeIdx = items.length ? 0 : -1;
    box.innerHTML = html;
    box.hidden = false;
    paintActive();
  }

  function paintActive() {
    $$("#search-results .result").forEach((el, i) => el.classList.toggle("is-active", i === activeIdx));
    const el = $(`#search-results [data-result="${activeIdx}"]`);
    el && el.scrollIntoView({ block: "nearest" });
  }

  function pickResult(i) {
    const item = resultItems[i];
    if (!item) return;
    state.token = { kind: item.kind, id: item.id };
    state.query = "";
    searchInput.value = "";
    $("#search-results").hidden = true;
    searchInput.blur();
    renderSearch();
    renderFeed();
  }

  function setScope(scope) {
    state.scope = scope;
    state.query = "";
    state.token = null;
    searchInput.value = "";
    renderSearch();
    renderFeed();
  }

  function clearSearch() {
    state.query = "";
    state.token = null;
    searchInput.value = "";
    renderSearch();
    renderFeed();
    searchInput.focus();
  }

  let feedDebounce;
  function bindSearch() {
    searchInput.addEventListener("focus", renderResults);
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value;
      $("#search-clear").hidden = !state.query;
      if (state.scope === "content") {
        clearTimeout(feedDebounce);
        feedDebounce = setTimeout(renderFeed, 120);
      } else {
        renderResults();
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      const open = !$("#search-results").hidden;
      if (e.key === "ArrowDown" && open) { e.preventDefault(); activeIdx = Math.min(resultItems.length - 1, activeIdx + 1); paintActive(); }
      else if (e.key === "ArrowUp" && open) { e.preventDefault(); activeIdx = Math.max(0, activeIdx - 1); paintActive(); }
      else if (e.key === "Enter") {
        e.preventDefault();
        if (open && activeIdx >= 0) pickResult(activeIdx);
        else searchInput.blur();
      } else if (e.key === "Escape") {
        $("#search-results").hidden = true;
        searchInput.blur();
      }
    });
    searchInput.addEventListener("blur", () => setTimeout(() => { $("#search-results").hidden = true; }, 120));
    $("#search-results").addEventListener("mousedown", (e) => {
      const b = e.target.closest("[data-result]");
      if (!b) return;
      e.preventDefault();
      pickResult(+b.dataset.result);
    });
    $("#search-clear").addEventListener("click", clearSearch);
    $("#scope-btn").addEventListener("click", (e) => openScopeSheet(e.currentTarget));
  }

  /* ───────── Pickers ───────── */
  function openScopeSheet(anchor) {
    const body = Object.entries(SCOPES).map(([k, s]) => `
      <button type="button" class="opt ${k === state.scope ? "is-selected" : ""}" data-scope="${k}">
        <span class="opt__icon">${svg(s.icon, 16)}</span>
        <span class="opt__text"><span class="opt__title">${s.label}</span><span class="opt__desc">${s.desc}</span></span>
        ${k === state.scope ? svg("check", 18) : ""}
      </button>`).join("");
    openSheet({
      title: "Search in", anchor, width: 300, body,
      onMount(panel) {
        panel.addEventListener("click", (e) => {
          const b = e.target.closest("[data-scope]");
          if (!b) return;
          setScope(b.dataset.scope);
          closeSheet();
          searchInput.focus();
        });
      },
    });
  }

  function openViewsSheet(anchor) {
    openSheet({
      title: "Views", anchor, width: 300,
      body: `<div class="sheet__search">${svg("search", 16)}<input type="text" placeholder="Search views" data-view-search></div><div data-views></div>`,
      onMount(panel) {
        const paint = (q = "") => {
          let html = "";
          let section = null;
          VIEWS.filter((v) => v.name.toLowerCase().includes(q.toLowerCase())).forEach((v) => {
            if (v.section !== section) {
              section = v.section;
              if (section) html += `<div class="sheet__section">${esc(section)}</div>`;
            }
            const sel = v.id === state.viewId;
            html += `<button type="button" class="opt ${sel ? "is-selected" : ""}" data-view="${v.id}"><span class="opt__title">${esc(v.name)}</span>${sel ? svg("check", 18) : ""}</button>`;
          });
          $("[data-views]", panel).innerHTML = html || `<p class="sheet__text">No views match.</p>`;
        };
        paint();
        $("[data-view-search]", panel).addEventListener("input", (e) => paint(e.target.value));
        panel.addEventListener("click", (e) => {
          const b = e.target.closest("[data-view]");
          if (!b) return;
          applyView(b.dataset.view);
          closeSheet();
        });
      },
    });
  }

  function applyView(id) {
    const v = VIEWS.find((x) => x.id === id);
    state.viewId = id;
    state.types = new Set(v.types || TYPE_KEYS);
    state.date = { preset: v.date || "anytime", start: "", end: "" };
    renderAll();
    toast(`Showing “${v.name}”`);
  }

  function openTypesSheet(anchor) {
    const draft = new Set(state.types);
    const countBy = (t) => ACTIVITIES.filter((a) => a.type === t).length;
    openSheet({
      title: "Activity type", anchor, width: 300,
      body: `
        <div class="sheet__search">${svg("search", 16)}<input type="text" placeholder="Search activity types" data-type-search></div>
        <button type="button" class="opt" data-all></button>
        <div data-type-list></div>`,
      footer: `<button type="button" class="btn btn--ghost" data-reset>Reset</button><span class="spacer"></span><button type="button" class="btn btn--ghost" data-sheet-close>Cancel</button><button type="button" class="btn btn--primary" data-apply>Apply</button>`,
      onMount(panel) {
        let q = "";
        const paint = () => {
          const all = draft.size === TYPE_KEYS.length;
          $("[data-all]", panel).innerHTML = `${checkbox(all, draft.size > 0)}<span class="opt__title"><b>Select all</b></span><span class="opt__meta">${draft.size}/${TYPE_KEYS.length}</span>`;
          $("[data-type-list]", panel).innerHTML = TYPE_KEYS.filter((t) => t.toLowerCase().includes(q)).map((t) => `
            <button type="button" class="opt" data-t="${t}">${checkbox(draft.has(t))}${typeIcon(t, "sm")}<span class="opt__title">${TYPES[t].label}</span><span class="opt__meta">${countBy(t)}</span></button>`).join("");
        };
        paint();
        $("[data-type-search]", panel).addEventListener("input", (e) => { q = e.target.value.toLowerCase(); paint(); });
        panel.addEventListener("click", (e) => {
          const t = e.target.closest("[data-t]");
          if (t) { draft.has(t.dataset.t) ? draft.delete(t.dataset.t) : draft.add(t.dataset.t); paint(); return; }
          if (e.target.closest("[data-all]")) {
            if (draft.size === TYPE_KEYS.length) draft.clear(); else TYPE_KEYS.forEach((k) => draft.add(k));
            paint();
            return;
          }
          if (e.target.closest("[data-reset]")) { TYPE_KEYS.forEach((k) => draft.add(k)); paint(); return; }
          if (e.target.closest("[data-apply]")) {
            if (!draft.size) { toast("Pick at least one activity type"); return; }
            state.types = new Set(draft);
            closeSheet();
            renderChips();
            renderFeed();
          }
        });
      },
    });
  }

  function openDateSheet(anchor) {
    let sel = state.date.preset;
    openSheet({
      title: "Activity date", anchor, width: 320,
      body: `
        <div data-presets></div>
        <div class="date-custom" data-custom ${sel === "custom" ? "" : "hidden"}>
          <label>From<input type="date" class="input" data-start value="${state.date.start}"></label>
          <label>To<input type="date" class="input" data-end value="${state.date.end}"></label>
        </div>`,
      footer: `<span class="spacer"></span><button type="button" class="btn btn--ghost" data-sheet-close>Cancel</button><button type="button" class="btn btn--primary" data-apply>Apply</button>`,
      onMount(panel) {
        const paint = () => {
          $("[data-presets]", panel).innerHTML = DATE_PRESETS.map((p) => `
            <button type="button" class="opt ${p.id === sel ? "is-selected" : ""}" data-preset="${p.id}"><span class="opt__title">${p.label}</span>${p.id === sel ? svg("check", 18) : ""}</button>`).join("");
          $("[data-custom]", panel).hidden = sel !== "custom";
        };
        paint();
        panel.addEventListener("click", (e) => {
          const p = e.target.closest("[data-preset]");
          if (p) { sel = p.dataset.preset; paint(); if (sel === "custom") $("[data-start]", panel).focus(); return; }
          if (e.target.closest("[data-apply]")) {
            state.date = { preset: sel, start: $("[data-start]", panel).value, end: $("[data-end]", panel).value };
            closeSheet();
            renderChips();
            renderFeed();
          }
        });
      },
    });
  }

  /* ───────── Mentions popover (shared by comments + editor) ───────── */
  function renderMentionPop(pop, q, onPick) {
    const ql = q.toLowerCase();
    const list = USERS.filter((u) => !u.system && (!ql || u.name.toLowerCase().includes(ql))).slice(0, 5);
    if (!list.length) { pop.hidden = true; return; }
    pop.innerHTML = `<div class="results__group">Mention a teammate</div>` + list.map((u) => `
      <button type="button" class="result" data-mention="${u.id}">${avatar(u, 28)}<span class="result__text"><span class="result__title">${hl(u.name, q)}</span><span class="result__sub">${esc(u.title)}</span></span></button>`).join("");
    pop.hidden = false;
    pop.onmousedown = (e) => {
      const b = e.target.closest("[data-mention]");
      if (!b) return;
      e.preventDefault();
      onPick(personById[b.dataset.mention]);
    };
  }

  /* ───────── Activity detail ───────── */
  function fact(label, value, wide = false) {
    return `<div class="${wide ? "wide" : ""}"><dt>${esc(label)}</dt><dd>${value}</dd></div>`;
  }
  const peopleChips = (ids) => ids.map((id) => `<span class="person-chip">${avatar(id, 24)}${esc(personById[id].name)}</span>`).join("");

  function factsHtml(a) {
    const rows = [fact("Activity type", esc(TYPES[a.type].label))];
    if (a.duration) rows.push(fact("Duration", `${a.duration} min`));
    if (a.outcome) rows.push(fact("Outcome", esc(a.outcome)));
    if (a.location) rows.push(fact("Location", esc(a.location)));
    if (a.milestoneType) rows.push(fact("Milestone", esc(a.milestoneType)));
    if (a.internal?.length) rows.push(fact("Internal attendees", peopleChips(a.internal), true));
    if (a.external?.length) rows.push(fact("External attendees", peopleChips(a.external), true));
    if (a.to?.length) rows.push(fact("To", peopleChips(a.to), true));
    if (a.cc?.length) rows.push(fact("CC", peopleChips(a.cc), true));
    return `<dl class="facts">${rows.join("")}</dl>`;
  }

  function commentsHtml(a) {
    if (!a.comments.length) return `<p class="comments__empty">No comments yet. Start the conversation.</p>`;
    return a.comments.map((c) => `
      <div class="comment">
        ${avatar(c.authorId, 32)}
        <div class="comment__body">
          <div class="comment__head"><span class="comment__name">${esc(personById[c.authorId].name)}</span><span class="comment__time">${esc(relTime(c.date))}</span></div>
          <div class="comment__text">${renderMentionsInText(c.text)}</div>
        </div>
      </div>`).join("");
  }

  function openDetail(id, { focusComment = false } = {}) {
    const a = ACTIVITIES.find((x) => x.id === id);
    if (!a) return;
    const e = entityInfo(a.entityId);
    const author = personById[a.authorId];
    const tasks = (a.tasks || []).length
      ? `<h3 class="section-title">Tasks</h3>${a.tasks.map((t) => `<div class="task-view ${t.done ? "is-done" : ""}"><span class="task-view__check">${svg(t.done ? "checkCircle" : "circle", 18)}</span><span class="task-view__text"><span class="task-view__title">${esc(t.title)}</span>${t.assigneeId ? `<span class="task-view__assignee">${avatar(t.assigneeId, 20)}${esc(personById[t.assigneeId].name)}</span>` : ""}</span>${t.due ? `<span class="task-view__due">Due ${esc(fmtDate(new Date(`${t.due}T00:00`).getTime()))}</span>` : ""}</div>`).join("")}`
      : "";
    const files = (a.attachments || []).length
      ? `<h3 class="section-title">Attachments <span class="muted">${a.attachments.length}</span></h3><div class="attachments">${a.attachments.map((f) => `<div class="attachment"><span class="attachment__icon">${svg("file", 16)}</span><span class="attachment__text"><span class="attachment__name">${esc(f.name)}</span><span class="attachment__size">${esc(fmtSize(f.size))}</span></span></div>`).join("")}</div>`
      : "";

    openPanel(`
      <div class="panel__header">
        <button type="button" class="icon-btn close-mobile" data-panel-close aria-label="Back">${svg("chevronLeft", 22)}</button>
        <div class="panel__heading">${typeIcon(a.type, "sm")}<span>${esc(TYPES[a.type].label)}</span></div>
        <button type="button" class="icon-btn" data-detail-more aria-label="More actions">${svg("more", 18)}</button>
        <button type="button" class="icon-btn close-desktop" data-panel-close aria-label="Close">${svg("x", 18)}</button>
      </div>
      <div class="panel__body" data-detail-scroll>
        <div class="detail">
          <div class="detail__crumbs">
            <span class="ent-badge">${e.badge}</span>
            <button type="button" data-entity-link="${e.companyId}">${esc(e.companyName)}</button>
            ${e.relName ? `<span class="item__sep">›</span><button type="button" data-entity-link="${e.id}">${esc(e.relName)}</button>` : ""}
          </div>
          <h2 class="detail__subject">${hl(a.subject)}</h2>
          <div class="detail__byline">${avatar(author, 28)}<span><b>${esc(author.name)}</b> · ${esc(fmtFull(a.date))}</span></div>
          ${factsHtml(a)}
          <div class="richtext" data-notes>${a.notes}</div>
          ${files}
          ${tasks}
          <h3 class="section-title">Comments <span class="muted" data-comment-count>${a.comments.length}</span></h3>
          <div class="comments" data-comment-list>${commentsHtml(a)}</div>
        </div>
      </div>
      <form class="comment-composer" data-comment-form autocomplete="off">
        ${avatar(ME, 32)}
        <div class="comment-input">
          <div class="mention-pop" data-mention-pop hidden></div>
          <textarea rows="1" data-comment-input placeholder="Add a comment — type @ to mention" aria-label="Add a comment"></textarea>
        </div>
        <button type="submit" class="icon-btn icon-btn--primary" data-comment-send aria-label="Post comment" disabled>${svg("send", 16)}</button>
      </form>`, {
      variant: "detail",
      onMount(sheet) {
        highlightDom($("[data-notes]", sheet), contentQuery());
        const ta = $("[data-comment-input]", sheet);
        const pop = $("[data-mention-pop]", sheet);
        const send = $("[data-comment-send]", sheet);
        const autosize = () => { ta.style.height = "auto"; ta.style.height = `${Math.min(120, ta.scrollHeight)}px`; };

        ta.addEventListener("input", () => {
          autosize();
          send.disabled = !ta.value.trim();
          const upto = ta.value.slice(0, ta.selectionStart);
          const m = upto.match(/(^|\s)@(\w*)$/);
          if (!m) { pop.hidden = true; return; }
          renderMentionPop(pop, m[2], (p) => {
            const before = upto.slice(0, upto.length - m[2].length - 1);
            const after = ta.value.slice(ta.selectionStart);
            const insert = `@${p.name} `;
            ta.value = before + insert + after;
            const pos = (before + insert).length;
            ta.setSelectionRange(pos, pos);
            pop.hidden = true;
            ta.focus();
            autosize();
            send.disabled = false;
          });
        });
        ta.addEventListener("keydown", (ev) => {
          if (ev.key === "Enter" && !ev.shiftKey && isDesktop()) {
            ev.preventDefault();
            $("[data-comment-form]", sheet).requestSubmit();
          }
          if (ev.key === "Escape" && !pop.hidden) { ev.stopPropagation(); pop.hidden = true; }
        });
        ta.addEventListener("blur", () => setTimeout(() => { pop.hidden = true; }, 120));

        $("[data-comment-form]", sheet).addEventListener("submit", (ev) => {
          ev.preventDefault();
          const text = ta.value.trim();
          if (!text) return;
          a.comments.push({ id: uid("c"), authorId: ME, text, date: Date.now() });
          ta.value = "";
          autosize();
          send.disabled = true;
          $("[data-comment-list]", sheet).innerHTML = commentsHtml(a);
          $("[data-comment-count]", sheet).textContent = a.comments.length;
          const scroller = $("[data-detail-scroll]", sheet);
          scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" });
          renderFeed();
        });

        sheet.addEventListener("click", (ev) => {
          const link = ev.target.closest("[data-entity-link]");
          if (link) { closePanel(); filterByEntity(link.dataset.entityLink); return; }
          if (ev.target.closest("[data-detail-more]")) openDetailMore(a, ev.target.closest("[data-detail-more]"));
        });

        if (focusComment) setTimeout(() => ta.focus(), 260);
      },
    });
  }

  function openDetailMore(a, anchor) {
    openSheet({
      title: "Activity actions", anchor, width: 240,
      body: `
        <button type="button" class="opt" data-act="copy"><span class="opt__icon">${svg("link", 16)}</span><span class="opt__title">Copy link</span></button>
        <button type="button" class="opt opt--danger" data-act="delete"><span class="opt__icon">${svg("trash", 16)}</span><span class="opt__title">Delete activity</span></button>`,
      onMount(panel) {
        panel.addEventListener("click", (e) => {
          const b = e.target.closest("[data-act]");
          if (!b) return;
          closeSheet();
          if (b.dataset.act === "copy") { toast("Link copied"); return; }
          const idx = ACTIVITIES.indexOf(a);
          ACTIVITIES.splice(idx, 1);
          closePanel();
          renderFeed();
          toast("Activity deleted", { action: "Undo", onAction: () => { ACTIVITIES.splice(idx, 0, a); renderFeed(); } });
        });
      },
    });
  }

  function filterByEntity(id) {
    state.scope = "entity";
    state.query = "";
    state.token = { kind: "entity", id };
    searchInput.value = "";
    renderSearch();
    renderFeed();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ───────── Composer ───────── */
  let comp = null;
  let compSnapshot = "";
  let compRoot = null;

  function newComp() {
    const now = Date.now();
    return {
      draftId: null,
      type: "",
      entityId: state.token?.kind === "entity" ? state.token.id : null,
      subject: "",
      date: toDateInput(now),
      time: toTimeInput(now),
      notes: "",
      duration: "",
      outcome: "",
      location: "",
      milestoneType: "",
      internal: [],
      external: [],
      to: [],
      cc: [],
      tasks: [],
      attachments: [],
    };
  }

  function normalizeDraft(d) {
    const base = newComp();
    const t = d.updatedAt || Date.now();
    const out = { ...base, date: toDateInput(t), time: toTimeInput(t), ...clone(d) };
    out.tasks = (out.tasks || []).map((task) => ({ assigneeId: ME, ...task }));
    out.attachments = out.attachments || [];
    return out;
  }

  const notesFilled = () => !!(stripHtml(comp.notes) || /class="mention"/.test(comp.notes || ""));
  const isDirty = () => !!(comp.entityId || comp.subject.trim() || notesFilled() || comp.tasks.some((t) => t.title.trim()) || comp.attachments.length);

  function contextPersons() {
    const e = entityInfo(comp.entityId);
    if (!e) return [];
    const companyPersons = PERSONS.filter((p) => p.companyId === e.companyId && !p.relationshipId);
    if (e.kind === "Company") return companyPersons.map((p) => ({ p, group: "Company persons" }));
    const relPersons = PERSONS.filter((p) => p.relationshipId === e.id);
    return [
      ...relPersons.map((p) => ({ p, group: "Relationship persons" })),
      ...companyPersons.map((p) => ({ p, group: "Company persons" })),
    ];
  }

  function pruneExternal() {
    const allowed = new Set(contextPersons().map((x) => x.p.id));
    comp.external = comp.external.filter((id) => allowed.has(id));
    comp.to = comp.to.filter((id) => allowed.has(id));
  }

  function tokenLead(name, id) {
    if (name === "entity") {
      const e = entityInfo(id);
      return `<span class="ent-icon">${svg(e.kind === "Company" ? "building" : "layers", 13)}</span>`;
    }
    return avatar(id, 22);
  }
  const tokenLabel = (name, id) => (name === "entity" ? entityInfo(id).label : personById[id].name);

  const TOKEN_FIELDS = {
    entity: { label: "Company / Relationship", required: true, multi: false, placeholder: "Search companies and relationships", error: "Choose a company or relationship" },
    internal: { label: "Internal attendees", multi: true, placeholder: "Add users" },
    external: { label: "External attendees", multi: true, placeholder: "Add company or relationship persons", needsEntity: true },
    to: { label: "To", multi: true, placeholder: "Add company or relationship persons", needsEntity: true },
    cc: { label: "CC", multi: true, placeholder: "Add users" },
  };

  function tokenFieldHtml(name) {
    const def = TOKEN_FIELDS[name];
    const values = name === "entity" ? (comp.entityId ? [comp.entityId] : []) : comp[name];
    const filled = !def.multi && values.length > 0;
    const locked = def.needsEntity && !comp.entityId;
    const placeholder = locked ? "Select a company or relationship first" : def.placeholder;
    const tokens = values.map((id) => `
      <span class="token">${tokenLead(name, id)}<span class="token__label">${esc(tokenLabel(name, id))}</span>
        <button type="button" class="token__x" data-token-remove="${name}" data-id="${id}" aria-label="Remove ${esc(tokenLabel(name, id))}">${svg("x", 12)}</button>
      </span>`).join("");
    return `
      <div class="field" data-field="${name}">
        <label class="field__label" for="tf-${name}">${esc(def.label)}${def.required ? '<span class="req">*</span>' : ""}</label>
        <div class="token-input ${locked ? "is-disabled" : ""}" data-token-box="${name}">
          ${tokens}
          <input id="tf-${name}" class="token-input__input" data-token-input="${name}" autocomplete="off"
                 placeholder="${values.length && def.multi ? "" : esc(placeholder)}" ${filled ? "hidden" : ""} ${locked ? "disabled" : ""}>
          ${!def.multi && !filled ? `<span class="token-input__icon">${svg("search", 16)}</span>` : ""}
        </div>
        <div class="token-pop" data-token-pop="${name}" hidden></div>
        ${def.error ? `<div class="field__error">${esc(def.error)}</div>` : ""}
      </div>`;
  }

  function selectHtml({ name, label, options, value, placeholder, required = false, disabled = false, hint = "", error = "" }) {
    return `
      <div class="field" data-field="${name}">
        <label class="field__label" for="f-${name}">${esc(label)}${required ? '<span class="req">*</span>' : ""}</label>
        <div class="select">
          <select class="input select__input ${value ? "" : "is-empty"}" id="f-${name}" data-select="${name}" ${disabled ? "disabled" : ""}>
            <option value="" ${value ? "" : "selected"} ${required ? "disabled" : ""}>${esc(placeholder)}</option>
            ${options.map((o) => `<option value="${esc(o.value)}" ${o.value === value ? "selected" : ""}>${esc(o.label)}</option>`).join("")}
          </select>
          <span class="select__chev">${svg("chevronDown", 16)}</span>
        </div>
        ${hint ? `<div class="field__hint">${esc(hint)}</div>` : ""}
        ${error ? `<div class="field__error">${esc(error)}</div>` : ""}
      </div>`;
  }

  function fieldHtml(name) {
    if (TOKEN_FIELDS[name]) return tokenFieldHtml(name);
    switch (name) {
      case "type": {
        const allowed = allowedTypes(comp.entityId);
        const rel = relById[comp.entityId];
        return selectHtml({
          name: "type",
          label: "Activity type",
          required: true,
          disabled: !comp.entityId,
          value: comp.type,
          placeholder: comp.entityId ? "Select activity type" : "Select a company or relationship first",
          options: allowed.map((t) => ({ value: t, label: TYPES[t].label })),
          hint: rel ? `Types available for ${rel.relType} relationships` : "",
          error: "Choose an activity type",
        });
      }
      case "subject":
        return `
          <div class="field" data-field="subject">
            <label class="field__label" for="f-subject">Subject<span class="req">*</span></label>
            <input class="input" id="f-subject" data-bind="subject" value="${esc(comp.subject)}" placeholder="Enter text" autocomplete="off">
            <div class="field__error">Add a subject</div>
          </div>`;
      case "datetime":
        return `
          <div class="field" data-field="datetime">
            <label class="field__label">Activity date<span class="req">*</span></label>
            <div class="row-2">
              <input type="date" class="input" data-bind="date" value="${comp.date}" aria-label="Date">
              <input type="time" class="input" data-bind="time" value="${comp.time}" aria-label="Time">
            </div>
          </div>`;
      case "duration":
        return `
          <div class="field" data-field="duration">
            <label class="field__label" for="f-duration">Duration (in mins)</label>
            <input type="number" inputmode="numeric" min="0" step="1" class="input" id="f-duration" data-bind="duration" value="${esc(comp.duration)}" placeholder="Enter duration">
          </div>`;
      case "outcome":
        return selectHtml({
          name: "outcome",
          label: "Call outcome",
          value: comp.outcome,
          placeholder: "Select outcome",
          options: OUTCOMES.map((o) => ({ value: o, label: o })),
        });
      case "location":
        return `
          <div class="field" data-field="location">
            <label class="field__label" for="f-location">Location</label>
            <input class="input" id="f-location" data-bind="location" value="${esc(comp.location)}" placeholder="Enter text" autocomplete="off">
          </div>`;
      case "milestoneType":
        return selectHtml({
          name: "milestoneType",
          label: "Milestone type",
          value: comp.milestoneType,
          placeholder: "Select milestone",
          options: MILESTONES.map((m) => ({ value: m, label: m })),
        });
      default:
        return "";
    }
  }

  function detailsHtml() {
    const cfg = typeCfg(comp.type);
    if (!cfg.details.length) return "";
    return `<h3 class="block__title">${cfg.label} details</h3>${cfg.details.map(fieldHtml).join("")}`;
  }

  const ASSIGNABLE = () => USERS.filter((u) => !u.system);

  function tasksHtml() {
    return comp.tasks.map((t) => `
      <div class="task" data-task="${t.id}">
        <div class="task__row">
          <button type="button" class="task__check ${t.done ? "is-done" : ""}" data-task-toggle aria-label="Mark done">${svg(t.done ? "checkCircle" : "circle", 18)}</button>
          <input class="task__title" data-task-title value="${esc(t.title)}" placeholder="Task name" autocomplete="off">
          <button type="button" class="icon-btn icon-btn--sm" data-task-remove aria-label="Remove task">${svg("x", 14)}</button>
        </div>
        <div class="task__meta">
          <label class="task__assignee">
            ${avatar(t.assigneeId || ME, 22)}
            <select data-task-assignee aria-label="Assign to">
              ${ASSIGNABLE().map((u) => `<option value="${u.id}" ${u.id === (t.assigneeId || ME) ? "selected" : ""}>${esc(u.name)}${u.id === ME ? " (you)" : ""}</option>`).join("")}
            </select>
            ${svg("chevronDown", 14)}
          </label>
          <input type="date" class="task__due" data-task-due value="${t.due}" aria-label="Due date">
        </div>
      </div>`).join("");
  }

  const fmtSize = (b) => (b >= 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

  function attachmentsHtml() {
    return comp.attachments.map((f) => `
      <div class="attachment" data-attachment="${f.id}">
        <span class="attachment__icon">${svg("file", 16)}</span>
        <span class="attachment__text"><span class="attachment__name">${esc(f.name)}</span><span class="attachment__size">${esc(fmtSize(f.size))}</span></span>
        <button type="button" class="icon-btn icon-btn--sm" data-attachment-remove aria-label="Remove ${esc(f.name)}">${svg("x", 14)}</button>
      </div>`).join("");
  }

  function templateState() {
    if (!comp.type) return { disabled: true, title: "Select an activity type to use its template" };
    if (notesFilled()) return { disabled: true, title: "Templates can only be applied to empty notes" };
    return { disabled: false, title: `Apply the ${typeCfg(comp.type).label} template` };
  }

  function syncTemplateBtn() {
    const btn = $("[data-apply-template]", compRoot);
    if (!btn) return;
    const s = templateState();
    btn.disabled = s.disabled;
    btn.title = s.title;
  }

  function composerHtml() {
    const cfg = typeCfg(comp.type);
    const tpl = templateState();
    const toolbar = [["bold", "bold"], ["italic", "italic"], ["underline", "underline"], ["insertUnorderedList", "list"], ["insertOrderedList", "listOrdered"], ["mention", "at"]]
      .map(([cmd, icon]) => `<button type="button" data-cmd="${cmd}" aria-label="${cmd}">${svg(icon, 16)}</button>`).join("")
      + `<button type="button" data-attach aria-label="Attach file">${svg("paperclip", 16)}</button>`;
    return `
      <div class="panel__header">
        <button type="button" class="icon-btn" data-composer-close aria-label="Close">${svg("x", 20)}</button>
        <div class="panel__heading"><span>${comp.draftId ? "Edit draft" : "New activity"}</span></div>
        <span class="save-state" data-save-state>${comp.draftId ? "Draft" : ""}</span>
      </div>
      <div class="panel__body">
        <div class="composer__grid">
          <div class="col col--left">
            <section class="block block--notes">
              <div class="field" data-field="notes">
                <div class="field__label-row">
                  <label class="field__label" data-notes-label>${esc(cfg.notes)}<span class="req">*</span></label>
                  <button type="button" class="link-btn" data-apply-template ${tpl.disabled ? "disabled" : ""} title="${esc(tpl.title)}">Apply template</button>
                </div>
                <div class="editor">
                  <div class="editor__area" data-editor contenteditable="true" role="textbox" aria-multiline="true" data-placeholder="${esc(cfg.placeholder)}">${comp.notes}</div>
                  <div class="mention-pop" data-editor-mention hidden></div>
                  <div class="editor__toolbar">${toolbar}</div>
                </div>
                <div class="field__error">Add some notes</div>
              </div>
            </section>
            <section class="block block--attachments">
              <div class="block__title-row">
                <h3 class="block__title">Attachments</h3>
                <button type="button" class="btn btn--outline btn--sm" data-attach>${svg("paperclip", 14)} Add attachment</button>
              </div>
              <input type="file" multiple hidden data-file-input>
              <div class="attachments" data-attachments>${attachmentsHtml()}</div>
            </section>
            <section class="block block--tasks">
              <h3 class="block__title">Tasks</h3>
              <div id="task-list">${tasksHtml()}</div>
              <button type="button" class="btn btn--outline btn--sm" data-add-task>${svg("plus", 14)} Add task</button>
            </section>
          </div>
          <div class="col col--right">
            <section class="block block--core">
              ${fieldHtml("entity")}
              ${fieldHtml("type")}
              ${fieldHtml("subject")}
              ${fieldHtml("datetime")}
            </section>
            <section class="block block--details ${cfg.details.length ? "" : "is-empty"}" data-details>${detailsHtml()}</section>
          </div>
        </div>
      </div>
      <div class="panel__footer">
        <button type="button" class="btn btn--text-danger" data-composer-discard>Discard</button>
        <span class="spacer"></span>
        <button type="button" class="btn btn--ghost" data-composer-save>Save draft</button>
        <button type="button" class="btn btn--primary" data-composer-log>Log activity</button>
      </div>`;
  }

  function openComposer(draft = null) {
    comp = draft ? normalizeDraft(draft) : newComp();
    compSnapshot = JSON.stringify(comp);
    openPanel(composerHtml(), { variant: "composer", onMount: mountComposer, onRequestClose: requestCloseComposer });
  }

  function rerenderField(name) {
    const el = $(`[data-field="${name}"]`, compRoot);
    if (el) el.outerHTML = fieldHtml(name);
  }

  function renderDetailsBlock() {
    const cfg = typeCfg(comp.type);
    const details = $("[data-details]", compRoot);
    details.innerHTML = detailsHtml();
    details.classList.toggle("is-empty", !cfg.details.length);
  }

  function setType(t) {
    if (t === comp.type) return;
    comp.type = t;
    if ((t === "Call" || t === "Meeting") && !comp.internal.length) comp.internal = [ME];
    const cfg = typeCfg(t);
    $("[data-notes-label]", compRoot).innerHTML = `${esc(cfg.notes)}<span class="req">*</span>`;
    $("[data-editor]", compRoot).dataset.placeholder = cfg.placeholder;
    $('[data-field="type"]', compRoot)?.classList.remove("has-error");
    renderDetailsBlock();
    syncTemplateBtn();
  }

  function onEntityChanged() {
    if (comp.type && !allowedTypes(comp.entityId).includes(comp.type)) {
      const prev = typeCfg(comp.type).label;
      setType("");
      if (comp.entityId) toast(`${prev} isn’t available here — pick another activity type`);
    }
    pruneExternal();
    rerenderField("type");
    renderDetailsBlock();
    syncTemplateBtn();
  }

  function tokenOptions(name, q) {
    q = q.trim().toLowerCase();
    if (name === "entity") {
      return [
        ...COMPANIES.map((c) => ({ id: c.id, group: "Companies", title: c.name, sub: `CSM · ${personById[c.csm].name}`, lead: `<span class="ent-icon">${svg("building", 16)}</span>` })),
        ...RELATIONSHIPS.map((r) => ({ id: r.id, group: "Relationships", title: r.name, sub: companyById[r.companyId].name, lead: `<span class="ent-icon">${svg("layers", 16)}</span>` })),
      ].filter((o) => !q || `${o.title} ${o.sub}`.toLowerCase().includes(q));
    }
    const selected = comp[name];
    if (name === "internal" || name === "cc") {
      return ASSIGNABLE().filter((u) => !selected.includes(u.id))
        .filter((u) => !q || `${u.name} ${u.email}`.toLowerCase().includes(q))
        .map((u) => ({ id: u.id, group: null, title: u.name + (u.id === ME ? " (you)" : ""), sub: u.email, lead: avatar(u, 28) }));
    }
    return contextPersons()
      .filter(({ p }) => !selected.includes(p.id))
      .filter(({ p }) => !q || `${p.name} ${p.email}`.toLowerCase().includes(q))
      .map(({ p, group }) => ({ id: p.id, group, title: p.name, sub: `${p.title} · ${p.email}`, lead: avatar(p, 28) }));
  }

  function renderTokenPop(name, q) {
    $$("[data-token-pop]", compRoot).forEach((p) => { if (p.dataset.tokenPop !== name) p.hidden = true; });
    const pop = $(`[data-token-pop="${name}"]`, compRoot);
    if (!pop) return;
    const opts = tokenOptions(name, q).slice(0, 12);
    let html = "";
    let group;
    opts.forEach((o, i) => {
      if (o.group && o.group !== group) { group = o.group; html += `<div class="results__group">${esc(group)}</div>`; }
      html += `<button type="button" class="result ${i === 0 ? "is-active" : ""}" data-token-option="${name}" data-id="${o.id}">${o.lead}<span class="result__text"><span class="result__title">${hl(o.title, q.trim())}</span><span class="result__sub">${esc(o.sub)}</span></span></button>`;
    });
    pop.innerHTML = html || `<div class="results__empty">No matches</div>`;
    pop.hidden = false;
    pop.dataset.active = "0";
  }

  function addToken(name, id) {
    const def = TOKEN_FIELDS[name];
    if (name === "entity") {
      comp.entityId = id;
      rerenderField("entity");
      onEntityChanged();
      setTimeout(() => $("#f-type", compRoot)?.focus(), 0);
      return;
    }
    if (!comp[name].includes(id)) comp[name].push(id);
    rerenderField(name);
    if (def.multi) $(`[data-token-input="${name}"]`, compRoot)?.focus();
  }

  function removeToken(name, id) {
    if (name === "entity") {
      comp.entityId = null;
      rerenderField("entity");
      onEntityChanged();
    } else {
      comp[name] = comp[name].filter((x) => x !== id);
      rerenderField(name);
    }
    $(`[data-token-input="${name}"]`, compRoot)?.focus();
  }

  function checkEditorMention(editor, pop) {
    const sel = window.getSelection();
    if (!sel.rangeCount) { pop.hidden = true; return; }
    const node = sel.anchorNode;
    if (!node || node.nodeType !== 3 || !editor.contains(node)) { pop.hidden = true; return; }
    const offset = sel.anchorOffset;
    const upto = node.nodeValue.slice(0, offset);
    const m = upto.match(/(^|\s)@(\w*)$/);
    if (!m) { pop.hidden = true; return; }
    renderMentionPop(pop, m[2], (p) => {
      const range = document.createRange();
      range.setStart(node, offset - m[2].length - 1);
      range.setEnd(node, offset);
      range.deleteContents();
      const tmp = document.createElement("span");
      tmp.innerHTML = mention(p.id);
      const span = tmp.firstChild;
      range.insertNode(span);
      const space = document.createTextNode("\u00a0");
      span.after(space);
      const caret = document.createRange();
      caret.setStartAfter(space);
      caret.collapse(true);
      sel.removeAllRanges();
      sel.addRange(caret);
      pop.hidden = true;
      comp.notes = editor.innerHTML;
      syncTemplateBtn();
      editor.focus();
    });
  }

  function mountComposer(sheet) {
    compRoot = sheet;
    const editor = $("[data-editor]", sheet);
    const editorPop = $("[data-editor-mention]", sheet);
    const fileInput = $("[data-file-input]", sheet);

    fileInput.addEventListener("change", () => {
      const files = Array.from(fileInput.files || []);
      files.forEach((f) => comp.attachments.push({ id: uid("f"), name: f.name, size: f.size }));
      fileInput.value = "";
      $("[data-attachments]", sheet).innerHTML = attachmentsHtml();
      if (files.length) toast(`${files.length} file${files.length > 1 ? "s" : ""} attached`);
    });

    sheet.addEventListener("change", (e) => {
      const t = e.target;
      if (t.dataset.select) t.classList.toggle("is-empty", !t.value);
      if (t.dataset.select === "type") { setType(t.value); return; }
      if (t.dataset.select) { comp[t.dataset.select] = t.value; return; }
      if (t.matches("[data-task-assignee]")) {
        const task = comp.tasks.find((x) => x.id === t.closest("[data-task]").dataset.task);
        task.assigneeId = t.value;
        $("#task-list", sheet).innerHTML = tasksHtml();
      }
    });

    sheet.addEventListener("input", (e) => {
      const t = e.target;
      if (t.dataset.bind) {
        comp[t.dataset.bind] = t.value;
        t.closest(".field")?.classList.remove("has-error");
      } else if (t.dataset.tokenInput) {
        renderTokenPop(t.dataset.tokenInput, t.value);
      } else if (t === editor) {
        if (!stripHtml(editor.innerHTML) && !editor.querySelector(".mention, li")) editor.innerHTML = "";
        comp.notes = editor.innerHTML;
        editor.closest(".field").classList.remove("has-error");
        syncTemplateBtn();
        checkEditorMention(editor, editorPop);
      } else if (t.matches("[data-task-title], [data-task-due]")) {
        const task = comp.tasks.find((x) => x.id === t.closest("[data-task]").dataset.task);
        if (t.matches("[data-task-title]")) task.title = t.value; else task.due = t.value;
      }
    });

    sheet.addEventListener("focusin", (e) => {
      const t = e.target;
      if (t.dataset?.tokenInput) renderTokenPop(t.dataset.tokenInput, t.value);
    });

    sheet.addEventListener("focusout", (e) => {
      const t = e.target;
      if (t.dataset?.tokenInput) {
        const field = t.closest(".field");
        setTimeout(() => {
          if (!field.isConnected || field.contains(document.activeElement)) return;
          const pop = $("[data-token-pop]", field);
          if (pop) pop.hidden = true;
        }, 120);
      }
      if (t === editor) setTimeout(() => { editorPop.hidden = true; }, 150);
    });

    sheet.addEventListener("keydown", (e) => {
      const t = e.target;
      if (!t.dataset?.tokenInput) return;
      const name = t.dataset.tokenInput;
      const pop = $(`[data-token-pop="${name}"]`, sheet);
      const opts = $$("[data-token-option]", pop);
      let i = +(pop.dataset.active || 0);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        i = e.key === "ArrowDown" ? Math.min(opts.length - 1, i + 1) : Math.max(0, i - 1);
        pop.dataset.active = String(i);
        opts.forEach((o, j) => o.classList.toggle("is-active", j === i));
        opts[i]?.scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (!pop.hidden && opts[i]) addToken(name, opts[i].dataset.id);
      } else if (e.key === "Backspace" && !t.value) {
        const vals = name === "entity" ? [] : comp[name];
        if (vals.length) removeToken(name, vals[vals.length - 1]);
      } else if (e.key === "Escape" && !pop.hidden) {
        e.stopPropagation();
        pop.hidden = true;
      }
    });

    sheet.addEventListener("mousedown", (e) => {
      const opt = e.target.closest("[data-token-option]");
      if (opt) { e.preventDefault(); addToken(opt.dataset.tokenOption, opt.dataset.id); return; }
      if (e.target.closest("[data-cmd]")) e.preventDefault();
    });

    sheet.addEventListener("click", (e) => {
      const t = e.target;

      const rm = t.closest("[data-token-remove]");
      if (rm) { removeToken(rm.dataset.tokenRemove, rm.dataset.id); return; }

      const box = t.closest("[data-token-box]");
      if (box && !t.closest(".token")) {
        const input = $("[data-token-input]", box);
        if (!input.hidden && !input.disabled) input.focus();
        return;
      }

      if (t.closest("[data-attach]")) { fileInput.click(); return; }
      const att = t.closest("[data-attachment]");
      if (att && t.closest("[data-attachment-remove]")) {
        comp.attachments = comp.attachments.filter((f) => f.id !== att.dataset.attachment);
        $("[data-attachments]", sheet).innerHTML = attachmentsHtml();
        return;
      }

      const cmd = t.closest("[data-cmd]");
      if (cmd) {
        editor.focus();
        if (cmd.dataset.cmd === "mention") {
          document.execCommand("insertText", false, "@");
          checkEditorMention(editor, editorPop);
        } else {
          document.execCommand(cmd.dataset.cmd, false, null);
        }
        comp.notes = editor.innerHTML;
        syncTemplateBtn();
        return;
      }

      if (t.closest("[data-apply-template]")) {
        if (templateState().disabled) return;
        editor.innerHTML = typeCfg(comp.type).template;
        comp.notes = editor.innerHTML;
        editor.closest(".field").classList.remove("has-error");
        syncTemplateBtn();
        editor.focus();
        return;
      }

      if (t.closest("[data-add-task]")) {
        const task = { id: uid("t"), title: "", due: "", done: false, assigneeId: ME };
        comp.tasks.push(task);
        $("#task-list", sheet).innerHTML = tasksHtml();
        $(`[data-task="${task.id}"] [data-task-title]`, sheet).focus();
        return;
      }
      const taskEl = t.closest("[data-task]");
      if (taskEl && t.closest("[data-task-remove]")) {
        comp.tasks = comp.tasks.filter((x) => x.id !== taskEl.dataset.task);
        $("#task-list", sheet).innerHTML = tasksHtml();
        return;
      }
      if (taskEl && t.closest("[data-task-toggle]")) {
        const task = comp.tasks.find((x) => x.id === taskEl.dataset.task);
        task.done = !task.done;
        $("#task-list", sheet).innerHTML = tasksHtml();
        return;
      }

      if (t.closest("[data-composer-close]")) { requestCloseComposer(); return; }
      if (t.closest("[data-composer-save]")) { saveDraft(); closePanel(); toast("Saved to Drafts", { action: "View", onAction: () => { location.hash = "#/drafts"; } }); return; }
      if (t.closest("[data-composer-discard]")) { confirmDiscard(); return; }
      if (t.closest("[data-composer-log]")) { logActivity(); }
    });

    if (isDesktop()) setTimeout(() => (comp.entityId ? $("#f-type", sheet) : $("#tf-entity", sheet))?.focus(), 260);
  }

  function saveDraft() {
    const d = { ...clone(comp), draftId: comp.draftId || uid("d"), updatedAt: Date.now() };
    const i = DRAFTS.findIndex((x) => x.draftId === d.draftId);
    if (i >= 0) DRAFTS.splice(i, 1);
    DRAFTS.unshift(d);
    renderHeader();
    if (location.hash === "#/drafts") renderDrafts();
  }

  function requestCloseComposer() {
    if (isDirty() && JSON.stringify(comp) !== compSnapshot) {
      saveDraft();
      closePanel();
      toast("Saved to Drafts", { action: "View", onAction: () => { location.hash = "#/drafts"; } });
    } else {
      closePanel();
    }
  }

  function confirmDiscard() {
    if (!isDirty()) { closePanel(); return; }
    openSheet({
      title: "Discard this activity?", dialog: true,
      body: `<p class="sheet__text">${comp.draftId ? "The saved draft will be deleted too." : "Your notes and fields will be lost."}</p>`,
      footer: `<span class="spacer"></span><button type="button" class="btn btn--ghost" data-sheet-close>Keep editing</button><button type="button" class="btn btn--danger" data-confirm>Discard</button>`,
      onMount(panel) {
        $("[data-confirm]", panel).addEventListener("click", () => {
          if (comp.draftId) DRAFTS = DRAFTS.filter((d) => d.draftId !== comp.draftId);
          closeSheet();
          closePanel();
          renderHeader();
          if (location.hash === "#/drafts") renderDrafts();
          toast("Discarded");
        });
      },
    });
  }

  function logActivity() {
    const errors = [];
    if (!comp.entityId) errors.push("entity");
    if (!comp.type) errors.push("type");
    if (!comp.subject.trim()) errors.push("subject");
    if (!notesFilled()) errors.push("notes");
    $$(".field.has-error", compRoot).forEach((f) => f.classList.remove("has-error"));
    errors.forEach((n) => $(`[data-field="${n}"]`, compRoot)?.classList.add("has-error"));
    if (errors.length) {
      $(".field.has-error", compRoot).scrollIntoView({ block: "center", behavior: "smooth" });
      toast(`Complete ${errors.length} required field${errors.length > 1 ? "s" : ""}`);
      return;
    }
    const cfg = typeCfg(comp.type);
    const a = {
      id: uid("a"),
      type: comp.type,
      entityId: comp.entityId,
      subject: comp.subject.trim(),
      notes: comp.notes,
      authorId: ME,
      date: new Date(`${comp.date}T${comp.time || "00:00"}`).getTime() || Date.now(),
      tasks: comp.tasks.filter((t) => t.title.trim()),
      attachments: clone(comp.attachments),
      comments: [],
    };
    cfg.details.forEach((k) => {
      const v = comp[k];
      if (Array.isArray(v) ? v.length : v) a[k] = k === "duration" ? +v : clone(v);
    });
    ACTIVITIES.unshift(a);
    if (comp.draftId) DRAFTS = DRAFTS.filter((d) => d.draftId !== comp.draftId);
    state.lastLoggedId = a.id;
    closePanel();
    renderHeader();
    if (location.hash === "#/drafts") location.hash = "#/";
    renderFeed();
    toast(matches(a) ? `${cfg.label} logged` : `${cfg.label} logged — hidden by current filters`);
  }

  /* ───────── Drafts ───────── */
  function visibleDrafts() {
    const q = state.draftsQuery.trim().toLowerCase();
    return DRAFTS
      .filter((d) => state.draftsSeg === "all" || d.source)
      .filter((d) => {
        if (!q) return true;
        const e = entityInfo(d.entityId);
        return `${d.subject} ${stripHtml(d.notes)} ${e ? e.label : ""}`.toLowerCase().includes(q);
      })
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }

  function renderDrafts() {
    const list = visibleDrafts();
    $("#drafts-total").textContent = `(${DRAFTS.length})`;
    $("#drafts-select-toggle").textContent = state.selectMode ? "Done" : "Select";
    $("#drafts-select-toggle").hidden = !DRAFTS.length;
    $$("#drafts-seg [data-seg]").forEach((b) => b.classList.toggle("is-active", b.dataset.seg === state.draftsSeg));

    if (!list.length) {
      $("#drafts-list").innerHTML = `
        <div class="empty">
          <div class="empty__icon">${svg("file", 22)}</div>
          <h2>${DRAFTS.length ? "No drafts match" : "No drafts"}</h2>
          <p>${DRAFTS.length ? "Try a different search or filter." : "Activities you close before logging are saved here."}</p>
        </div>`;
    } else {
      $("#drafts-list").innerHTML = `<div class="group__list">${list.map((d) => {
        const e = entityInfo(d.entityId);
        const preview = stripHtml(d.notes);
        const sel = state.selected.has(d.draftId);
        return `
          <div class="draft ${sel ? "is-selected" : ""}" data-draft="${d.draftId}" role="button" tabindex="0">
            ${state.selectMode ? checkbox(sel) : ""}
            ${typeIcon(d.type)}
            <div class="draft__main">
              <div class="draft__top">
                <span class="draft__entity ${e ? "" : "draft__entity--none"}">${e ? esc(e.label) : "No company selected"}</span>
                <time>${esc(relTime(d.updatedAt))}</time>
              </div>
              <div class="draft__subject ${d.subject ? "" : "draft__subject--none"}">${d.subject ? esc(d.subject) : "(No subject)"}</div>
              <div class="draft__preview">${preview ? esc(preview) : "(No notes)"}</div>
              ${d.source ? `<span class="draft__tag">${svg("mail", 12)}${esc(d.source)}</span>` : ""}
            </div>
          </div>`;
      }).join("")}</div>`;
    }

    const ab = $("#drafts-actionbar");
    ab.hidden = !state.selectMode;
    const n = state.selected.size;
    $("#drafts-selected-count").textContent = `${n} selected`;
    $("#drafts-delete").disabled = n === 0;
    $("#drafts-select-all").textContent = list.length && list.every((d) => state.selected.has(d.draftId)) ? "Deselect all" : "Select all";
  }

  function bindDrafts() {
    $("#drafts-back").addEventListener("click", () => { location.hash = "#/"; });
    $("#drafts-select-toggle").addEventListener("click", () => {
      state.selectMode = !state.selectMode;
      state.selected.clear();
      renderDrafts();
    });
    $("#drafts-search").addEventListener("input", (e) => { state.draftsQuery = e.target.value; renderDrafts(); });
    $("#drafts-seg").addEventListener("click", (e) => {
      const b = e.target.closest("[data-seg]");
      if (!b) return;
      state.draftsSeg = b.dataset.seg;
      state.selected.clear();
      renderDrafts();
    });
    $("#drafts-list").addEventListener("click", (e) => {
      const row = e.target.closest("[data-draft]");
      if (!row) return;
      const id = row.dataset.draft;
      if (state.selectMode) {
        state.selected.has(id) ? state.selected.delete(id) : state.selected.add(id);
        renderDrafts();
      } else {
        openComposer(DRAFTS.find((d) => d.draftId === id));
      }
    });
    $("#drafts-list").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.closest("[data-draft]")) e.target.click();
    });
    $("#drafts-select-all").addEventListener("click", () => {
      const list = visibleDrafts();
      const all = list.every((d) => state.selected.has(d.draftId));
      list.forEach((d) => (all ? state.selected.delete(d.draftId) : state.selected.add(d.draftId)));
      renderDrafts();
    });
    $("#drafts-delete").addEventListener("click", () => {
      const removed = DRAFTS.filter((d) => state.selected.has(d.draftId));
      DRAFTS = DRAFTS.filter((d) => !state.selected.has(d.draftId));
      state.selected.clear();
      state.selectMode = false;
      renderHeader();
      renderDrafts();
      toast(`${removed.length} draft${removed.length > 1 ? "s" : ""} deleted`, {
        action: "Undo",
        onAction: () => { DRAFTS = [...removed, ...DRAFTS]; renderHeader(); renderDrafts(); },
      });
    });
  }

  /* ───────── Routing ───────── */
  function route() {
    const drafts = location.hash === "#/drafts";
    $("#route-timeline").hidden = drafts;
    $("#route-drafts").hidden = !drafts;
    closeSheet();
    if (drafts) {
      renderDrafts();
    } else {
      state.selectMode = false;
      state.selected.clear();
      renderFeed();
    }
    window.scrollTo(0, 0);
    syncAppbarHeight();
  }

  function syncAppbarHeight() {
    const bar = location.hash === "#/drafts" ? $("#drafts-appbar") : $("#timeline-appbar");
    document.documentElement.style.setProperty("--appbar-h", `${bar.offsetHeight}px`);
  }

  /* ───────── Init ───────── */
  function init() {
    $$("[data-icon]").forEach((el) => {
      const size = 18;
      el.insertAdjacentHTML("afterbegin", svg(el.dataset.icon, size));
    });

    bindSearch();
    bindDrafts();

    $("#view-switch").addEventListener("click", (e) => openViewsSheet(e.currentTarget));
    $("#chips").addEventListener("click", (e) => {
      const c = e.target.closest("[data-chip]");
      if (!c) return;
      if (c.dataset.chip === "type") openTypesSheet(c);
      else if (c.dataset.chip === "date") openDateSheet(c);
      else {
        state.types = new Set(TYPE_KEYS);
        state.date = { preset: "anytime", start: "", end: "" };
        renderChips();
        renderFeed();
      }
    });

    $("#feed").addEventListener("click", (e) => {
      if (e.target.closest("[data-reset-all]")) { resetFilters(); return; }
      const link = e.target.closest("[data-entity-link]");
      if (link) { e.stopPropagation(); filterByEntity(link.dataset.entityLink); return; }
      const cm = e.target.closest("[data-open-comments]");
      if (cm) { openDetail(cm.dataset.openComments, { focusComment: true }); return; }
      const item = e.target.closest(".item");
      if (item) openDetail(item.dataset.id);
    });
    $("#feed").addEventListener("keydown", (e) => {
      const item = e.target.closest(".item");
      if (item && e.target === item && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        openDetail(item.dataset.id);
      }
    });

    $("#drafts-btn").addEventListener("click", () => { location.hash = "#/drafts"; });
    $("#add-btn").addEventListener("click", () => openComposer());
    $("#fab").addEventListener("click", () => openComposer());
    $("#refresh-btn").addEventListener("click", () => { renderFeed(); toast("Timeline refreshed"); });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (sheetOpen) closeSheet();
      else if (panelRequestClose) panelRequestClose();
    });
    window.addEventListener("resize", () => { if (sheetOpen && isDesktop()) closeSheet(); syncAppbarHeight(); });
    window.addEventListener("hashchange", route);
    if ("ResizeObserver" in window) {
      new ResizeObserver(syncAppbarHeight).observe($("#timeline-appbar"));
      new ResizeObserver(syncAppbarHeight).observe($("#drafts-appbar"));
    }

    renderAll();
    route();
  }

  init();
})();
