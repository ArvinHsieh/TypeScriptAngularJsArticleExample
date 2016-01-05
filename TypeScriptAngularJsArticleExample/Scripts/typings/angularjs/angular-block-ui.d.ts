declare module angular {

    interface IBlockUI {
        instances: IInstances;
        start(): void;
        stop(): void;
        state(): IState;
        isBlocking(): boolean;
    }

    interface IInstances {
        get(blockId: string): IBlockUI;
    }

    interface IState {
        blocking: boolean;
    }

}