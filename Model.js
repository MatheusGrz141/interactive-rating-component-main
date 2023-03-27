class Model{
    constructor(targetButton){
        this.targetButton = targetButton;
    }
    get getModel(){
        return this.targetButton.dataset.index;
    }
}