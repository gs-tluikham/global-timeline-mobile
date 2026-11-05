import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));

const SRC = process.argv[2] || path.resolve(HERE, "../../../horizon-design-system/horizon icons/icons");
const OUT = path.resolve(HERE, "../icons.js");

const MAP = {
  phone: "call",
  users: "users",
  mail: "email",
  message: "message",
  flag: "flag",
  search: "search",
  x: "cancel",
  chevronDown: "chevron-down",
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right",
  plus: "add",
  file: "document",
  refresh: "refresh",
  calendar: "calendar",
  layers: "hierarchy",
  building: "company",
  check: "tick",
  send: "send",
  more: "more-vertical",
  trash: "delete",
  link: "link",
  mapPin: "marker",
  bold: "bold",
  italic: "italic",
  underline: "underline",
  list: "bullet",
  at: "at-the-rate",
  checkCircle: "tick-in-circle",
  circle: "circle",
  paperclip: "attachment",
  filter: "filter",
  menu: "hamburger-left",
  clearFormat: "clear-text-formating",
};

// Not in the Horizon export: drawn to match Horizon's 24px `bullet` (1.4 stroke, rich-gray/60).
const EXTRA = {
  listOrdered: {
    "24": {
      vb: "0 0 24 24",
      inner:
        '<path d="M4.4 5.2 5.4 4.7V9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M4.3 13.2c.2-.5.6-.8 1.1-.8.6 0 1.1.4 1.1 1 0 .9-1.2 1.6-2.2 2.6h2.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M9 7H19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
        '<path d="M9 15H19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    },
  },
};

function load(file) {
  const raw = fs.readFileSync(file, "utf8");
  const vb = (raw.match(/viewBox="([^"]+)"/) || [])[1] || "0 0 24 24";
  const inner = raw
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/(fill|stroke)="#(?!fff\b|ffffff\b)[0-9a-fA-F]{3,6}"/g, '$1="currentColor"')
    .replace(/\s+/g, " ")
    .trim();
  return { vb, inner };
}

const icons = {};
const missing = [];
for (const [key, name] of Object.entries(MAP)) {
  const entry = {};
  for (const size of ["16", "24"]) {
    const f = path.join(SRC, size, `${name}.svg`);
    if (fs.existsSync(f)) entry[size] = load(f);
  }
  if (!entry["16"] && !entry["24"]) missing.push(`${key} → ${name}`);
  else icons[key] = entry;
}

Object.assign(icons, EXTRA);

fs.writeFileSync(
  OUT,
  `// Generated from horizon-design-system/horizon icons/icons — do not edit by hand.\nwindow.HZ_ICONS = ${JSON.stringify(icons)};\n`,
);
console.log("wrote", Object.keys(icons).length, "icons", fs.statSync(OUT).size, "bytes");
if (missing.length) console.log("missing:", missing.join(", "));
