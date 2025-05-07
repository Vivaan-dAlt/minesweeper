class Game{
    constructor(size){
        var obj={};
            obj.mineamt=0;
        for (let i=1;i<size+1;i++){
            obj[i]=[]
            for (let j=1;j<size+1;j++){
                let v=Math.round(Math.random());v==1?obj.mineamt++:1;
                obj[i].push(obj.mineamt<size/2?v:0)
            };
        };/*
        
        for (let i=1;i<size**2;i++){
            
            λ("ms",1).addhtml()
        };*/
        
        
        return [obj];
    }
}
console.log(new Game(8))