//!Ссылки эндпоинтов для API
//основной API
export const baseUrlApi = `https://gc2lch20-5267.euw.devtunnels.ms` //`https://gc2lch20-7283.euw.devtunnels.ms` // /api // https://ztrz483g-5267.euw.devtunnels.ms // https://fakestoreapi.com/

//get`sы
export const getProductUrlApi = `${baseUrlApi}/Products`

export const getCategoryUrlApi = `${baseUrlApi}/Category`

export const getBannersUrlApi = `${baseUrlApi}/Banners`

export const getImageUrlApi = `${baseUrlApi}/Image`

export const getUserUrlApi = `${baseUrlApi}/Users`

export const getOrderUrlApi = `${baseUrlApi}/Order`

//post`sы
export const postProductUrlApi = `${baseUrlApi}/Product/create`

export const postOrderUrlApi = `${baseUrlApi}/Order/create`

export const postCategoryUrlApi = `${baseUrlApi}/Category/create`

export const postBannerUrlApi = `${baseUrlApi}/Banners/create`

//put`sы
export const putProductUrlApi = `${baseUrlApi}/Product/update?`

export const putCategoryUrlApi = `${baseUrlApi}/Category/update?`

export const putBannerUrlApi = `${baseUrlApi}/Banners/update?`

export const putOrderUrlApi = `${baseUrlApi}/Order/update?`