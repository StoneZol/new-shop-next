import Toast from "@/shared/toast/toast";

export default async function copy (text, successText){
    try {
        await navigator.clipboard.writeText(text);
        Toast('success', successText)
      } catch (err) {
        console.error('Error:', err);
      }
}