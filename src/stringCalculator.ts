function add(numbers: string): number {
    if (!numbers) return 0;
    
    let delimiter: RegExp = /,|\n/;
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/\[(.*?)\]\n([\s\S]*)/);
        if (match) {
            const delimiters = match[1].split("][").map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            delimiter = new RegExp(delimiters.join("|"));
            numbers = match[2];
        } else {
            const parts = numbers.split("\n");
            delimiter = new RegExp(parts[0].substring(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            numbers = parts.slice(1).join("\n");
        }
    }
    
    const numArray: number[] = numbers.split(delimiter).map(Number).filter(n => n <= 1000);
    const negatives: number[] = numArray.filter(n => n < 0);
    
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    
    return numArray.reduce((sum, num) => sum + num, 0);
}

export default add;