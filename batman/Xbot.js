import fileList from "./fileList.js"
import Loader from "../Loader.js";
const folder = "batman/";
const list = [];

Object.keys(fileList).forEach((element, index) =>{
    list[index] = folder  + "animations/" +  fileList[index];
    console.log(list[index]);
})

const Xbot = (new Loader(folder + 'static.fbx', list, 2)).getModel();

const modes = {
    'normal':{
        'static':[5,1,false],
        'stand':[4,1,false],
        'jumpUp':[5,1,false],
        'jumpDown':[5,1,false],
        'left':[9,1,false],
        'right':[10,1,false],
        'walk':[8,1,false],
        'wave':[11,1,false],
        'punch':[2,1,false],
    },
    'run':{
        'left':[6, 1, false],
        'right':[7, 1, false],
        'run':[3,1,false],
    },
}

export default Xbot
export {modes}