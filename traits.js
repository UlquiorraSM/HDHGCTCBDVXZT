/**
 * traits.js – NPC Trait Definitions & Assignment
 * StoryKI
 *
 * Usage (include before Loading.html / Game.html script):
 *   <script src="traits.js"></script>
 *
 * Public API:
 *   TRAIT_POOLS          – raw trait data (read-only reference)
 *   assignNPCTraits(npc) – returns a new NPC object with .traits added
 *   getTraitColor(trait) – returns a CSS colour string for a personality trait
 */

/* ═══════════════════════════════════════════════════════════════════
   TRAIT POOLS
═══════════════════════════════════════════════════════════════════ */

const TRAIT_POOLS = {

    /* ────────────────────────────────────────────────────────────
       PERSONALITY
       Each entry: { label, tone }
         tone: "positive" | "negative" | "neutral"
    ──────────────────────────────────────────────────────────── */
    personality: [

        /* — Positive — */
        { label: "Loyal",          tone: "positive" },
        { label: "Brave",          tone: "positive" },
        { label: "Kind",           tone: "positive" },
        { label: "Honest",         tone: "positive" },
        { label: "Ambitious",      tone: "positive" },
        { label: "Charismatic",    tone: "positive" },
        { label: "Empathetic",     tone: "positive" },
        { label: "Generous",       tone: "positive" },
        { label: "Patient",        tone: "positive" },
        { label: "Wise",           tone: "positive" },
        { label: "Humorous",       tone: "positive" },
        { label: "Creative",       tone: "positive" },
        { label: "Determined",     tone: "positive" },
        { label: "Optimistic",     tone: "positive" },
        { label: "Protective",     tone: "positive" },
        { label: "Disciplined",    tone: "positive" },
        { label: "Adaptable",      tone: "positive" },
        { label: "Curious",        tone: "positive" },
        { label: "Reliable",       tone: "positive" },
        { label: "Forgiving",      tone: "positive" },
        { label: "Courageous",     tone: "positive" },
        { label: "Compassionate",  tone: "positive" },
        { label: "Sincere",        tone: "positive" },
        { label: "Humble",         tone: "positive" },
        { label: "Resourceful",    tone: "positive" },
        { label: "Affectionate",   tone: "positive" },
        { label: "Cheerful",       tone: "positive" },
        { label: "Diligent",       tone: "positive" },
        { label: "Gracious",       tone: "positive" },
        { label: "Perceptive",     tone: "positive" },

        /* — Negative — */
        { label: "Jealous",        tone: "negative" },
        { label: "Cowardly",       tone: "negative" },
        { label: "Cruel",          tone: "negative" },
        { label: "Deceptive",      tone: "negative" },
        { label: "Greedy",         tone: "negative" },
        { label: "Impulsive",      tone: "negative" },
        { label: "Arrogant",       tone: "negative" },
        { label: "Lazy",           tone: "negative" },
        { label: "Stubborn",       tone: "negative" },
        { label: "Pessimistic",    tone: "negative" },
        { label: "Vindictive",     tone: "negative" },
        { label: "Reckless",       tone: "negative" },
        { label: "Manipulative",   tone: "negative" },
        { label: "Selfish",        tone: "negative" },
        { label: "Fearful",        tone: "negative" },
        { label: "Envious",        tone: "negative" },
        { label: "Paranoid",       tone: "negative" },
        { label: "Hot-headed",     tone: "negative" },
        { label: "Bitter",         tone: "negative" },
        { label: "Possessive",     tone: "negative" },
        { label: "Callous",        tone: "negative" },
        { label: "Dishonest",      tone: "negative" },
        { label: "Spiteful",       tone: "negative" },
        { label: "Vain",           tone: "negative" },
        { label: "Volatile",       tone: "negative" },
        { label: "Cynical",        tone: "negative" },
        { label: "Deceitful",      tone: "negative" },
        { label: "Insolent",       tone: "negative" },
        { label: "Wasteful",       tone: "negative" },
        { label: "Ruthless",       tone: "negative" },

        /* — Neutral — */
        { label: "Quiet",          tone: "neutral" },
        { label: "Serious",        tone: "neutral" },
        { label: "Reserved",       tone: "neutral" },
        { label: "Eccentric",      tone: "neutral" },
        { label: "Stoic",          tone: "neutral" },
        { label: "Philosophical",  tone: "neutral" },
        { label: "Sarcastic",      tone: "neutral" },
        { label: "Melancholic",    tone: "neutral" },
        { label: "Idealistic",     tone: "neutral" },
        { label: "Pragmatic",      tone: "neutral" },
        { label: "Mysterious",     tone: "neutral" },
        { label: "Carefree",       tone: "neutral" },
        { label: "Nostalgic",      tone: "neutral" },
        { label: "Blunt",          tone: "neutral" },
        { label: "Formal",         tone: "neutral" },
        { label: "Dramatic",       tone: "neutral" },
        { label: "Introverted",    tone: "neutral" },
        { label: "Extroverted",    tone: "neutral" },
        { label: "Spiritual",      tone: "neutral" },
        { label: "Analytical",     tone: "neutral" },
        { label: "Impulsive",      tone: "neutral" },
        { label: "Traditional",    tone: "neutral" },
        { label: "Independent",    tone: "neutral" },
        { label: "Daydreamer",     tone: "neutral" },
        { label: "Superstitious",  tone: "neutral" },
        { label: "Calculating",    tone: "neutral" },
        { label: "Wanderer",       tone: "neutral" },
        { label: "Mischievous",    tone: "neutral" },
        { label: "Bookish",        tone: "neutral" },
        { label: "Secretive",      tone: "neutral" },
    ],

    /* ────────────────────────────────────────────────────────────
       APPEARANCE – HAIR COLOR
    ──────────────────────────────────────────────────────────── */
    hairColor: [
        "Black",
        "Dark Brown",
        "Brown",
        "Light Brown",
        "Chestnut",
        "Dirty Blonde",
        "Blonde",
        "Platinum Blonde",
        "Strawberry Blonde",
        "Red",
        "Auburn",
        "Copper",
        "Dark Red",
        "Ash Blonde",
        "Ash Brown",
        "Silver",
        "Gray",
        "White",
        "Salt & Pepper",
        "Blue-Black",
    ],

    /* ────────────────────────────────────────────────────────────
       APPEARANCE – EYE COLOR
    ──────────────────────────────────────────────────────────── */
    eyeColor: [
        "Black",
        "Dark Brown",
        "Brown",
        "Light Brown",
        "Hazel",
        "Amber",
        "Green",
        "Emerald Green",
        "Blue-Green",
        "Teal",
        "Blue",
        "Light Blue",
        "Ice Blue",
        "Gray",
        "Steel Gray",
        "Silver",
        "Violet",
        "Golden",
        "Red",
    ],

    /* ────────────────────────────────────────────────────────────
       APPEARANCE – SKIN COLOR
    ──────────────────────────────────────────────────────────── */
    skinColor: [
        "Porcelain",
        "Pale",
        "Fair",
        "Light",
        "Rosy",
        "Medium",
        "Golden",
        "Olive",
        "Tan",
        "Amber",
        "Bronze",
        "Caramel",
        "Brown",
        "Dark Brown",
        "Deep Brown",
        "Ebony",
    ],
};

/* ═══════════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
═══════════════════════════════════════════════════════════════════ */

/**
 * Pick `n` unique random items from an array.
 * If n >= arr.length, returns a shuffled copy of the whole array.
 * @param {any[]} arr
 * @param {number} n
 * @returns {any[]}
 */
function pickUniqueRandom(arr, n) {
    if (!arr || arr.length === 0) return [];
    const pool   = [...arr];
    const result = [];
    const count  = Math.min(n, pool.length);
    for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
    }
    return result;
}

/**
 * Pick a single random item from an array.
 * @param {any[]} arr
 * @returns {any|null}
 */
function pickOne(arr) {
    if (!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN ASSIGNMENT
═══════════════════════════════════════════════════════════════════ */

/**
 * Assign random traits to an NPC object.
 * Returns a NEW object — the original is not mutated.
 *
 * Result shape:
 * {
 *   ...npc,
 *   traits: {
 *     personality: [{ label, tone }, ...],   // 2–4 traits
 *     appearance: {
 *       hairColor : string,
 *       eyeColor  : string,
 *       skinColor : string,
 *     }
 *   }
 * }
 *
 * @param {object} npc
 * @returns {object}
 */
function assignNPCTraits(npc) {
    /* 2, 3, or 4 personality traits – weighted toward 2–3 */
    const weights     = [2, 2, 3, 3, 3, 4];
    const numPersonal = weights[Math.floor(Math.random() * weights.length)];

    return {
        ...npc,
        traits: {
            personality: pickUniqueRandom(TRAIT_POOLS.personality, numPersonal),
            appearance: {
                hairColor : pickOne(TRAIT_POOLS.hairColor),
                eyeColor  : pickOne(TRAIT_POOLS.eyeColor),
                skinColor : pickOne(TRAIT_POOLS.skinColor),
            },
        },
    };
}

/* ═══════════════════════════════════════════════════════════════════
   DISPLAY HELPERS
═══════════════════════════════════════════════════════════════════ */

/**
 * Returns a CSS rgba colour for a personality trait based on its tone.
 * Useful for badge styling in the Dev Panel.
 *
 * @param {{ label: string, tone: string }} trait
 * @returns {{ bg: string, border: string, text: string }}
 */
function getTraitStyle(trait) {
    switch (trait.tone) {
        case "positive":
            return {
                bg     : "rgba(25, 80, 40, 0.55)",
                border : "rgba(60, 180, 90, 0.45)",
                text   : "rgba(100, 220, 130, 0.95)",
            };
        case "negative":
            return {
                bg     : "rgba(80, 20, 20, 0.55)",
                border : "rgba(180, 60, 60, 0.45)",
                text   : "rgba(220, 100, 100, 0.95)",
            };
        default: /* neutral */
            return {
                bg     : "rgba(35, 35, 55, 0.6)",
                border : "rgba(100, 100, 160, 0.4)",
                text   : "rgba(160, 165, 220, 0.9)",
            };
    }
}

/**
 * Build an inline-styled HTML badge string for a personality trait.
 * @param {{ label: string, tone: string }} trait
 * @returns {string}  HTML string
 */
function buildTraitBadgeHTML(trait) {
    const s = getTraitStyle(trait);
    return (
        `<span style="` +
        `display:inline-block;` +
        `padding:2px 8px;` +
        `border-radius:5px;` +
        `border:1px solid ${s.border};` +
        `background:${s.bg};` +
        `color:${s.text};` +
        `font-size:10px;` +
        `font-weight:700;` +
        `letter-spacing:0.03em;` +
        `white-space:nowrap;` +
        `">${escTraitHtml(trait.label)}</span>`
    );
}

/**
 * Build a small colour-swatch + label HTML string for an appearance value.
 * @param {string} label   e.g. "Brown"
 * @param {string} cssColor  CSS colour for the swatch dot
 * @returns {string}  HTML string
 */
function buildAppearancePillHTML(label, cssColor) {
    const dot = cssColor
        ? `<span style="` +
          `display:inline-block;width:8px;height:8px;` +
          `border-radius:50%;background:${cssColor};` +
          `border:1px solid rgba(255,255,255,0.2);` +
          `margin-right:4px;vertical-align:middle;` +
          `"></span>`
        : "";
    return (
        `<span style="` +
        `display:inline-flex;align-items:center;` +
        `padding:2px 8px;border-radius:5px;` +
        `border:1px solid rgba(255,255,255,0.1);` +
        `background:rgba(30,30,30,0.8);` +
        `color:rgba(255,255,255,0.7);` +
        `font-size:10px;font-weight:600;` +
        `white-space:nowrap;` +
        `">${dot}${escTraitHtml(label)}</span>`
    );
}

/** Minimal HTML escaping for badge labels. */
function escTraitHtml(str) {
    return (str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/* ═══════════════════════════════════════════════════════════════════
   APPROXIMATE CSS COLOUR MAP  (hair / eye / skin → CSS colour)
   Used by buildAppearancePillHTML to render colour swatches.
═══════════════════════════════════════════════════════════════════ */

const APPEARANCE_COLORS = {

    /* Hair */
    "Black"              : "#1a1008",
    "Dark Brown"         : "#3b1f0e",
    "Brown"              : "#6b3a2a",
    "Light Brown"        : "#8b5e3c",
    "Chestnut"           : "#954535",
    "Dirty Blonde"       : "#b8975a",
    "Blonde"             : "#d4b06a",
    "Platinum Blonde"    : "#e8dfc8",
    "Strawberry Blonde"  : "#c87060",
    "Red"                : "#aa2020",
    "Auburn"             : "#8b3a3a",
    "Copper"             : "#b8612a",
    "Dark Red"           : "#7a1515",
    "Ash Blonde"         : "#c4b89a",
    "Ash Brown"          : "#7a6a5a",
    "Silver"             : "#b0b8c8",
    "Gray"               : "#888898",
    "White"              : "#e8e8e8",
    "Salt & Pepper"      : "#8a8a8a",
    "Blue-Black"         : "#0a0a1a",

    /* Eyes */
    "Dark Brown"         : "#3b1f0e",
    "Hazel"              : "#7a5e30",
    "Amber"              : "#c08020",
    "Green"              : "#3a7a3a",
    "Emerald Green"      : "#1a6a2a",
    "Blue-Green"         : "#2a7a7a",
    "Teal"               : "#1a6a6a",
    "Blue"               : "#2a5a9a",
    "Light Blue"         : "#5a90c8",
    "Ice Blue"           : "#a0c8e8",
    "Steel Gray"         : "#7a8898",
    "Silver"             : "#b0b8c8",
    "Violet"             : "#6a3a9a",
    "Golden"             : "#c89a20",
    "Red"                : "#9a2020",

    /* Skin */
    "Porcelain"          : "#f5ede8",
    "Pale"               : "#f0e0d8",
    "Fair"               : "#e8c8b8",
    "Light"              : "#d8b090",
    "Rosy"               : "#d4a090",
    "Medium"             : "#c09070",
    "Golden"             : "#c8a050",
    "Olive"              : "#a08848",
    "Tan"                : "#b07840",
    "Amber"              : "#c08830",
    "Bronze"             : "#a06828",
    "Caramel"            : "#9a6830",
    "Brown"              : "#7a4820",
    "Dark Brown"         : "#5a3010",
    "Deep Brown"         : "#3a1808",
    "Ebony"              : "#200e04",
};

/**
 * Look up the approximate CSS colour for an appearance value.
 * Falls back to a neutral mid-tone if not found.
 * @param {string} value
 * @returns {string}  CSS colour string
 */
function getAppearanceCssColor(value) {
    return APPEARANCE_COLORS[value] || "rgba(120,100,80,0.8)";
}
