type Instantiable = { new (...args: any[]): any };

// TODO: Create AbscractApiClient library
export function constructObjectFromJSON<TClass extends Instantiable>(
    Class: TClass,
    data: Partial<InstanceType<TClass>>,
) {
    const instance = new Class();
    Object.assign(instance, data);
    return instance;
}
