import { db, Books, like, and, asc, desc, isNotNull } from 'astro:db';

export async function searchBooks(query = '', pageString = '', sortby = 'asc', resultsPerPage = 4) {
    const page = parseInt(pageString)

    const words = query.split(/\s+/);
    const numbers = query.match(/\d+/g) || [];

    const wordConditions = words.map(word => like(Books.title, `%${word}%`));
    const numberConditions = numbers.map(number => like(Books.title, `%${number}%`));

    const searchConditions = [...wordConditions, ...numberConditions];

    const results = query ?
        await db.select()
            .from(Books)
            .where(and(...searchConditions))
            .orderBy(sortby === 'asc' ? asc(Books.title) : desc(Books.title))
            .limit(resultsPerPage)
            .offset(page * resultsPerPage) :
        await db.select()
            .from(Books)
            .where(isNotNull(Books.title))
            .orderBy(sortby === 'asc' ? asc(Books.title) : desc(Books.title))
            .limit(resultsPerPage)
            .offset(page * resultsPerPage);
    
    return results;
}