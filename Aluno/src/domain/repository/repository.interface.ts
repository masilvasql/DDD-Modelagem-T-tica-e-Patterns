export default interface RepositoryInterface<T> {
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    // delete(id: number): Promise<void>;
    find(id: string): Promise<T>;
    findAll(): Promise<T[]>;
}