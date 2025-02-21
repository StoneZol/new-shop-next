import Toast from "@/shared/toast/toast";
import copy from '@/shared/public-func/copy';

export default function copyBreadcrumbs(text, successText){
  copy(text)
  Toast('success', successText)
}
