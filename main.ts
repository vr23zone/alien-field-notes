import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW: string = "Two stars. The locals ask 'how are you?' then walk away before the answer, and pay to sit in the dark watching a bigger rectangle. The sunsets are worth the trip, though.";

mkdirSync("/output", { recursive: true });

writeFileSync("/output/entry.txt", REVIEW, "utf8");
