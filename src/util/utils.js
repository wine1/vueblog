export const isNotNullORBlank=(...args)=>{
    for(let i=0;i<args.length;i++) {
        var argument=args[i];
        if(argument == null || argument == '' || argument==undefined) {
            return false;
        }
    }
    return true;
}