import { db, Books } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Books).values([
		{ isbn: 1, title: "Echoes of Eternity", description: "A tale of time travel and redemption" },
		{ isbn: 2, title: "The Lost Horizon", description: "A journey to a mythical land where dreams come alive" },
		{ isbn: 3, title: "Whispers in the Dark", description: "An investigator unearths secrets from a haunted past" },
		{ isbn: 4, title: "The Last Kingdom", description: "A fight for survival in a kingdom on the edge of collapse" },
		{ isbn: 5, title: "Fading Embers", description: "A love story rekindled amidst the ashes of war" },
		{ isbn: 6, title: "Chasing Shadows", description: "A detective chases a notorious thief through bustling city streets" },
		{ isbn: 7, title: "Beyond the Stars", description: "An astronaut’s adventure into the unknown reaches of space" },
		{ isbn: 8, title: "The Silver Compass", description: "An old compass leads a young sailor to hidden treasures" },
		{ isbn: 9, title: "Silent Footsteps", description: "A suspenseful thriller where no one can be trusted" },
		{ isbn: 10, title: "Echoes of the Past", description: "A historian uncovers ancient secrets that could change history" },
		{ isbn: 11, title: "Winds of Change", description: "A family navigates a rapidly changing world in the 1900s" },
		{ isbn: 12, title: "The Alchemist's Door", description: "A young girl stumbles upon a portal to another world" },
		{ isbn: 13, title: "Veil of Illusions", description: "A magician's apprentice learns the dangers of real magic" },
		{ isbn: 14, title: "A Journey Unknown", description: "A group of strangers embarks on a journey to find purpose" },
		{ isbn: 15, title: "Frozen in Time", description: "A scientist discovers a method to halt aging, with unforeseen consequences" },
		{ isbn: 16, title: "The Iron Heart", description: "A prince must find courage in an empire ruled by fear" },
		{ isbn: 17, title: "The Lightkeeper's Secret", description: "A lighthouse keeper guards more than just ships" },
		{ isbn: 18, title: "Waves of Destiny", description: "A fisherman finds a message in a bottle that changes his life" },
		{ isbn: 19, title: "Realm of the Forgotten", description: "An adventurer stumbles upon a hidden world lost to history" },
		{ isbn: 20, title: "Threads of Fate", description: "Two souls connected across centuries must change their fates" }
	])
}
