import notion from '@/app/api/notion';

import fs from 'fs';
const filepath = "src/app/api/notion/data.json"

export async function GET(request: Request) {
  if (!process.env.NOTION_DATABASE_ID) { console.log("id not found"); return; }
  const databaseId: string = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const news = response.results.map((page: any) => ({
    title: page.properties.Name.title[0].plain_text,
    id: page.id,
    image: `${process.env.R2_URL}/${page.properties.Name.title[0].plain_text}.png`,
    command: page.properties.command.rich_text[0].plain_text,
    description: page.properties.description.rich_text[0].plain_text,
    tag: page.properties.tag.select.name,
    searchword: page.properties.searchword.rich_text[0].plain_text
  }));

  fs.writeFileSync(filepath, JSON.stringify(news));
  return Response.json(news);
};