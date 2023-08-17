import type { Site } from './Site';

export interface Home {
    name(): string;
    site(): Site;
    price(): number;
 }