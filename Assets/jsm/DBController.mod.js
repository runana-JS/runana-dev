export function DataBase(){
	let sprite=Sprite();
	return {"selectedSprite":"common","sprite":{"common":sprite}}
}

export function Sprite(){
	let dataS=DataSet();
	return {"selectedDataSet":"root","dataS":{"root":dataS} }
}

export function DataSet(){
	return {"selectedLayer":0,"dataU":{},"dataE":{}}
} 

export function DataUnit(opts){
	opts = opts	|| {};
	let type1 =opts.type || 0;
	let val =opts.val || ["",""];
	return {"type":type1,"val":val}
}

export function OpenDB(jsonstr){
	let result;
	try{
		result=JSON.parse(jsonstr);
	}catch(e){
		return new DataBase();
	}
	return result;			
}
//Save database to json string
export function SaveDB(database){
	return JSON.stringify(database);
}

export function GetSprite(database){
	return database.sprite[database.selectedDataSet];
}