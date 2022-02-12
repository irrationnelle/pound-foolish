export const it = (title: string, callback: () => void) => {
    try {
        callback();
        console.log(`✓ ${title}`)
    } catch (e) {
        console.error(`✕ ${title}`);
        console.error(e);
    }
}

export const expect = (expected: any) => ({
    toBe: (actual: any) => {
        if (expected !== actual) throw new Error(`${actual} is not ${expected}`)
        console.error(`${actual} is ${expected}`)
    }
})
