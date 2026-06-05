type RevisionAuthor = {
	id: string;
	name: string;
	avatarUrl?: string;
};

type ProjectRevision = {
	id: string;
	shortHash: string;
	message: string;
	createdAt: string;
	author: RevisionAuthor;
	isCurrent?: boolean;
	stats: {
		tablesAdded: number;
		tablesUpdated: number;
		tablesRemoved: number;
		relationsAdded: number;
		relationsRemoved: number;
	};
};

export const revisionHistory: ProjectRevision[] = [
	{
		id: "rev_01JZK9T8QKX7X2Z4M1A9K2L3B8",
		shortHash: "8f3a2c9",
		message: "Add orders and order items tables",
		createdAt: "2026-06-04T20:42:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		isCurrent: true,
		stats: {
			tablesAdded: 2,
			tablesUpdated: 1,
			tablesRemoved: 0,
			relationsAdded: 3,
			relationsRemoved: 0,
		},
	},
	{
		id: "rev_01JZK6R4A9B2C8D7E5F1G3H9J0",
		shortHash: "a91fd02",
		message: "Create users profile schema",
		createdAt: "2026-06-04T18:16:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		stats: {
			tablesAdded: 1,
			tablesUpdated: 0,
			tablesRemoved: 0,
			relationsAdded: 0,
			relationsRemoved: 0,
		},
	},
	{
		id: "rev_01JZJZP5V8Q1M3N7T4B6C9D2E0",
		shortHash: "71de114",
		message: "Add products table and indexes",
		createdAt: "2026-06-03T23:50:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		stats: {
			tablesAdded: 1,
			tablesUpdated: 1,
			tablesRemoved: 0,
			relationsAdded: 0,
			relationsRemoved: 0,
		},
	},
	{
		id: "rev_01JZJXD4P7L9S2A5V8M1C6Q3R4",
		shortHash: "c2b9e81",
		message: "Link users to orders",
		createdAt: "2026-06-03T21:34:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		stats: {
			tablesAdded: 0,
			tablesUpdated: 2,
			tablesRemoved: 0,
			relationsAdded: 1,
			relationsRemoved: 0,
		},
	},
	{
		id: "rev_01JZJR1M5B8Q4L6A9X2C7V0N3P",
		shortHash: "0be82aa",
		message: "Initial schema draft",
		createdAt: "2026-06-02T15:12:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		stats: {
			tablesAdded: 2,
			tablesUpdated: 0,
			tablesRemoved: 0,
			relationsAdded: 0,
			relationsRemoved: 0,
		},
	},
	{
		id: "rev_01JZHP8W4M2A7D9F5K1S6Q3X0V",
		shortHash: "f34ac19",
		message: "Create empty DBGraph project",
		createdAt: "2026-06-01T10:05:00.000Z",
		author: {
			id: "user_01JZK8XK4A7D9A2H1V6M8Q0R5B",
			name: "brasga",
		},
		stats: {
			tablesAdded: 0,
			tablesUpdated: 0,
			tablesRemoved: 0,
			relationsAdded: 0,
			relationsRemoved: 0,
		},
	},
];