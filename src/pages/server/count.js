import { db, Books, like, and, isNotNull, count } from 'astro:db';

export async function countBooks(query = '') {
    const words = query.split(/\s+/);
    const numbers = query.match(/\d+/g) || [];

    const wordConditions = words.map(word => like(Books.title, `%${word}%`));
    const numberConditions = numbers.map(number => like(Books.title, `%${number}%`));

    const searchConditions = [...wordConditions, ...numberConditions];

    const results = query ?
        await db.select({ value: count() })
            .from(Books)
            .where(and(...searchConditions)) :
        await db.select({ value: count() })
            .from(Books)
            .where(isNotNull(Books.title))
    
    return results;
}