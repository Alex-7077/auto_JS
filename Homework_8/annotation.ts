export class ObjectManipulator<T> {
    constructor(protected obj: T) {}

    public set<Key extends string, Value>(key: Key, value: Value): ObjectManipulator<T & {[K in Key]: Value}> {
        return new ObjectManipulator({...this.obj, [key]: value} as T & {[K in Key]: Value});
    }

    public get<Key extends keyof T>(key: Key): T[Key] {
        return this.obj[key];
    }

    public delete<Key extends keyof T>(key: Key): ObjectManipulator<Omit<T, Key>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj as Omit<T, Key>);
    }

    public getObject(): T {
        return this.obj;
    }
}
