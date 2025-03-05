type MenuOptions = "" | "all" | "dog" | "cat" | "fishes"

export const CreateMenuObject = (activemenu : MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fishes: false
    }

    if(activemenu !==""){
        returnObject[activemenu] = true
    }
    return returnObject

}