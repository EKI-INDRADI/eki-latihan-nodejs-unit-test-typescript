

export class MyException extends Error {

}


export const callMe = (name : any) => {
    if (name === "eki") {
        throw new MyException("Ups my exceptions happens");
    } else {
        return "OK";
    }
};