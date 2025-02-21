export default async function copy (text){
    try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.error('Error:', err);
      }
}