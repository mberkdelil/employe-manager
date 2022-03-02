export const addEmploye = employe => {
    return { type: "ADD", payload: employe }
};

export const deleteEmploye = id => {
    return { type: "DELETE", payload: id }
};

export const editEmploye = (employes) => {
    return { type: "EDIT", payload: employes }
}

export const searchEmploye = search => {
    return { type: "SEARCH", payload: search }
};