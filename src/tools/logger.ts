export function Log(value: string) {
    if (!process.env.DEV) {
        return;
    }

    // eslint-disable-next-line
    console.log(value);
}
