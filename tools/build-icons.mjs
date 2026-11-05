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

fs.writeFileSync(
  OUT,
  `// Generated from horizon-design-system/horizon icons/icons — do not edit by hand.\nwindow.HZ_ICONS = ${JSON.stringify(icons)};\n`,
);
console.log("wrote", Object.keys(icons).length, "icons", fs.statSync(OUT).size, "bytes");
if (missing.length) console.log("missing:", missing.join(", "));
