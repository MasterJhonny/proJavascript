class Singleton {
    private static instance;
    private constructor(){
        // init
    }

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton;