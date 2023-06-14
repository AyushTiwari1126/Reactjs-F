export enum LOG_LEVEL{
    INFO,
    DEBUG,
    WARN,
    ERROR 
 };

export default class Logger{
    static LOG = (level:LOG_LEVEL, message:string)=>{
        switch(level){
            case LOG_LEVEL.INFO:
                console.log(message);
                break;
            default:
                console.error(message);
        }
        
    }
}