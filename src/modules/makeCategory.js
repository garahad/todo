const MAKE_CATEGORY = "MAKECATEGORY"
const DELETE_CATEGORY = "DELETECATEGORY"

export const makeCategory = () => {
  return {
    type: MAKE_CATEGORY
  }
}
export const deleteCategory = (id) => {
  return {
    type: DELETE_CATEGORY,
    id
  }
}

