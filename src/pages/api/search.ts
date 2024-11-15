import type { APIRoute } from 'astro';
import { searchBooks } from '../server/query';
import { countBooks } from '../server/count';

export const GET: APIRoute = async (context) => {
    const query = context.url.searchParams.get('query') || '';
    const page = context.url.searchParams.get('page') || '';

    const foundBooks = await searchBooks(query, page, 'asc', 4)
    const totalBooks = await countBooks(query)

    return new Response(
        JSON.stringify({
            books: foundBooks,
            bookCount: totalBooks
        }),
        {
            headers: { 'content-type': 'application/json'}
        }
    )
}