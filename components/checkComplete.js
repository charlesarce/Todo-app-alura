
const checkComplete = () => {
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square","icon")
    i.addEventListener("click",completeTask)
    return i
}
    const completeTask = (event) => {
   

        const elemment = event.target
    
        elemment.classList.toggle("fas")
        elemment.classList.toggle("completeicon")
        elemment.classList.toggle("far")


};
    
export default checkComplete