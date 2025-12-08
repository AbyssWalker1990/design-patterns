import * as readlinePromises from "node:readline/promises";

export async function getUserInput(prompt: string): Promise<string> {
  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question(`${prompt} `);

  rl.close();

  return answer.trim().toLowerCase();
}
