export type WorkAccent = 'blue' | 'purple';

export interface WorkItem {
	company: string;
	url: string;
	role: string;
	period: string;
	accent: WorkAccent;
	summary: string;
	tags: string[];
	impact: string[];
	image: string;
}
