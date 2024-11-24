export function Log(value: any, isError = false) {
    if (!process.env.DEV) {
        return;
    }

    // eslint-disable-next-line
    if (isError) console.log(value);
    // eslint-disable-next-line
    else console.error(value);
}
