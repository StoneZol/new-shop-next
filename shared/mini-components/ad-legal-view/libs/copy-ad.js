import copy from "@/shared/public-func/copy"
import Toast from "@/shared/toast/toast"

export default function copyAd(text){
    copy(text)
    Toast('success', `"${text}" скопировано!`)
}