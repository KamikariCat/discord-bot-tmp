export function Log(value: string) {
    if (!process.env.TOKEN) {
        return;
    }

    // eslint-disable-next-line
    console.log(value);
}
