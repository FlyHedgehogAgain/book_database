import { defineDb, defineTable, column } from 'astro:db';

const Books = defineTable({
  columns:{
    isbn: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Books }
});
