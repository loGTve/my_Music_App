export {};  //모듈화

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_MY_API_KEY: string;
        }
    }
}