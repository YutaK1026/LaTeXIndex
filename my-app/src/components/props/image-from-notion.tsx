export default async function getImageListFromNotion(){
  const res = await fetch('/api/notion');
  const items = await res.json();
  return items
}